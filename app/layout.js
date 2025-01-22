"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PageTransition from './Components/PageTransition';

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
        >
          {children}
        </div>
      </AnimatePresence>
      </body>
    </html>
  );
}
