"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [fps, setFps] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Traditional animation frame pacing simulation (0 to 24 frames)
    let currentFrame = 0;
    const interval = setInterval(() => {
      let increment = 1;
      
      // Dynamic easing: starts fast, pauses slightly around keyframes, and snaps to completion
      if (currentFrame < 8) {
        increment = Math.random() > 0.2 ? 1 : 0;
      } else if (currentFrame < 18) {
        increment = Math.random() > 0.5 ? 1 : 0;
      } else if (currentFrame < 23) {
        increment = Math.random() > 0.8 ? 1 : 0; // tension building before finish
      } else {
        increment = 1;
      }

      currentFrame = Math.min(currentFrame + increment, 24);
      setFps(currentFrame);

      if (currentFrame === 24) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 1000);
      }
    }, 70);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="premium-preloader"
          initial={{ y: "0%" }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.1, ease: [0.85, 0, 0.15, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-gradient-to-tr from-[#bae6fd] via-[#e0f2fe] to-[#7dd3fc] text-void-black select-none p-6 lg:p-[4vw] overflow-hidden"
        >
          {/* Animated Film Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] animate-[pulse_2s_infinite]" />
          
          {/* High-End Technical Spec Grids */}
          <div className="absolute inset-0 pointer-events-none border border-void-black/10 m-4 lg:m-[2vw]">
            {/* Center Grid Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-8 h-[1px] bg-void-black/20" />
              <div className="h-8 w-[1px] bg-void-black/20 absolute" />
            </div>
            {/* Corner Coordinates */}
            <span className="absolute top-4 left-4 font-mono text-[9px] text-void-black/50">SYS.INIT // B_S_2026</span>
            <span className="absolute top-4 right-4 font-mono text-[9px] text-void-black/50">LAT. 11.0371° N // LON. 122.6398° E</span>
            <span className="absolute bottom-4 left-4 font-mono text-[9px] text-void-black/50">FPS_TARGET_LOCK: 24.00</span>
            <span className="absolute bottom-4 right-4 font-mono text-[9px] text-void-black/50">REF.SCALE: 1:1</span>
          </div>

          {/* Top Status Header */}
          <div className="relative z-10 flex justify-between items-center w-full font-mono text-[10px] sm:text-xs tracking-[0.25em] text-void-black/70 uppercase border-b border-void-black/10 pb-4">
            <span className="font-bold text-void-black">BARORO STUDIO</span>
            <span className="hidden md:inline text-void-black/60">● GMT+8 PASSI CITY</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-void-black animate-ping" />
              COMPILING CELL SEQUENCE
            </span>
          </div>

          {/* Central Frame Counter Display */}
          <div className="relative z-10 flex flex-col justify-center items-start flex-grow my-auto">
            <div className="relative font-bold text-[14vw] sm:text-[11vw] leading-none tracking-[-0.04em] uppercase font-sans text-void-black">
              {/* Odometer-like slide in for numbers */}
              <span className="inline-block relative overflow-hidden h-[1em] align-bottom">
                <motion.span
                  key={fps}
                  initial={{ y: "80%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="inline-block text-[#6366f1]"
                >
                  {fps}
                </motion.span>
              </span>
              <span className="text-void-black/30">/</span>
              <span>24 fps</span>
            </div>
            
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest text-void-black/70 mt-4 uppercase">
              <span className="text-[#6366f1] font-bold">[ {Math.floor((fps / 24) * 100)}% ]</span>
              <span>RENDER SEQUENCE READY</span>
            </div>
          </div>

          {/* Bottom Architectural Progress System */}
          <div className="relative z-10 w-full flex flex-col gap-4">
            <div className="relative w-full h-[60px] sm:h-[80px] bg-void-black/5 border border-void-black/10 rounded-sm overflow-hidden p-1.5">
              {/* Main Progress Block */}
              <motion.div
                className="absolute inset-y-1.5 left-1.5 bg-void-black shadow-[0_0_20px_rgba(0,0,0,0.05)]"
                style={{ width: `calc(${(fps / 24) * 100}% - 12px)` }}
                transition={{ ease: "easeOut", duration: 0.08 }}
              />
              
              {/* Glowing Trail (Lagging Behind Slightly) */}
              <motion.div
                className="absolute inset-y-1.5 left-1.5 bg-[#6366f1]/20 mix-blend-multiply"
                style={{ width: `calc(${(fps / 24) * 100}% - 12px)` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
            
            <div className="flex justify-between font-mono text-[9px] tracking-wider text-void-black/60 uppercase">
              <span>00_BOOT_LOADER</span>
              <span>STATE: {fps === 24 ? "LAUNCH_READY" : "ACQUIRING_FRAME_RIGS"}</span>
              <span>24_PLAYBACK</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
