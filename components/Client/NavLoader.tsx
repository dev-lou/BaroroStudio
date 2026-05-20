"use client";
import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

function NavLoaderInner() {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reset loader on path or query parameters changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");
        const targetAttr = anchor.getAttribute("target");
        const isDownload = anchor.hasAttribute("download");

        // Only show loader for internal links, ignoring external links, downloads, and hashes
        if (
          href &&
          href.startsWith("/") &&
          !href.startsWith("//") &&
          !href.includes("#") &&
          targetAttr !== "_blank" &&
          !isDownload
        ) {
          // If navigating to the exact same page, don't trigger loader
          const currentHref = window.location.pathname;
          if (href !== currentHref) {
            setIsNavigating(true);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-void-black/80 backdrop-blur-md pointer-events-auto"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* High-end Interlocking Spinner */}
            <div className="relative size-16">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-t-flare-red border-r-transparent border-b-transparent border-l-transparent shadow-[0_0_15px_#6366f1]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              />
              {/* Inner Reverse Ring */}
              <motion.div
                className="absolute inset-2 rounded-full border border-b-[#6366f1] border-t-transparent border-r-transparent border-l-transparent"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
            </div>
            
            {/* Label */}
            <span className="font-mono text-[10px] tracking-[0.25em] text-gray-400 uppercase animate-pulse">
              LOADING PAGE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NavLoader() {
  return (
    <Suspense fallback={null}>
      <NavLoaderInner />
    </Suspense>
  );
}
