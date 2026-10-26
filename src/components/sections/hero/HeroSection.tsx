"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import type { MutableRefObject } from "react";

import type { Locale } from "@/src/types/common";
import Hero from "./Hero";
import StatsComponent from "../../StatsComponent";
import BuildingModel from "./BuildingModel";


gsap.registerPlugin(ScrollTrigger, useGSAP);

type Progress = MutableRefObject<number>;

const C = {
  paper: "#f7f5ef",
  ink: "#454c4e",
  line: "#aab0ad",
  faint: "#d5d6d0",
  concrete: "#e9e7df",
  gold: "#d5b06d",
};

const W = 2.6;
const D = 2;

function Line({
  points,
  color = C.line,
  opacity = 1,
}: {
  points: [number, number, number][];
  color?: string;
  opacity?: number;
}) {
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setFromPoints(points.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    return g;
  }, [points]);
return (
  <lineSegments geometry={geometry}>
    <lineBasicMaterial color={color} transparent opacity={opacity} />
  </lineSegments>
);
}



function Blueprint() {
  const lines = useMemo(() => {
    const result: {
      points: [number, number, number][];
      major: boolean;
    }[] = [];

    for (let i = -14; i <= 14; i++) {
      const p = i * 0.22;

      result.push({
        points: [
          [-3.2, 0.012, p],
          [3.2, 0.012, p],
        ],
        major: i % 5 === 0,
      });

      result.push({
        points: [
          [p, 0.012, -2.8],
          [p, 0.012, 2.8],
        ],
        major: i % 5 === 0,
      });
    }

    return result;
  }, []);

  return (
    <group>
      <mesh position={[0, -0.055, 0]} receiveShadow>
        <boxGeometry args={[7.2, 0.1, 6.1]} />
        <meshStandardMaterial color={C.paper} roughness={1} />
      </mesh>

      {lines.map((item, i) => (
        <Line
          key={i}
          points={item.points}
          color={item.major ? C.line : C.faint}
          opacity={item.major ? 0.75 : 0.55}
        />
      ))}

      {/* پلان و خطوط پیرامونی فونداسیون */}
      <Line
        points={[
          [-W / 2 - 0.2, 0.018, -D / 2 - 0.2],
          [W / 2 + 0.2, 0.018, -D / 2 - 0.2],
          [W / 2 + 0.2, 0.018, D / 2 + 0.2],
          [-W / 2 - 0.2, 0.018, D / 2 + 0.2],
          [-W / 2 - 0.2, 0.018, -D / 2 - 0.2],
        ]}
        color={C.ink}
      />

      {/* خطوط اندازه‌گذاری */}
      <Line
        points={[
          [-W / 2, 0.02, D / 2 + 0.48],
          [W / 2, 0.02, D / 2 + 0.48],
        ]}
        color={C.gold}
      />
      <Line
        points={[
          [W / 2 + 0.48, 0.02, -D / 2],
          [W / 2 + 0.48, 0.02, D / 2],
        ]}
        color={C.gold}
      />

      {/* محورهای ستون‌ها */}
      {[-1, 0, 1].map((x) =>
        [-1, 1].map((z) => (
          <Line
            key={`${x}-${z}`}
            points={[
              [x * (W / 2 - 0.12), 0.02, z * (D / 2 - 0.12) - 0.12],
              [x * (W / 2 - 0.12), 0.02, z * (D / 2 - 0.12) + 0.12],
            ]}
            color={C.ink}
          />
        )),
      )}
    </group>
  );
}


function BuildingScene({progress }: { progress: Progress }) {
  return (
    <>
      <color attach="background" args={[C.paper]} />

      <ambientLight intensity={1.6} />

      <directionalLight position={[5, 9, 7]} intensity={1.2} />

      <Environment preset="city" environmentIntensity={1} />

      <Blueprint />
      <BuildingModel progress={progress} />

      <OrbitControls
        makeDefault
        target={[0, 2.6, 0]}
        enableRotate
        enableDamping
        dampingFactor={0.08}
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.6}
        minPolarAngle={0.45}
        maxPolarAngle={1.25}
      />
    </>
  );
}

export default function HeroSection({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useRef(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const tween = gsap.to(progress, {
        current: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative min-h-[260vh] bg-[#f7f5ef]">
      <div className="sticky top-0 h-screen min-h-170 overflow-hidden">
        {/* تصویرسازی محدود به سمت چپ؛ فضای مستقل برای متن */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[58%]">
          <Canvas
            dpr={[1, 1.5]}
            camera={{
              position: [7.8, 9.2, 8.6],
              fov: 31,
              near: 0.1,
              far: 100,
            }}
             gl={{
    antialias: true,
    alpha: false,
    localClippingEnabled: true,
  }}

          >
            <BuildingScene progress={progress} />
          </Canvas>
        </div>

        {/* متن در سمت راست و بیرون از محدوده اصلی تصویر */}
        <div className="pointer-events-none relative z-10 flex h-full flex-col">
          <div className="pointer-events-auto ml-auto w-full lg:w-[44%]">
            <Hero locale={locale} />
          </div>

          <div className="mt-auto pointer-events-auto relative z-20">
            <StatsComponent locale={locale} />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-5 left-6 z-20 hidden items-center gap-3 text-[10px] tracking-[0.18em] text-[#777e7d] md:flex">
          <span className="h-7 w-px bg-[#d5b06d]" />
          <span>SCROLL TO DRAW</span>
        </div>

        <div className="pointer-events-none absolute bottom-5 right-6 z-20 text-[10px] tracking-[0.14em] text-[#777e7d]">
          DRAG TO ROTATE
        </div>
      </div>
    </section>
  );
}
