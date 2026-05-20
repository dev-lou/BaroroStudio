"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [fps, setFps] = useState(0);
  const [loading, setLoading] = useState(true);
  const [morphStage, setMorphStage] = useState<"loading" | "expanding" | "glitching" | "completed">("loading");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let currentFrame = 0;
    const interval = setInterval(() => {
      let increment = 1;
      
      if (currentFrame < 8) {
        increment = Math.random() > 0.2 ? 1 : 0;
      } else if (currentFrame < 18) {
        increment = Math.random() > 0.5 ? 1 : 0;
      } else if (currentFrame < 23) {
        increment = Math.random() > 0.8 ? 1 : 0;
      } else {
        increment = 1;
      }

      currentFrame = Math.min(currentFrame + increment, 24);
      setFps(currentFrame);

      if (currentFrame === 24) {
        clearInterval(interval);
      }
    }, 70);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (fps === 24) {
      setMorphStage("expanding");

      // Step 1: Progress bar has expanded vertically to cover the text
      const timer1 = setTimeout(() => {
        setMorphStage("glitching");
      }, 450);

      // Step 2: Glitch effect runs and logo stabilizes
      const timer2 = setTimeout(() => {
        setMorphStage("completed");
        
        // Step 3: Fade-out preloader screen to reveal the home page
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 400);
      }, 1150);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [fps]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="premium-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-tr from-[#bae6fd] via-[#e0f2fe] to-[#7dd3fc] text-void-black select-none p-6 lg:p-[4vw] pb-0 lg:pb-0 overflow-hidden"
        >
          {/* Animated Film Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] animate-[pulse_2s_infinite]" />
          
          {/* Upper-Left Large Counter Display */}
          <motion.div 
            className="relative z-10 flex flex-col justify-start items-start mt-[8vh]"
            animate={{ 
              opacity: morphStage === "loading" ? 1 : 0,
              y: morphStage === "loading" ? 0 : -20 
            }}
            transition={{ duration: 0.4, ease: [0.85, 0, 0.15, 1] }}
          >
            <div className="relative font-bold text-[14vw] sm:text-[11vw] leading-none tracking-[-0.04em] uppercase font-sans text-void-black">
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
          </motion.div>

          {/* Morphing Logo Text & Progress Bar Block */}
          <div className="absolute inset-x-0 bottom-0 px-2 pb-2 lg:px-[1.27315vw] lg:pb-[1.27315vw] z-30">
            <div className="relative w-full flex items-center justify-center font-semibold text-[8.5vw] sm:text-[11vw] tracking-[-0.05em] uppercase leading-[0.85] lg:text-[13.5vw] text-center">
              
              {/* Invisible Background Text Template (Used purely to establish bounds) */}
              <span className="relative inline-block text-transparent select-none text-center">
                Baroro Studio
                <span 
                  className="absolute right-0 top-[-0.12em] border-current rounded-full w-[0.18em] h-[0.18em] flex items-center justify-center font-sans font-[900] tracking-normal indent-0 leading-none select-none"
                  style={{ borderWidth: "max(1.5px, 0.022em)", borderStyle: "solid", minWidth: "14px", minHeight: "14px" }}
                >
                  <span 
                    className="font-[900] translate-y-[-0.01em]"
                    style={{ fontSize: "max(8px, 0.095em)" }}
                  >
                    R
                  </span>
                </span>

                {/* Overlaid Progress Bar (Grows horizontally left-to-right, then expands vertically center-out) */}
                <motion.span
                  className="absolute left-0 right-0 bg-void-black z-20 h-[12px] lg:h-[20px]"
                  style={{
                    top: "48%",
                    y: "-50%",
                    scaleX: morphStage === "loading" ? fps / 24 : 1,
                    originX: morphStage === "loading" ? 0 : 0.5,
                    originY: 0.5,
                  }}
                  animate={{
                    scaleY: morphStage === "loading" ? 1 : morphStage === "expanding" ? 11 : 0,
                    opacity: morphStage === "glitching" || morphStage === "completed" ? 0 : 1,
                  }}
                  transition={
                    morphStage === "expanding"
                      ? { duration: 0.4, ease: [0.19, 1, 0.22, 1] }
                      : { duration: 0.1 }
                  }
                />

                {/* Cyan Glitch Copy (Chromatic Aberration Overlay) */}
                {morphStage === "glitching" && (
                  <motion.span
                    className="absolute inset-0 text-[#06b6d4] select-none text-center z-10 mix-blend-darken after:content-[''] after:absolute after:left-0 after:right-0 after:top-[48%] after:h-[12px] lg:after:h-[20px] after:bg-current"
                    animate={{
                      x: [-4, 5, -6, 3, 0],
                      y: [2, -2, 3, -1, 0],
                      opacity: [0.8, 0, 0.9, 0.3, 0],
                    }}
                    transition={{ duration: 0.6, ease: "linear" }}
                  >
                    Baroro Studio
                    <span 
                      className="absolute right-0 top-[-0.12em] border-current rounded-full w-[0.18em] h-[0.18em] flex items-center justify-center font-sans font-[900] tracking-normal indent-0 leading-none select-none"
                      style={{ borderWidth: "max(1.5px, 0.022em)", borderStyle: "solid", minWidth: "14px", minHeight: "14px" }}
                    >
                      <span 
                        className="font-[900] translate-y-[-0.01em]"
                        style={{ fontSize: "max(8px, 0.095em)" }}
                      >
                        R
                      </span>
                    </span>
                  </motion.span>
                )}

                {/* Magenta Glitch Copy (Chromatic Aberration Overlay) */}
                {morphStage === "glitching" && (
                  <motion.span
                    className="absolute inset-0 text-[#ec4899] select-none text-center z-10 mix-blend-darken after:content-[''] after:absolute after:left-0 after:right-0 after:top-[48%] after:h-[12px] lg:after:h-[20px] after:bg-current"
                    animate={{
                      x: [5, -4, 4, -2, 0],
                      y: [-2, 3, -1, 2, 0],
                      opacity: [0.8, 0.5, 0, 0.8, 0],
                    }}
                    transition={{ duration: 0.6, ease: "linear" }}
                  >
                    Baroro Studio
                    <span 
                      className="absolute right-0 top-[-0.12em] border-current rounded-full w-[0.18em] h-[0.18em] flex items-center justify-center font-sans font-[900] tracking-normal indent-0 leading-none select-none"
                      style={{ borderWidth: "max(1.5px, 0.022em)", borderStyle: "solid", minWidth: "14px", minHeight: "14px" }}
                    >
                      <span 
                        className="font-[900] translate-y-[-0.01em]"
                        style={{ fontSize: "max(8px, 0.095em)" }}
                      >
                        R
                      </span>
                    </span>
                  </motion.span>
                )}

                {/* Fully Active Text (Fades in, glitches, then transitions to white) */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={
                    morphStage === "glitching"
                      ? {
                          opacity: [1, 0.3, 1, 0.1, 1, 0.6, 1],
                          x: [0, -5, 6, -3, 3, 0],
                          y: [0, 2, -2, 1, -1, 0],
                          scaleY: [1, 1.15, 0.9, 1.05, 1],
                          color: "#0b0b0b",
                        }
                      : morphStage === "completed"
                      ? {
                          opacity: 1,
                          color: "#f8f8f8",
                        }
                      : {
                          opacity: 0,
                          color: "#0b0b0b",
                        }
                  }
                  transition={{
                    duration: morphStage === "glitching" ? 0.6 : 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 select-none text-center z-30 after:content-[''] after:absolute after:left-0 after:right-0 after:top-[48%] after:h-[12px] lg:after:h-[20px] after:bg-current"
                >
                  Baroro Studio
                  <span 
                    className="absolute right-0 top-[-0.12em] border-current rounded-full w-[0.18em] h-[0.18em] flex items-center justify-center font-sans font-[900] tracking-normal indent-0 leading-none select-none"
                    style={{ borderWidth: "max(1.5px, 0.022em)", borderStyle: "solid", minWidth: "14px", minHeight: "14px" }}
                  >
                    <span 
                      className="font-[900] translate-y-[-0.01em]"
                      style={{ fontSize: "max(8px, 0.095em)" }}
                    >
                      R
                    </span>
                  </span>
                </motion.span>
              </span>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
