'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PageTransition from './Components/PageTransition';
import Lenis from 'lenis'; // Import Lenis

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setIsAnimating(true);
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        duration: 0.8, // Adjust scroll duration for smoothness
        easing: (t) => t * (2 - t), // Easing function for smooth scroll
        smoothWheel: true, // Enable smooth wheel scrolling
        smoothTouch: true, // Enable smooth touch scrolling for mobile devices
        direction: 'vertical', // Scroll direction (can be 'vertical' or 'horizontal')
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy(); // Clean up the scroll instance on unmount
      };
    }
  }, []);

  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatePresence exitBeforeEnter>
          {isAnimating && !isHomePage && (
            <PageTransition key={pathname} onAnimationComplete={() => setIsAnimating(false)} />
          )}
          <div
            style={{
              position: isHomePage ? 'relative' : 'initial',
              zIndex: isHomePage ? 'auto' : 10,
            }}
            id="main-container"
            className="overflow-hidden" // The scrollable container
          >
            {children}
          </div>
        </AnimatePresence>
      </body>
    </html>
  );
}
