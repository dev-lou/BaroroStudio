"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import BlinkText from "./Server/BlinkText";
import { useNavThemeValue } from "@/app/providers/root/NavThemeProvider";

interface NavItemProps {
  href: string;
  label: string | ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function NavItem({ href, label, className, onClick }: NavItemProps) {
  const currentPath = usePathname();
  const navTheme = useNavThemeValue();
  const isActive = currentPath === href;
  
  return (
    <>
      <style>
        {`
      #nav-item {
        --circle-size: 32px;
      }
      @media (min-width: 1024px) {
        #nav-item {
          --circle-size: 0.86806vw;
        }
      }
    `}
      </style>
      <Link href={href} id="nav-item" onClick={onClick}>
        <motion.div
          initial="initial"
          whileHover="whileHover"
          className={cn(
            "flex items-center text-[46px] leading-[0.8] font-[470] tracking-[-0.03em] uppercase lg:text-[1.27315vw] lg:leading-[0.85] lg:font-[440] lg:tracking-[-0.01em]",
            className,
          )}
        >
          <AnimatePresence mode="sync" initial={false}>
            {isActive && (
              <motion.span
                key={currentPath}
                initial={{ width: "0px", height: "0px" }}
                exit={{ width: "0px", height: "0px" }}
                animate={{
                  width: "var(--circle-size)",
                  height: "var(--circle-size)",
                }}
                className={cn(
                  "inline-block size-8 shrink-0 rounded-full bg-off-white lg:size-[0.86806vw]",
                  navTheme === "dark" ? "lg:bg-void-black" : "lg:bg-flare-red"
                )}
              >
                &nbsp;
              </motion.span>
            )}
          </AnimatePresence>
          <BlinkText
            className={cn(isActive && (navTheme === "dark" ? "lg:text-void-black" : "lg:text-flare-red"))}
          >
            {label}
          </BlinkText>
        </motion.div>
      </Link>
    </>
  );
}
