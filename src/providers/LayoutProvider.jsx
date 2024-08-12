"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function LayoutProvider({ children, scaleW, scaleH, className }) {
  const [dimensions, setDimensions] = useState({
    width: 60,
    height: 100,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

      // ? the bigger the number the smaller the width in % and vice versa
      const d = {
        width: clamp((scaleW / w) * 100, 0, 95),
        height: clamp((scaleH / w) * 100, 0, 95),
      };

      setDimensions(d);

      console.log({ w, h });
      console.log({ d });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scaleH, scaleW]);

  return (
    <div
      className={cn(`h-full`, className)}
      style={{ width: `${dimensions.width}%` }}
    >
      {children}
    </div>
  );
}

export default LayoutProvider;
