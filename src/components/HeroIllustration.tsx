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

    const connectionPoints: { x: number; y: number; vx: number; vy: number }[] = Array(15).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const drawTechNetwork = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines with gradient
      connectionPoints.forEach((point, i) => {
        connectionPoints.forEach((otherPoint, j) => {
          if (i !== j) {
            const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
            if (distance < 150) {
              const gradient = ctx.createLinearGradient(point.x, point.y, otherPoint.x, otherPoint.y);
              gradient.addColorStop(0, "#f97316");
              gradient.addColorStop(1, "#fb923c");
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1 - distance / 150;
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw glowing points
      connectionPoints.forEach((point) => {
        // Point movement
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off walls
        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;

        // Keep points within bounds
        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));

        // Draw glowing point
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 20);
        gradient.addColorStop(0, "#f97316");
        gradient.addColorStop(0.5, "#f9731650");
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Add pulsing effect
        const pulseSize = 25 + Math.sin(time / 1000) * 5;
        const pulseGradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, pulseSize);
        pulseGradient.addColorStop(0, "#f9731630");
        pulseGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = pulseGradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(drawTechNetwork);
    };

    requestAnimationFrame(drawTechNetwork);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[500px] h-[500px] opacity-40 md:opacity-50"
    />
  );
};

export default HeroIllustration;
