// export default function LogoWithTrademark() {
//   return <div className="lg:pt-[17.36111vw]"></div>;
// }

import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

interface LogoProps extends ComponentProps<"div"> {
  fill?: string;
}

const LogoWithTrademark = ({ fill, className, ...props }: LogoProps) => {
  const colorClass = fill === "#f8f8f8" ? "text-off-white" : "text-void-black";

  return (
    <div
      className={cn("w-full text-center select-none", colorClass, className)}
      {...props}
    >
      <span className="relative inline-block text-[8.5vw] sm:text-[11vw] font-semibold tracking-[-0.05em] uppercase leading-[0.85] lg:text-[13.5vw] after:content-[''] after:absolute after:left-0 after:right-0 after:top-[48%] after:h-[12px] lg:after:h-[20px] after:bg-current">
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
      </span>
    </div>
  );
};

export default LogoWithTrademark;
