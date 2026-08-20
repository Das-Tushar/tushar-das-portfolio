# Personal Portfolio Website Implementation Plan

This plan details the steps to scaffold, build, and finalize a highly responsive and animated personal portfolio using React, Vite, and Framer Motion, perfectly matching the provided design.

## Goal Description
Build a production-ready, responsive portfolio website replicating the provided image. The layout will feature a two-tone diagonal intersection (light grey/black) using CSS `clip-path`. Typography and icons will be animated using `framer-motion`, including an "anti-gravity" floating effect for social icons.

## User Review Required
> [!IMPORTANT]
> The project will be created in a new directory `portfolio` inside your default scratch workspace (`C:\Users\Tushar Das\.gemini\antigravity\scratch`). Please review the component structure and let me know if you want a specific color palette (other than the grey/black from the image) or any specific font family.

## Open Questions
- Do you have an image you would like to use for the hero section (the portrait in the design)? If not, I can provide a placeholder or use a generated one.
- Which specific links should the social icons point to?

## Proposed Changes

### Project Initialization
- Run `npm create vite@latest portfolio -- --template react`
- Install dependencies: `npm install framer-motion`
- Clean up default Vite boilerplate.

### Component Structure (`src/components/`)
- **Navbar**: Contains the logo/brand mark on the left (over the grey area) and navigation links (About me, Skills, Portfolio) + Contact Me button on the right (over the black area).
- **Hero**: The main section containing the typography ("Hi, I am", "Tomasz Gajda", "Front-end Developer / UI Designer") on the left, and the portrait on the right. It will use CSS `clip-path` to create the diagonal split.
- **SocialIcons**: Reusable component for the social links (Email, GitHub, LinkedIn) utilizing Framer Motion for the continuous floating "anti-gravity" effect.

### Styling (`src/index.css` & CSS Modules)
- Setup CSS variables for colors (light grey `#E2E2E2`, black `#000000`, white `#FFFFFF`).
- Use CSS `clip-path: polygon(0 0, 45% 0, 35% 100%, 0 100%)` for the light grey section and stack it over/under the black background.
- Implement responsive media queries so the diagonal layout transitions to a stacked top/bottom layout on mobile.

### Animations
- Use `<motion.div>` for typography with staggered `initial`, `animate`, and `transition` properties.
- Use `animate={{ y: [0, -10, 0] }}` with `transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}` for the anti-gravity effect on social icons.

### Deployment Prep
- Initialize Git repository, stage files, and commit the initial build.

## Verification Plan

### Automated Tests
- Build the project using `npm run build` to ensure there are no compilation errors and it is production-ready.

### Manual Verification
- Run `npm run dev` and test responsiveness by resizing the browser window to simulate mobile viewports.
- Visually verify animations and layout fidelity against `sampleport.png`.
