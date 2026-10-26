"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useThemeToggle() {
    const { resolvedTheme, setTheme, theme } = useTheme();
    

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const isDark = mounted ? resolvedTheme === "dark" : false;

    const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return { isDark, toggleTheme, mounted, theme };
}
