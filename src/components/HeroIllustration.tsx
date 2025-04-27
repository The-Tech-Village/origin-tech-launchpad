
import { useEffect, useRef } from "react";

const HeroIllustration = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    const drawShape = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw circles with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#f97316");
      gradient.addColorStop(1, "#fbbf24");
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          50 + i * 30,
          0,
          Math.PI * 2 * Math.sin((time + i * 1000) / 2000)
        );
        ctx.stroke();
      }

      requestAnimationFrame((t) => drawShape(t));
    };

    requestAnimationFrame(drawShape);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 md:opacity-30 animate-pulse"
    />
  );
};

export default HeroIllustration;
