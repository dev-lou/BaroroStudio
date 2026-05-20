"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [logText, setLogText] = useState("INITIALIZING ENGINE...");

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";

    // Smooth progress counter with realistic slow-down near the end
    let current = 0;
    const interval = setInterval(() => {
      // Stagger speed: fast at first, slow down at 80%, then snap to 100
      let increment = 1;
      if (current < 50) {
        increment = Math.floor(Math.random() * 8) + 2;
      } else if (current < 85) {
        increment = Math.floor(Math.random() * 4) + 1;
      } else if (current < 99) {
        increment = Math.random() > 0.7 ? 1 : 0; // slower pacing
      } else {
        increment = 1;
      }

      current = Math.min(current + increment, 100);
      setProgress(current);

      // Dynamically update terminal logs based on loading progress
      if (current < 20) {
        setLogText("LOADING BARORO CORE SYSTEM ENGINE...");
      } else if (current < 45) {
        setLogText("INITIALIZING GRAPHICS PIPELINES...");
      } else if (current < 65) {
        setLogText("COMPILING CUSTOM SHADERS & VIEWPORTS...");
      } else if (current < 85) {
        setLogText("LOADING 3D GEOMETRIES & CHARACTER RIGS...");
      } else if (current < 99) {
        setLogText("OPTIMIZING NEON CONTRAST LOGIC...");
      } else {
        setLogText("SYSTEM READY. ENJOY THE EXPERIENCE.");
        clearInterval(interval);
        
        // Remove scroll lock and trigger exit transitions after a brief delay
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 800);
      }
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void-black text-off-white select-none">
          {/* Main Visual Container */}
          <div className="relative flex flex-col items-center gap-10">
            {/* Center Logo with Animated Strikethrough */}
            <div className="relative font-bold text-[7vw] lg:text-[5vw] uppercase tracking-[-0.04em] leading-none px-4">
              <span className="opacity-15">BARORO STUDIO</span>
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center">
                {/* Mask layer showing progress */}
                <motion.div 
                  className="h-[2px] bg-flare-red shadow-[0_0_15px_#6366f1]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Monospace Counters & Console Logs */}
            <div className="flex flex-col items-center gap-3 font-mono text-[10px] sm:text-xs tracking-wider text-gray-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="text-flare-red animate-pulse">●</span>
                <span>{logText}</span>
              </div>
              <div className="text-[24px] sm:text-[32px] font-light text-off-white tracking-widest mt-2">
                {String(progress).padStart(3, "0")}%
              </div>
            </div>
          </div>

          {/* Staggered double-slide-up overlay wipes */}
          <motion.div 
            className="absolute inset-0 bg-[#6366f1] z-10 origin-bottom"
            initial={{ scaleY: 0 }}
            animate={progress === 100 ? { scaleY: [0, 1, 0], y: [0, 0, "-100%"] } : { scaleY: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1], 
              times: [0, 0.5, 1],
              delay: 0.2 
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-void-black z-20"
            initial={{ y: "0%" }}
            animate={progress === 100 ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
