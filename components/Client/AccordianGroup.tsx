"use client";
import { Dispatch, ReactNode, SetStateAction } from "react";
import AccordianItem from "@/components/AccordianItem";
import Link from "next/link";

export default function AccordianGroup({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  const addressLines = [
    "Baroro Studio",
    "Passi City",
    "Iloilo Philippines",
  ];

  const socialMediaLinks = [
    { name: "YouTube", href: "#" },
    {
      name: "Instagram",
      href: "#",
    },
    { name: "TikTok", href: "#" },
    { name: "X", href: "#" },
    { name: "Facebook", href: "#" },
    {
      name: "LinkedIn",
      href: "#",
    },
  ];
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Entertainment", href: "/entertainment" },
    { label: "About", href: "/about" },
    { label: "Feed", href: "/blog" },
    { label: "Podcast", href: "/podcast" },
    { label: "Contact", href: "/contact" },
    { label: "Shop", href: "/shop" },
  ];
  const accordianItems: { label: string; content: ReactNode }[] = [
    {
      label: "Location",
      content: (
        <a href="https://www.google.com/maps/place/Passi+City,+Iloilo,+Philippines" className="flex flex-col" target="_blank" rel="noopener noreferrer">
          {addressLines.map((eachLine, i) => (
            <span key={`addressLines[${i}]`}>{eachLine}</span>
          ))}
        </a>
      ),
    },
    {
      label: "Social",
      content: (
        <>
          {socialMediaLinks.map(({ name, href }, i) => (
            <a key={`socialMedia[${i}]`} href={href} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ))}
        </>
      ),
    },
    {
      label: "Nav",
      content: (
        <>
          {navItems.map(({ label, ...href }, i) => (
            <Link key={`navItems[${i}]`} {...href}>
              {label}
            </Link>
          ))}
        </>
      ),
    },
  ];

  return (
    <>
      {accordianItems.map(({ label, content }, index) => (
        <AccordianItem
          key={index}
          label={label}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          {content}
        </AccordianItem>
      ))}
    </>
  );
}
