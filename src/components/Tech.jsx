import React, { useRef, useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const containerRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0, width: 1, height: 1 });

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPointer((prev) => ({ ...prev, width: rect.width, height: rect.height }));
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handlePointer = (x, y) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPointer((prev) => ({
        ...prev,
        x: x - rect.left,
        y: y - rect.top,
      }));
    }
  };

  const handleMouseMove = (e) => {
    handlePointer(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches.length > 0) {
      handlePointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handlePointerLeave = () => {
    setPointer((prev) => ({ ...prev, x: prev.width / 2, y: prev.height / 2 }));
  };

  // Calculate normalized device coordinates (NDC) for the pointer
  const pointerNDC = {
    x: (pointer.x / pointer.width) * 2 - 1,
    y: -((pointer.y / pointer.height) * 2 - 1),
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handlePointerLeave}
      onTouchEnd={handlePointerLeave}
      className='flex flex-row flex-wrap justify-center gap-10 relative'
      style={{ cursor: "pointer" }}
    >
      {technologies.map((technology, idx) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} pointerNDC={pointerNDC} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
