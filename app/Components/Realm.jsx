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
      { scale: 1, padding: "3rem", height: "auto", width: "100%", zIndex: 20 },
      {
        scale: 1.5, 
        padding: "0", 
        height: "100vh",
        width: "100vw",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "top center",
          toggleActions: "play none none reverse",
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
