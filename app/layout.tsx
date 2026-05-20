import "./globals.css";
import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import RootProviders from "./providers/root";
const DenimVF = localFont({
  src: "./fonts/DenimVF.woff",
  variable: "--font-denim",
});

import PageTransition from "@/components/Client/PageTransition";
import ScrollProgress from "@/components/Client/ScrollProgress";
import Preloader from "@/components/Client/Preloader";
import NavLoader from "@/components/Client/NavLoader";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  metadataBase: new URL("https://baroro-studio.vercel.app"),
  title: "Baroro Studio",
  description: "A premium interactive design portfolio demonstration, showcasing fluid 3D animation work, custom micro-interactions, and state-of-the-art responsiveness.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <RootProviders>
          <body
            className={`${DenimVF.variable} overflow-x-clip antialiased [text-rendering:optimizeLegibility] selection:bg-flare-red selection:text-off-white`}
          >
            <NextTopLoader 
              color="#6366f1"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #6366f1,0 0 5px #6366f1"
            />
            <Preloader />
            <NavLoader />
            <NavBar />
            <ScrollProgress />
            <PageTransition>{children}</PageTransition>
          </body>
        </RootProviders>
      </ReactLenis>
    </html>
  );
}
