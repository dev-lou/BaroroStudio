import FooterDesktop from "@/components/FooterDesktop";
import FooterMobile from "@/components/FooterMobile";
import Input from "@/components/Input";
import List from "@/components/List";
import BlinkText from "@/components/Server/BlinkText";
import Up from "@/components/Up";
import FooterBackground from "@/public/assets/images/footer-background.png";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Footer() {
  const nodes: ReactNode[] = [
    <>Site Credits</>,
    <Link key={0} href="/privacy">
      Privacy
    </Link>,
    <Up key={1} />,
  ];
  return (
    <div className="sticky bottom-0 z-0 h-fit px-2 pt-2 text-off-white selection:bg-off-white selection:text-flare-red lg:grid lg:grid-cols-9">
      <FooterDesktop />
      <FooterMobile />
      <Input className="relative z-20 col-span-3 col-start-1" />
      <div className="col-span-5 col-start-6 flex justify-between text-[14px] leading-[0.85] font-[470] tracking-[-0.01em] uppercase max-lg:pt-6 max-lg:pb-2 lg:items-end lg:justify-end lg:text-[1.27315vw] lg:font-regular-plus">
        <span className="inline lg:hidden">© 2026</span>
        <span className="hidden lg:inline">
          © BARORO STUDIO 2026 &nbsp;
          <span className="font-light">/</span>
          &nbsp;
        </span>
        <List>
          {nodes.map((node, index) => (
            <BlinkText key={index} repeat={1} className="cursor-pointer">
              {node}
            </BlinkText>
          ))}
        </List>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[20.51282vw] z-10 w-[138.46154vw] opacity-[0.1] mix-blend-screen grayscale-[0.3] lg:left-[29%] lg:w-[26.04167vw] lg:opacity-30"
      >
        <Image className="h-auto w-full" src={FooterBackground} alt="" />
      </div>
    </div>
  );
}
