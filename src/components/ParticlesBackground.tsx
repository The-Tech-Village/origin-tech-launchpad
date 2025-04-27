
import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {/* @ts-ignore */}
      <tsparticles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            opacity: 0,
          },
          particles: {
            color: {
              value: ["#ffffff", "#f97316"],
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
            links: {
              color: "#f97316",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
