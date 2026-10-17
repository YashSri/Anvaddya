"use client";

import React, { useEffect, useState } from "react";

export function SitePreloader() {
  const [isMounted, setIsMounted] = useState(false);
  const [isFadingContent, setIsFadingContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    // Prevent background scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Ensure critical fonts and page initialization complete
    const startTime = performance.now();
    const minDisplayTime = motionQuery.matches ? 400 : 900; // ms
    const maxFallbackTime = 2200; // ms fallback

    let timerId: NodeJS.Timeout;

    const startExitSequence = () => {
      // Step 1: Fade out circular ring & text
      setIsFadingContent(true);

      // Step 2: Fade out white background layer
      setTimeout(() => {
        setIsExiting(true);
      }, 180);

      // Step 3: Complete transition, restore body scroll, and unmount
      setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        setIsDestroyed(true);
      }, 550);
    };

    const handleReady = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, minDisplayTime - elapsed);

      timerId = setTimeout(() => {
        startExitSequence();
      }, remaining);
    };

    // Check if document and fonts are ready
    if (typeof document !== "undefined") {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready
          .then(() => {
            if (document.readyState === "complete") {
              handleReady();
            } else {
              window.addEventListener("load", handleReady, { once: true });
            }
          })
          .catch(() => {
            handleReady();
          });
      } else {
        if (document.readyState === "complete") {
          handleReady();
        } else {
          window.addEventListener("load", handleReady, { once: true });
        }
      }
    }

    // Safety fallback timer so preloader never blocks the user indefinitely
    const fallbackTimer = setTimeout(() => {
      startExitSequence();
    }, maxFallbackTime);

    return () => {
      clearTimeout(timerId);
      clearTimeout(fallbackTimer);
      motionQuery.removeEventListener("change", handleMotionChange);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (isDestroyed) {
    return null;
  }

  const letters = ["A", "n", "v", "a", "d", "d", "y", "a"];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Anvaddya Orbit"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        width: "100vw",
        opacity: isExiting ? 0 : 1,
        pointerEvents: isExiting ? "none" : "auto",
        transition: "opacity 0.4s ease-out",
        userSelect: "none",
      }}
      className={`fixed inset-0 z-[99999] flex h-dvh w-screen select-none items-center justify-center bg-[#FFFFFF] transition-opacity duration-400 ease-out ${
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Central composition: Animated circular ring with centered Anvaddya text (Tripled Size) */}
      <div
        className={`relative flex items-center justify-center transition-all duration-300 ease-out w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] md:w-[390px] md:h-[390px] ${
          isFadingContent ? "scale-98 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Flat 2D Precision Circular Loader Ring */}
        <svg
          className={`absolute inset-0 h-full w-full ${
            prefersReducedMotion ? "" : "animate-preloader-spin"
          }`}
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Base stationary track circle */}
          <circle
            cx="190"
            cy="190"
            r="176"
            stroke="#E5E7EB"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Active Brand Orange Arc */}
          <circle
            cx="190"
            cy="190"
            r="176"
            stroke="#FF6A00"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="290 815"
          />

          {/* Precision Near-Black Segment Marker */}
          <circle
            cx="190"
            cy="190"
            r="176"
            stroke="#111111"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="42 1060"
            strokeDashoffset="-290"
          />

          {/* Subtle Orange Anchor Node */}
          <rect
            x="185"
            y="8"
            width="10"
            height="10"
            fill="#FF6A00"
            rx="2"
          />
        </svg>

        {/* Centered Word: Anvaddya */}
        <div
          className="relative z-10 flex items-center justify-center font-sans text-[30px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-medium tracking-[0.06em] text-[#111111]"
          style={{
            fontFamily: "var(--font-inter), var(--font-manrope), sans-serif",
          }}
        >
          {letters.map((char, index) => (
            <span
              key={index}
              className={`inline-block ${
                prefersReducedMotion ? "opacity-100" : "animate-letter-wave"
              }`}
              style={{
                animationDelay: prefersReducedMotion ? "0ms" : `${index * 75}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Scoped CSS animations for circular rotation and letter wave */}
      <style jsx>{`
        @keyframes preloaderSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes letterWave {
          0%,
          100% {
            opacity: 0.38;
            transform: translateY(0px);
          }
          35% {
            opacity: 1;
            transform: translateY(-5px);
          }
          70% {
            opacity: 0.38;
            transform: translateY(0px);
          }
        }

        .animate-preloader-spin {
          animation: preloaderSpin 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-letter-wave {
          animation: letterWave 1.4s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-preloader-spin,
          .animate-letter-wave {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
