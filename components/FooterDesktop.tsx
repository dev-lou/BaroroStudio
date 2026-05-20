import Label from "./Label";
import ReachOut from "./ReachOut";
import * as motion from "motion/react-client";
import UnderlineOnHover from "./Server/UnderlineOnHover";
import Link from "next/link";

export default function FooterDesktop() {
  const addressLines = [
    "Baroro Studio",
    "Passi City",
    "Iloilo Philippines",
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
  return (
    <>
      <ReachOut className="col-span-2 max-lg:hidden" />
      <div className="col-span-4 col-start-6 flex gap-x-[6.42361vw] text-[1.15741vw] leading-[1.1] font-[440] tracking-[-0.01em] text-off-white max-lg:hidden lg:pb-[7.98611vw]">
        <div className="space-y-[1.44676vw]">
          <Label>
            <span className="font-light">/</span>&nbsp; Location
          </Label>
          <a href="https://www.google.com/maps/place/Passi+City,+Iloilo,+Philippines" target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              whileHover="whileHover"
              variants={{
                whileHover: { transition: { staggerChildren: 0.075 } },
              }}
              className="cursor-pointer"
            >
              {addressLines.map((eachAddressLine) => (
                <UnderlineOnHover
                  underlineColor="#f8f8f8"
                  key={eachAddressLine}
                  initial={false}
                  whileHover={undefined}
                >
                  {eachAddressLine}
                </UnderlineOnHover>
              ))}
            </motion.div>
          </a>
        </div>
        <div className="space-y-[1.44676vw]">
          <Label>
            <span className="font-light">/</span>&nbsp; Socials
          </Label>
          <div>
            {socialMediaLinks.map(({ name, href }) => (
              <UnderlineOnHover underlineColor="#f8f8f8" key={name}>
                <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
              </UnderlineOnHover>
            ))}
          </div>
        </div>
        <div className="space-y-[1.44676vw]">
          <Label>
            <span className="font-light">/</span>&nbsp; Menu
          </Label>
          <div>
            {navItems.map(({ label, href }) => (
              <UnderlineOnHover underlineColor="#f8f8f8" key={label}>
                <Link href={href}>{label}</Link>
              </UnderlineOnHover>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
