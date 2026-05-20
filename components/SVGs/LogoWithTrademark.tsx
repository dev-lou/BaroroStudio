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
      <span className="relative inline-block text-[8.5vw] sm:text-[11vw] font-semibold tracking-[-0.05em] uppercase leading-[0.85] lg:text-[13.5vw] after:content-[''] after:absolute after:left-0 after:right-0 after:top-[48%] after:h-[6px] lg:after:h-[10px] after:bg-current">
        Baroro Studio
      </span>
    </div>
  );
};

export default LogoWithTrademark;
