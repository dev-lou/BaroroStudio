"use client";
import { useRef, useState } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform, cubicBezier } from "motion/react";
import Label from "@/components/Label";
import Link from "next/link";
import CursorPlane from "@/components/CursorPlane";
import IntersectionObserverPlane from "@/components/IntersectionObserverPlane";
import { useIsDesktop } from "@/app/providers/root/WindowSizeProvider";

export default function WorkPage() {
  const isDesktop = useIsDesktop();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const featuredProject = {
    title: "RIOT GAMES x BARORO",
    category: "ANIMATION / VFX",
    slug: "riot-games",
    img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2000&auto=format&fit=crop"
  };

  const projects = [
    { title: "The Hex", category: "Animation", slug: "the-hex", img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2000&auto=format&fit=crop" },
    { title: "Azuki Elementals", category: "VFX", slug: "azuki-elementals", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" },
    { title: "Marvel Snap", category: "Commercial", slug: "marvel-snap", img: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2000&auto=format&fit=crop" },
    { title: "Project Neon", category: "Web Design", slug: "project-neon", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop" },
    { title: "Cyberpunk V", category: "Animation", slug: "cyberpunk", img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2000&auto=format&fit=crop" },
    { title: "Nike Air 2026", category: "Commercial", slug: "nike-air", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" },
    { title: "Spotify Immersive", category: "Web Design", slug: "spotify", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop" },
    { title: "Dune Visuals", category: "VFX", slug: "dune", img: "https://images.unsplash.com/photo-1547822297-ea6541cb0272?q=80&w=2000&auto=format&fit=crop" },
  ];

  const filters = ["All", "Animation", "VFX", "Commercial", "Web Design"];

  const yEven = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const yOdd = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={containerRef} className="relative bg-void-black text-off-white px-4 lg:px-[8vw] pb-[20vh] overflow-x-clip">
      <IntersectionObserverPlane setThemeTo="light" setThemeFrom="light" className="absolute top-0 w-full h-10 z-50" />
      
      {/* Header Section */}
      <div className="pt-[20vh] mb-[10vh]">
        <Label className="mb-4">
          <span className="font-light">/</span>&nbsp; SELECTED WORK
        </Label>
        <h1 className="text-[11vw] lg:text-[10vw] leading-[0.85] font-normal tracking-[-0.04em] uppercase">
          OUR <span className="text-flare-red">PORTFOLIO</span>.
        </h1>
      </div>

      {/* Filter Pill Navigation */}
      <div className="sticky top-[10vh] lg:top-[15vh] z-30 mb-[8vh] lg:mb-[10vh] flex overflow-x-auto whitespace-nowrap scrollbar-hide py-3 px-4 -mx-4 items-center gap-2 bg-void-black/80 backdrop-blur-md border-b border-white/5 lg:border lg:rounded-full lg:px-6 lg:py-2 lg:mx-0 lg:w-fit shadow-2xl">
        {filters.map((f) => (
          <button 
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-6 py-2 rounded-full text-xs lg:text-sm tracking-widest uppercase transition-colors duration-300 shrink-0 ${activeFilter === f ? "bg-flare-red text-void-black font-bold" : "text-gray-400 hover:text-off-white"}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Featured Project */}
      <div className="mb-[15vh]">
        <Label className="mb-6"><span className="font-light">/</span>&nbsp; FEATURED PROJECT</Label>
        <Link href={`/work/${featuredProject.slug}`}>
          <motion.div 
            className="group cursor-pointer block relative w-full aspect-video overflow-hidden bg-cool-gray rounded-xl"
            initial="initial"
            whileHover="whileHover"
          >
            <motion.img 
              src={featuredProject.img} 
              alt={featuredProject.title}
              className="absolute inset-0 w-full h-[120%] object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
              variants={{
                initial: { scale: 1 },
                whileHover: { scale: 1.05 }
              }}
              transition={{ duration: 0.8, ease: cubicBezier(0.19, 1, 0.22, 1) }}
            />
            <CursorPlane className="text-void-black">play reel</CursorPlane>
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 bg-gradient-to-t from-void-black/80 to-transparent pointer-events-none">
              <h2 className="text-[8vw] lg:text-[6vw] leading-[0.9] font-normal tracking-[-0.04em] text-white">
                {featuredProject.title}
              </h2>
              <span className="text-sm lg:text-xl text-gray-300 font-light uppercase tracking-widest mt-2">
                {featuredProject.category}
              </span>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Staggered Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32">
        {projects
          .filter(p => activeFilter === "All" || p.category === activeFilter)
          .map((proj, i) => {
            const y = isDesktop ? (i % 2 === 0 ? yEven : yOdd) : 0;
            
            return (
              <Link key={i} href={`/work/${proj.slug}`} className={`block ${i % 2 === 1 ? "md:mt-[30vh]" : ""}`}>
                <motion.div 
                  style={{ y }}
                  className="group cursor-pointer block"
                  initial="initial"
                  whileHover="whileHover"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-cool-gray mb-6 rounded-xl">
                    <motion.img 
                      src={proj.img} 
                      alt={proj.title}
                      className="absolute inset-0 w-full h-[120%] object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
                      variants={{
                        initial: { scale: 1 },
                        whileHover: { scale: 1.05 }
                      }}
                      transition={{ duration: 0.8, ease: cubicBezier(0.19, 1, 0.22, 1) }}
                    />
                    <CursorPlane className="text-void-black">view project</CursorPlane>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-[8vw] lg:text-[4vw] leading-[0.9] font-normal tracking-[-0.04em] group-hover:text-flare-red transition-colors duration-300">
                      {proj.title}
                    </h2>
                    <span className="text-sm lg:text-lg text-gray-500 font-light uppercase tracking-widest mt-2">
                      {proj.category}
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
        })}
      </div>
    </div>
  );
}
