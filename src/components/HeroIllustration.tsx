
import { useEffect, useRef } from "react";

const HeroIllustration = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas fill its parent
    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 300;
      canvas.height = canvas.parentElement?.clientHeight || 300;
    };
    resize();
    window.addEventListener("resize", resize);

    const points: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const numPoints = 50;

    // Initialize points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const drawLines = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update points
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });

      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = `rgba(249, 115, 22, ${Math.sin(time / 1000) * 0.1 + 0.1})`;
      ctx.lineWidth = 0.5;

      points.forEach((point, i) => {
        points.slice(i + 1).forEach(otherPoint => {
          const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
          if (distance < 100) {
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
          }
        });
      });

      ctx.stroke();

      requestAnimationFrame(drawLines);
    };

    requestAnimationFrame(drawLines);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
};

export default HeroIllustration;
