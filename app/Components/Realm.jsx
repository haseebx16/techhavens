"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { font } from "./fonts/font";

gsap.registerPlugin(ScrollTrigger);

const Realm = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { scale: 1, padding: "3rem", height: "auto", width: "100%", zIndex: 20 }, // Default state
      {
        scale: 1.5, // Zoom-in effect
        padding: "0", // Remove padding
        height: "100vh", // Fullscreen height
        width: "100vw", // Fullscreen width
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top center", // Trigger when section is fully in viewport
          end: "top center", // End immediately after triggering
          toggleActions: "play none none reverse", // Play animation when entering and reverse on exit
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${font.className} bg-black p-12 text-white flex justify-center items-center`}
      style={{ zIndex: 1000 }}
    >
      <p className="text-5xl">Enter The Realm Of Tech Haven</p>
    </section>
  );
};

export default Realm;
