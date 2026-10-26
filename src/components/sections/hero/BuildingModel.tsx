"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { MutableRefObject } from "react";

type BuildingModelProps = {
  progress: MutableRefObject<number>;
};

export default function BuildingModel({ progress }: BuildingModelProps) {
  "use no memo";

  const { scene } = useGLTF("/models/building.glb");

  const clippingPlane = useRef(new THREE.Plane(new THREE.Vector3(0, -1, 0), 0));

  const modelData = useMemo(() => {
    const clone = scene.clone(true);
    const materials: THREE.Material[] = [];

    const originalBounds = new THREE.Box3().setFromObject(clone);
    const originalSize = originalBounds.getSize(new THREE.Vector3());
    const originalCenter = originalBounds.getCenter(new THREE.Vector3());

    const maxDimension = Math.max(
      originalSize.x,
      originalSize.y,
      originalSize.z,
    );

    const scale = 5.5 / Math.max(maxDimension, 0.001);

    clone.scale.setScalar(scale);
    clone.position.set(
      -originalCenter.x * scale,
      -originalBounds.min.y * scale,
      -originalCenter.z * scale,
    );

    clone.updateMatrixWorld(true);

    clone.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;

      const originalMaterial = object.material;
      const sourceMaterials = Array.isArray(originalMaterial)
        ? originalMaterial
        : [originalMaterial];

      const clonedMaterials = sourceMaterials.map((material) => {
        const clonedMaterial = material.clone();

        clonedMaterial.needsUpdate = true;
        materials.push(clonedMaterial);

        return clonedMaterial;
      });

      object.material = Array.isArray(originalMaterial)
        ? clonedMaterials
        : clonedMaterials[0];
    });

    clone.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(clone);

    return {
      scene: clone,
      minY: bounds.min.y,
      maxY: bounds.max.y,
      materials,
    };
  }, [scene]);

  // اتصال clipping plane بعد از ساخت مدل
useEffect(() => {
  modelData.materials.forEach((material) => {
    material.clippingPlanes = [clippingPlane.current];
    material.clipShadows = true;
    material.needsUpdate = true;
  });

  clippingPlane.current.constant = modelData.minY;

  return () => {
    modelData.materials.forEach((material) => {
      material.dispose();
    });
  };
}, [modelData]);
  
  useFrame(() => {
    const p = THREE.MathUtils.clamp(progress.current, 0, 1);

    // سهم هر مرحله از کل انیمیشن
    const phases = [
      { start: 0, end: 0.15, from: 0, to: 0.08 },
      { start: 0.15, end: 0.55, from: 0.08, to: 0.62 },
      { start: 0.55, end: 0.85, from: 0.62, to: 0.92 },
      { start: 0.85, end: 1, from: 0.92, to: 1 },
    ];

    const phase =
      phases.find((item) => p >= item.start && p <= item.end) ??
      phases[phases.length - 1];

    const localProgress = THREE.MathUtils.clamp(
      (p - phase.start) / (phase.end - phase.start),
      0,
      1,
    );

    const easedProgress = THREE.MathUtils.smoothstep(localProgress, 0, 1);

    const normalizedHeight = THREE.MathUtils.lerp(
      phase.from,
      phase.to,
      easedProgress,
    );

    const cutY = THREE.MathUtils.lerp(
      modelData.minY,
      modelData.maxY,
      normalizedHeight,
    );

    clippingPlane.current.constant = cutY;
  });

  return <primitive object={modelData.scene} />;
}

useGLTF.preload("/models/building.glb");
