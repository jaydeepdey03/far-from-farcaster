import {useEffect, useRef} from "react";
import {animate, motion, useMotionValue, useTransform} from "framer-motion";

export default function RewardCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  const dampen = 40;
  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    if (typeof window === "undefined") return;
    // recalculate grid on resize
    window.addEventListener("mousemove", handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div
        ref={cardRef}
        className="rounded-[20px] blur-[3px] brightness-[120%] bg-red-300"
        style={{transformStyle: "preserve-3d"}}
      ></div>
    </div>
  );
}
