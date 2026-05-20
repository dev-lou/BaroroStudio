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

export const metadata: Metadata = {
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
            <NavBar />
            <ScrollProgress />
            <PageTransition>{children}</PageTransition>
          </body>
        </RootProviders>
      </ReactLenis>
    </html>
  );
}
