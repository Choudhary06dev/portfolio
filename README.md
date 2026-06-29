# Premium Production React Portfolio (`amjad-portfolio`)

A production-grade, highly-optimized developer portfolio foundation built using modern frontend engineering standards.

## Tech Stack

- **Core**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS v4 (CSS-first engine)
- **Animation**: Framer Motion (premium animations & layouts transitions)
- **Routing**: React Router DOM (client-side single-page routing)
- **Scrolling**: Lenis Smooth Scroll (high performance inertial scroll)
- **Validation & Forms**: React Hook Form + Zod + `@hookform/resolvers`
- **Utility & Icons**: Lucide React + clsx + tailwind-merge (via `cn` helper)
- **Tooling**: ESLint (Flat Config) + Prettier

---

## Directory Structure

```text
src/
├── assets/         # Static assets (images, graphics, icons)
├── components/     # Application UI components
│   ├── common/     # Reusable atomic UI elements (buttons, inputs)
│   └── layout/     # Structural page layout components (Navbar, Footer, RootLayout)
├── pages/          # Single Page Router containers (e.g., Home)
├── sections/       # Semantic landing page sections (Hero, About, Projects)
├── hooks/          # Custom utility hooks (useTheme, useLenis)
├── animations/     # Framer Motion animation presets & variants
├── constants/      # Configuration objects (routes, social links)
├── context/        # React Context providers (ThemeContext, LenisContext)
├── services/       # External APIs, analytical tooling, or emailing integrations
├── types/          # Shared TypeScript type definitions
├── utils/          # Helper utilities (cn, formatters)
├── styles/         # Global stylesheets, Tailwind base layers, and variables
└── config/         # Third-party configurations & constants
```

---

## Configuration Details

### 1. Tailwind CSS v4 & Styling Foundation
Styling is configured using the Tailwind v4 CSS-first system in `src/styles/global.css`. Theme configuration overrides (such as premium color variables and animations) are defined under the `@theme` block in CSS:
- **Font Face**: Inter (body sans) and Outfit (display/headings) are linked and registered.
- **Premium Color Palette**: Curated `brand` color scales with dark-mode optimized variables.
- **Smooth Theme Transitioning**: Configured on background/color change utilizing cubic-bezier curves.

### 2. Path Aliases & Absolute Imports
Imports can use the absolute prefix `@/` pointing directly to the `src/` directory. This is configured in:
- `vite.config.ts` (`resolve.alias`)
- `tsconfig.app.json` (`compilerOptions.paths`)

### 3. ESLint & Prettier Integration
ESLint flat configuration is set up in `eslint.config.js` to ensure optimal code hygiene. Prettier is integrated using `eslint-config-prettier` to prevent formatting conflicts, and `prettier-plugin-tailwindcss` automatically sorts Tailwind CSS classes.

---

## Available Scripts

Runs on npm package manager:

```bash
# Run local development server
npm run dev

# Run TypeScript compiler checks and build production output
npm run build

# Run ESLint check
npm run lint

# Automatically fix fixable ESLint errors
npm run lint:fix

# Run Prettier code formatter check
npm run format:check

# Automatically format code using Prettier
npm run format
```

---

## Environment Variables

Copy `.env.example` to `.env` to configure your environment variables:
- `VITE_SITE_URL`: Main domain url for SEO alignments.
- `VITE_SITE_NAME`: Browser metadata title.
- `VITE_CONTACT_API_URL`: Target form submit endpoint.
- `VITE_CONTACT_FORM_KEY`: Target API access key.
