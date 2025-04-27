import { useEffect, useRef } from "react";

const HeroIllustration = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 500;
    canvas.height = 500;

    const connectionPoints: { x: number; y: number }[] = Array(12).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }));

    const drawTechNetwork = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines
      ctx.strokeStyle = "#f9731650";
      ctx.lineWidth = 1;
      
      connectionPoints.forEach((point, i) => {
        connectionPoints.forEach((otherPoint, j) => {
          if (i !== j) {
            const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
            if (distance < 200) {
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw points with glow
      connectionPoints.forEach((point, i) => {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 20);
        gradient.addColorStop(0, "#f97316");
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Animate points in a circular motion
        point.x += Math.cos((time + i * 1000) / 2000) * 0.5;
        point.y += Math.sin((time + i * 1000) / 2000) * 0.5;

        // Keep points within canvas bounds
        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));
      });

      requestAnimationFrame(drawTechNetwork);
    };

    requestAnimationFrame(drawTechNetwork);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[500px] h-[500px] animate-pulse opacity-30 md:opacity-40"
    />
  );
};

export default HeroIllustration;
