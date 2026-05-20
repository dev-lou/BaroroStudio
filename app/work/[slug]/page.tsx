"use client";
import { useNavThemeValue } from "../../providers/root/NavThemeProvider";
import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";
import Label from "@/components/Label";
import Link from "next/link";
import UnderlineOnHover from "@/components/Server/UnderlineOnHover";
import { useParams } from "next/navigation";

export default function CaseStudyPage() {
  const currentNavTheme = useNavThemeValue();
  const params = useParams();
  const slug = params?.slug as string;

  // Placeholder content for the case study
  const title = slug ? slug.replace(/-/g, ' ').toUpperCase() : "CASE STUDY";

  return (
    <motion.div
      className={cn(
        "min-h-screen pt-[15vh] px-4 lg:px-[8vw]",
        currentNavTheme === "dark" ? "bg-off-white text-void-black" : "bg-void-black text-off-white",
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Label className="mb-4">
        <span className="font-light">/</span>&nbsp; CASE STUDY
      </Label>
      
      <h1 className="text-[40px] leading-[0.9] lg:text-[7vw] font-normal tracking-[-0.04em] mb-12">
        {title}.
      </h1>

      <div className="relative aspect-video w-full bg-cool-gray overflow-hidden mb-12">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
          alt={title}
          className="w-full h-full object-cover mix-blend-luminosity opacity-80"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-[15vh]">
        <div className="lg:col-span-4 flex flex-col gap-6 text-sm lg:text-base uppercase tracking-widest font-light">
          <div>
            <span className="text-gray-500">CLIENT</span>
            <p>BARORO PARTNERS</p>
          </div>
          <div>
            <span className="text-gray-500">ROLE</span>
            <p>DESIGN & ANIMATION</p>
          </div>
          <div>
            <span className="text-gray-500">YEAR</span>
            <p>2026</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="text-lg lg:text-[1.5vw] leading-[1.4] font-light mb-8">
            This project represents a milestone for Baroro Studio, pushing the boundaries of what is possible on the web in 2026. Through a combination of advanced 3D rendering and cutting-edge web technologies, we crafted an immersive experience that captivated users worldwide.
          </p>
          
          <UnderlineOnHover underlineColor="#6366f1">
            <Link href="/work" className="text-flare-red text-xl uppercase font-bold tracking-widest mt-8 inline-block">
              ← BACK TO WORK
            </Link>
          </UnderlineOnHover>
        </div>
      </div>
    </motion.div>
  );
}
