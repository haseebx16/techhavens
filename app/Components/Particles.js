"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesCX = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "t",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "repulse" },
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        repulse: { distance: 200 },
        grab: { distance: 150 },
      },
    },
    particles: {
      color: { value: "#FFFFFF" },
      links: { color: "#FFFFFF", distance: 150, enable: true, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
      number: { value: 200, density: { enable: true } },
      opacity: { value: 1.0 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }));

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      {init && <Particles id="tsparticles" options={options} />}
    </div>
  );
};

export default ParticlesCX;
