"use client";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import HighlightCard from "@/components/HighlightCard";

export default function SectionOfSectionsClient() {
  const backgroundColor = useMotionValue("transparent");
  const projects = [
    {
      videoSrc: "/assets/videos/projects/the-hex.mp4",
      title: "The Hex - Animated Prologue",
      linkToProject: "/work/the-hex",
    },
    {
      videoSrc: "/assets/videos/projects/azuki-elementals.mp4",
      title: "Azuki Elementals",
      linkToProject: "/work/azuki-elementals",
    },
    {
      videoSrc: "/assets/videos/projects/marvel-snap.mp4",
      title: "Marvel Snap",
      linkToProject: "/work/marvel-snap",
    },
  ];
  return (
    <>
      <Hero />
      <HighlightCard backgroundColor={backgroundColor} />
      <motion.div
        style={{ backgroundColor }}
        className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip lg:gap-[15vh]"
      >
        {projects.map((eachProject) => (
          <ProjectCard key={eachProject.title} {...eachProject} />
        ))}
      </motion.div>
    </>
  );
}
