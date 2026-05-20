# Baroro Studio — Interactive Design Portfolio & Frontend Demonstration

Baroro Studio is a premium, high-performance web portfolio demonstration built with Next.js, Framer Motion, and Tailwind CSS. It is designed as an interactive showcase to demonstrate modern frontend engineering capabilities, featuring smooth animations, complex scroll-bound transformations, and a custom design system.

> [!NOTE]
> **Project Disclaimer:** This is a demonstration website and frontend portfolio project. It is not an active commercial design agency.

---

## 🚀 Key Highlights & Features

- **Fluid Scroll Architecture:** Powered by `Lenis` to provide a unified, premium smooth scrolling experience across all viewports.
- **Dynamic Contextual Cursor:** A responsive custom cursor system that dynamically morphs and provides context-specific commands (e.g. "VIEW PROJECT", "EXPLORE", "PLAY REEL") when hovering over interactive cards.
- **Intersection-based Navbar Theming:** Seamlessly flips the navbar's text color from black to white (and vice versa) depending on the contrast ratio of the background element currently in the viewport.
- **Staggered Animations:** Implements scroll-bound rotations, slide-in card reveals, and letter-by-letter marquee text movements using Framer Motion.
- **Interactive Project & Contact Form:**
  - Dynamic service selectors and budget range pills.
  - Live GMT+8 timezone clock tracking the studio's mock location in Passi City, Philippines.
  - Custom SVG animation triggers for submission states.
- **Comprehensive Mobile Optimization:**
  - Collapses complex scroll-jacked components (like the multi-section horizontal process scroll) into clean, readable vertical layouts.
  - Automatically handles mobile drawer menu closing on navigation clicks.
  - Implements scrollable navigation category tags for a frictionless touchscreen experience.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (Next-gen CSS theme engine)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (`motion/react`)
- **Smooth Scroll:** [Lenis Scroll](https://lenis.darkroom.engineering/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **SEO Optimization:** Dynamic metadata configurations, customized logo favicons, and dedicated Open Graph/Twitter social preview sharing cards.

---

## 🏗️ Folder Structure

```text
├── app/                  # Next.js App Router routes, global styles, and providers
│   ├── about/            # About page
│   ├── contact/          # Interactive contact form
│   ├── services/         # Capabilities and process page
│   ├── work/             # Portfolio work gallery grid (dynamic slugs)
│   └── favicon.ico       # Custom brand favicon
├── components/           # Reusable UI component library
│   ├── Client/           # Scroll transitions, custom cursor, and client motion
│   ├── Server/           # Static typography and skeleton styling
│   └── SVGs/             # Optimized vector logos and decorative marks
├── sections/             # Page section layouts (Hero, News, Studio details)
├── hooks/                # Viewport and resize detection observers
├── utils/                # Helper utilities (Tailwind merges, custom styling overrides)
└── public/               # Static media files (optimized MP4 videos, images)
```

---

## 💻 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/BaroroStudio.git
   cd BaroroStudio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or npm install
   ```

3. **Run the local development server:**
   ```bash
   pnpm run dev
   # or npm run dev
   ```

4. **Build and optimize for production:**
   ```bash
   pnpm run build
   ```

---

## 🎨 Branding & Customization
- **Theme Colors:** The site utilizes a premium obsidian background (`#050508`), high-contrast off-white (`#f0f0f2`), and an electric indigo-blue neon accent (`#6366f1`).
- **SEO Assets:** Fully packaged with `app/opengraph-image.png` for automatic preview generation when shared on social platforms like Facebook Messenger, X (formerly Twitter), and Discord.
