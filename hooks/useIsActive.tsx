"use client";

import { usePathname } from "next/navigation";

export function useIsActive() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    const normalizedPath = `/${path}`.replace(/\/+$/, "");
    const normalizedCurrent = pathname.replace(/\/+$/, "");
    console.log( {normalizedCurrent, normalizedPath} );
    return normalizedCurrent === normalizedPath;
  };

  return isActive;
}
