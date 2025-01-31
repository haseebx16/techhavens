"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { font } from "./fonts/font";

gsap.registerPlugin(ScrollTrigger);

const Realm = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);  // Reference for the image

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#000000");
    gradient.addColorStop(1, "#000000");

    let angle = 0;
    const animateBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      angle += 0.01;
      ctx.setTransform(Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0);
      requestAnimationFrame(animateBackground);
    };

    animateBackground();

    const sectionElement = sectionRef.current;
    const contentElement = contentRef.current;
    const imageElement = imageRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: "top center",
        end: "top center",
        toggleActions: "play none none reverse",
      },
    });

    // Animation for the section
    timeline.fromTo(
      sectionElement,
      { scale: 1, padding: "3rem", height: "auto", width: "100%", zIndex: 20 },
      {
        scale: 1.5,
        padding: "0",
        height: "100vh",
        width: "100vw",
        duration: 2,
        ease: "power2.out",
      }
    );

    // Fade in content and reveal the image
    timeline.fromTo(
      contentElement,
      { opacity: 0, display: "none" },
      { opacity: 1, display: "block", duration: 1 },
      "-=1"
    );

    // Fade in image after content appears
    timeline.fromTo(
      imageElement,
      { opacity: 0, display: "none" },
      { opacity: 1, display: "block", duration: 1 },
      "-=1" // Starts at the same time as content
    );

    return () => {
      cancelAnimationFrame(animateBackground);
    };
  }, []);

  useEffect(() => {
    console.log("Realm component mounted");
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${font.className} text-white flex flex-col lg:flex-row items-center justify-between relative`}
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        
      }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />

      <div className="text-left px-12 w-full relative z-10 lg:w-1/2">
        <p ref={contentRef} className="md:text-5xl text-3xl md:pl-36 lg:pl-64 text-white ">About Us</p>
        <div
          ref={contentRef}
          className="hidden-content mt-8 md:pl-36 lg:pl-64"
          style={{
            opacity: 0,
            display: "none",
          }}
        >
          <p className="md:text-4xl text-2xl text-cards ">What is Tech Haven?</p>
          <p className="md:text-lg text-xs max-w-xl mt-4 text-white ">
            At Tech Haven, our agile and multi-disciplinary development teams
            have a well-defined methodology to deliver high-quality results. Our
            expertise spans a wide range of developmental projects, from UI/UX
            design to web or mobile development.
          </p>
        </div>
      </div>

      {/* Image */}
      <div ref={imageRef} className="relative lg:w-1/2" style={{ opacity: 0, display: "none" }}>
        <img
          src="/robo-hand.png"  // Replace this with the actual path to your image
          alt="Robo Hand"
          className="w-full h-96 object-contain md:pr-32 lg:pr-64"
        />
      </div>
    </section>
  );
};

export default Realm;
