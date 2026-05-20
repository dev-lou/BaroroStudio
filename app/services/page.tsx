"use client";
import { useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import Label from "@/components/Label";
import Link from "next/link";
import UnderlineOnHover from "@/components/Server/UnderlineOnHover";
import IntersectionObserverPlane from "@/components/IntersectionObserverPlane";

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: processScroll } = useScroll({
    target: processRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(heroScroll, [0, 1], ["0deg", "8deg"]);
  const scale = useTransform(heroScroll, [0, 1], [1, 0.8]);
  const opacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  const processX = useTransform(processScroll, [0, 1], ["0%", "-75%"]);

  const services = [
    { 
      title: "3D Animation", 
      desc: "High-fidelity rendering and motion capture that pushes the boundaries of reality.", 
      color: "bg-void-black",
      subs: ["Character Modeling", "Environment Design", "Rigging & MoCap", "Lighting & Rendering"]
    },
    { 
      title: "Brand Identity", 
      desc: "Crafting iconic visual languages and design systems for the modern era.", 
      color: "bg-cool-gray",
      subs: ["Logo Design", "Brand Guidelines", "Typography Systems", "Motion Identity"]
    },
    { 
      title: "Web Design", 
      desc: "Immersive, interactive web experiences built on the absolute edge of technology.", 
      color: "bg-void-black",
      subs: ["UI/UX Design", "Creative Development", "WebGL & Three.js", "Performance Optimization"]
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-void-black text-off-white overflow-x-clip">
      <IntersectionObserverPlane setThemeTo="light" setThemeFrom="dark" className="absolute top-0 w-full h-10 z-50" />
      
      {/* Massive Sticking Hero */}
      <motion.div 
        style={{ rotate, scale, opacity }}
        className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 lg:px-[8vw] z-0 bg-flare-red text-void-black origin-bottom"
      >
        <Label className="mb-4">
          <span className="font-light">/</span>&nbsp; CAPABILITIES
        </Label>
        <h1 className="text-[14vw] leading-[0.8] font-normal tracking-[-0.04em] uppercase">
          WHAT WE <br/> DO.
        </h1>
      </motion.div>

      {/* Stacking Service Cards */}
      <div className="relative z-10 w-full mt-0">
        {services.map((srv, i) => (
          <div 
            key={i} 
            className={`sticky w-full min-h-[80vh] flex flex-col justify-center ${srv.color} px-4 lg:px-[8vw] border-t border-gray-800 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`}
            style={{ top: `${i * 5}vh` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-7">
                <h3 className="text-[10vw] lg:text-[6vw] leading-[0.9] font-normal tracking-[-0.04em] mb-8 text-flare-red">
                  0{i + 1}. <br className="lg:hidden"/> {srv.title}
                </h3>
                <p className="text-xl lg:text-[2.5vw] font-light leading-[1.2]">{srv.desc}</p>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center pt-8 lg:pt-0 lg:pl-16 border-t lg:border-t-0 lg:border-l border-gray-700">
                <Label className="mb-8 text-gray-500">EXPERTISE</Label>
                <ul className="flex flex-col gap-4">
                  {srv.subs.map((sub, j) => (
                    <li key={j} className="text-2xl lg:text-3xl font-light hover:text-flare-red transition-colors cursor-default">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section - Horizontal Scroll (Desktop) */}
      <div ref={processRef} className="hidden lg:block relative h-[400vh] bg-cool-gray z-20 border-t border-gray-800">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-void-black">
          <motion.div style={{ x: processX }} className="flex w-[400vw] h-full items-center">
            
            {/* Step 1 */}
            <div className="w-[100vw] h-full flex flex-col justify-center px-4 lg:px-[8vw] shrink-0 border-r border-gray-800">
              <Label className="mb-8 text-gray-500">OUR PROCESS / 01</Label>
              <h2 className="text-[12vw] leading-[0.8] font-normal tracking-[-0.04em] text-flare-red mb-8">DISCOVERY</h2>
              <p className="text-2xl lg:text-[2vw] font-light max-w-4xl leading-tight text-gray-300">
                We immerse ourselves in your brand, dissecting your goals and audience to uncover the core narrative that will drive the project.
              </p>
            </div>

            {/* Step 2 */}
            <div className="w-[100vw] h-full flex flex-col justify-center px-4 lg:px-[8vw] shrink-0 border-r border-gray-800">
              <Label className="mb-8 text-gray-500">OUR PROCESS / 02</Label>
              <h2 className="text-[12vw] leading-[0.8] font-normal tracking-[-0.04em] text-flare-red mb-8">DESIGN</h2>
              <p className="text-2xl lg:text-[2vw] font-light max-w-4xl leading-tight text-gray-300">
                Translating strategy into striking visual concepts. We explore typography, color logic, and structural wireframes until the aesthetic is perfect.
              </p>
            </div>

            {/* Step 3 */}
            <div className="w-[100vw] h-full flex flex-col justify-center px-4 lg:px-[8vw] shrink-0 border-r border-gray-800">
              <Label className="mb-8 text-gray-500">OUR PROCESS / 03</Label>
              <h2 className="text-[12vw] leading-[0.8] font-normal tracking-[-0.04em] text-flare-red mb-8">DEVELOPMENT</h2>
              <p className="text-2xl lg:text-[2vw] font-light max-w-4xl leading-tight text-gray-300">
                Where the magic happens. We build out the systems, integrate complex 3D rendering, and dial in the interactive micro-animations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="w-[100vw] h-full flex flex-col justify-center px-4 lg:px-[8vw] shrink-0">
              <Label className="mb-8 text-gray-500">OUR PROCESS / 04</Label>
              <h2 className="text-[12vw] leading-[0.8] font-normal tracking-[-0.04em] text-flare-red mb-8">DELIVERY</h2>
              <p className="text-2xl lg:text-[2vw] font-light max-w-4xl leading-tight text-gray-300 mb-12">
                Rigorous QA testing across all devices to ensure a flawless launch. We hand over the keys to your new digital empire.
              </p>
              <UnderlineOnHover underlineColor="#6366f1">
                <Link href="/contact" className="text-off-white text-xl lg:text-2xl uppercase font-bold tracking-widest">
                  INITIATE PROCESS ↗
                </Link>
              </UnderlineOnHover>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Process Section - Vertical List (Mobile Only) */}
      <div className="block lg:hidden bg-cool-gray z-20 border-t border-gray-800 py-[12vh] px-4">
        <div className="flex flex-col gap-[10vh]">
          {/* Step 1 */}
          <div className="w-full flex flex-col justify-center">
            <Label className="mb-4 text-gray-500">OUR PROCESS / 01</Label>
            <h2 className="text-[10vw] leading-[0.9] font-normal tracking-[-0.04em] text-flare-red mb-4">DISCOVERY</h2>
            <p className="text-xl font-light leading-snug text-gray-300">
              We immerse ourselves in your brand, dissecting your goals and audience to uncover the core narrative that will drive the project.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-full flex flex-col justify-center pt-8 border-t border-gray-800">
            <Label className="mb-4 text-gray-500">OUR PROCESS / 02</Label>
            <h2 className="text-[10vw] leading-[0.9] font-normal tracking-[-0.04em] text-flare-red mb-4">DESIGN</h2>
            <p className="text-xl font-light leading-snug text-gray-300">
              Translating strategy into striking visual concepts. We explore typography, color logic, and structural wireframes until the aesthetic is perfect.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-full flex flex-col justify-center pt-8 border-t border-gray-800">
            <Label className="mb-4 text-gray-500">OUR PROCESS / 03</Label>
            <h2 className="text-[10vw] leading-[0.9] font-normal tracking-[-0.04em] text-flare-red mb-4">DEVELOPMENT</h2>
            <p className="text-xl font-light leading-snug text-gray-300">
              Where the magic happens. We build out the systems, integrate complex 3D rendering, and dial in the interactive micro-animations.
            </p>
          </div>

          {/* Step 4 */}
          <div className="w-full flex flex-col justify-center pt-8 border-t border-gray-800">
            <Label className="mb-4 text-gray-500">OUR PROCESS / 04</Label>
            <h2 className="text-[10vw] leading-[0.9] font-normal tracking-[-0.04em] text-flare-red mb-4">DELIVERY</h2>
            <p className="text-xl font-light leading-snug text-gray-300 mb-8">
              Rigorous QA testing across all devices to ensure a flawless launch. We hand over the keys to your new digital empire.
            </p>
            <UnderlineOnHover underlineColor="#6366f1">
              <Link href="/contact" className="text-off-white text-lg uppercase font-bold tracking-widest inline-block">
                INITIATE PROCESS ↗
              </Link>
            </UnderlineOnHover>
          </div>
        </div>
      </div>

    </div>
  );
}
