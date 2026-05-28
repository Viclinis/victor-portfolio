"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({
  children,
  className = "",
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const smoothY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const moveX = (mouseX - width / 2) * 0.15;
    const moveY = (mouseY - height / 2) * 0.15;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      style={{
        x: smoothX,
        y: smoothY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.button>
  );
}