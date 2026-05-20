"use client";
import { useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform, cubicBezier } from "motion/react";
import Label from "@/components/Label";
import Link from "next/link";
import UnderlineOnHover from "@/components/Server/UnderlineOnHover";
import CursorPlane from "@/components/CursorPlane";
import IntersectionObserverPlane from "@/components/IntersectionObserverPlane";
import Image from "next/image";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-5deg"]);
  
  // Marquee scroll effect
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div ref={containerRef} className="relative bg-void-black text-off-white overflow-x-clip">
      <IntersectionObserverPlane setThemeTo="light" setThemeFrom="light" className="absolute top-0 w-full h-10 z-50" />
      
      {/* Massive Hero Section - Sticky */}
      <motion.div 
        style={{ y: y1, opacity, rotate }}
        className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center px-4 lg:px-[8vw] z-0"
      >
        <Label className="mb-4">
          <span className="font-light">/</span>&nbsp; ABOUT US
        </Label>
        
        <h1 className="text-[11vw] lg:text-[10vw] leading-[0.85] font-normal tracking-[-0.04em] uppercase">
          WE ARE <br/>
          <span className="text-flare-red">BARORO</span> STUDIO.
        </h1>
      </motion.div>

      {/* Content that scrolls up over the fixed hero */}
      <div className="relative z-20 bg-cool-gray pt-[15vh] pb-[20vh] border-t border-gray-800 shadow-2xl">
        
        {/* Core Description */}
        <div className="px-4 lg:px-[8vw] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[5vw]">
          <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden">
            <motion.img 
              style={{ y: y2 }}
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop" 
              alt="Baroro Studio Workspace" 
              className="absolute -top-[10%] -bottom-[10%] object-cover w-full h-[120%] mix-blend-luminosity opacity-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: cubicBezier(0.19, 1, 0.22, 1) }}
            />
            <CursorPlane className="text-white">explore</CursorPlane>
          </div>
          <div className="flex flex-col justify-center lg:py-20">
            <h2 className="text-[6vw] lg:text-[4vw] leading-[0.9] font-normal tracking-[-0.02em] mb-8">PIONEERING DESIGN IN 2026.</h2>
            <p className="text-[18px] lg:text-[1.5vw] leading-[1.4] mb-8 font-light text-gray-300">
              Founded on the principles of pushing boundaries, Baroro Studio is a multidisciplinary creative agency based in Passi City, Iloilo Philippines. We specialize in crafting immersive digital experiences, high-fidelity 3D animation, and striking brand identities.
            </p>
            <p className="text-[18px] lg:text-[1.5vw] leading-[1.4] mb-12 font-light text-gray-300">
              Our team of award-winning designers and engineers work at the intersection of art and technology, building platforms that not only look stunning but perform flawlessly.
            </p>
            <UnderlineOnHover underlineColor="#6366f1">
              <Link href="/services" className="text-flare-red text-[24px] lg:text-[1.5vw] uppercase font-bold tracking-widest">
                VIEW OUR SERVICES ↗
              </Link>
            </UnderlineOnHover>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="mt-[20vh] overflow-hidden whitespace-nowrap bg-flare-red text-void-black py-6 lg:py-12 transform -rotate-2 scale-110 shadow-2xl">
          <motion.div style={{ x: marqueeX }} className="flex gap-8">
             <h2 className="text-[8vw] font-bold tracking-tighter uppercase shrink-0">
               CRAFTING THE FUTURE / PIXEL BY PIXEL / CRAFTING THE FUTURE / PIXEL BY PIXEL / CRAFTING THE FUTURE / PIXEL BY PIXEL /
             </h2>
          </motion.div>
        </div>

        {/* Masonry Image Grid */}
        <div className="px-4 lg:px-[8vw] mt-[25vh]">
          <Label className="mb-12"><span className="font-light">/</span>&nbsp; BEHIND THE SCENES</Label>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
             <div className="relative overflow-hidden group rounded-lg">
               <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" width={600} height={400} className="w-full h-auto mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" alt="Office"/>
             </div>
             <div className="relative overflow-hidden group rounded-lg">
               <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" width={600} height={800} className="w-full h-auto mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" alt="Meeting"/>
             </div>
             <div className="relative overflow-hidden group rounded-lg">
               <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop" width={600} height={450} className="w-full h-auto mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" alt="Planning"/>
             </div>
             <div className="relative overflow-hidden group rounded-lg">
               <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" width={600} height={400} className="w-full h-auto mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" alt="Coding"/>
             </div>
             <div className="relative overflow-hidden group rounded-lg">
               <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop" width={600} height={750} className="w-full h-auto mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" alt="Design"/>
             </div>
             <div className="relative overflow-hidden group rounded-lg">
               <Image src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1000&auto=format&fit=crop" width={600} height={450} className="w-full h-auto mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" alt="Studio"/>
             </div>
          </div>
        </div>

        {/* Awards Ticker */}
        <div className="px-4 lg:px-[8vw] mt-[25vh]">
           <Label className="mb-12"><span className="font-light">/</span>&nbsp; RECOGNITION</Label>
           <div className="flex flex-col gap-8 border-t border-gray-700 pt-8">
              <div className="flex justify-between items-end group cursor-pointer">
                 <h3 className="text-[28px] lg:text-[3vw] font-light group-hover:text-flare-red transition-colors duration-300">Awwwards Site of the Month</h3>
                 <span className="text-gray-500 text-lg lg:text-xl font-light">2026</span>
              </div>
              <div className="flex justify-between items-end group cursor-pointer border-t border-gray-700 pt-8">
                 <h3 className="text-[28px] lg:text-[3vw] font-light group-hover:text-flare-red transition-colors duration-300">FWA of the Day</h3>
                 <span className="text-gray-500 text-lg lg:text-xl font-light">2025</span>
              </div>
              <div className="flex justify-between items-end group cursor-pointer border-t border-gray-700 pt-8">
                 <h3 className="text-[28px] lg:text-[3vw] font-light group-hover:text-flare-red transition-colors duration-300">Webby Nominee — Visual Design</h3>
                 <span className="text-gray-500 text-lg lg:text-xl font-light">2025</span>
              </div>
               <div className="flex justify-between items-end group cursor-pointer border-t border-gray-700 pt-8">
                 <h3 className="text-[28px] lg:text-[3vw] font-light group-hover:text-flare-red transition-colors duration-300">CSS Design Awards — Site of the Day</h3>
                 <span className="text-gray-500 text-lg lg:text-xl font-light">2024</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
