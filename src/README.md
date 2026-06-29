# Directory Structure Guide (`src/`)

This document outlines the organization and architectural rules for directories inside `src/`.

---

## Folder Map

### 1. `animations/`
- **Purpose**: Central repository for Framer Motion animation configurations, transition behaviors, and layout variants.
- **Example**: `variants.ts` containing common fade-ins, stagger controls, and bounce transitions.

### 2. `assets/`
- **Purpose**: Static assets, brand logos, custom graphics, global SVGs, and pictures.
- **Example**: `hero.png`, `brand-logo.svg`.

### 3. `components/`
- **Purpose**: Reusable application-wide components that form the building blocks of pages.
- **Rules**: Keep components pure, documented, and highly decoupled.

### 4. `ui/`
- **Purpose**: Clean primitive interface components (like Shadcn button, dialog, dropdown, input, etc.).
- **Rules**: Minimal styles logic; focuses on reusability and accessibility (ARIA-compliant).

### 5. `layouts/`
- **Purpose**: Shell wrappers and wrappers that define global structures, page grids, and persistent frames (e.g., header, sidebars, footer).
- **Example**: `RootLayout.tsx`.

### 6. `pages/`
- **Purpose**: Layout page configurations associated with specific router routes.
- **Rules**: Act as layout orchestrators; page-specific logic is composed here rather than in the root components.

### 7. `sections/`
- **Purpose**: Main semantic subdivisions of landing pages (e.g. Hero, About, Projects, Contact).
- **Rules**: Keeps landing pages from growing too large; clean section dividers.

### 8. `hooks/`
- **Purpose**: Shareable custom stateful logic, events listeners, or intersection hooks.
- **Example**: `useTheme.ts`, `useLenis.ts`.

### 9. `constants/`
- **Purpose**: Static content configuration arrays (navigation lists, social links, project descriptions).
- **Rules**: Avoid magic strings in components by listing constants here.

### 10. `config/`
- **Purpose**: Global third-party software configuration variables.
- **Example**: `siteConfig.ts` containing domain URL metadata.

### 11. `context/`
- **Purpose**: Pure React Context context declarations.
- **Example**: `ThemeContext` declarations.

### 12. `providers/`
- **Purpose**: Core application provider files wrapping context states (e.g., ThemeProvider, LenisProvider) that wrap index trees.

### 13. `services/`
- **Purpose**: API calling layers, custom fetchers, analytics trackers, and contact form webhook handlers.

### 14. `types/`
- **Purpose**: Globally shared TypeScript contracts, interfaces, and declaration types.

### 15. `utils/`
- **Purpose**: Reusable pure helper functions (e.g., dates formatting, classes merger).
- **Example**: `cn.ts`.

### 16. `styles/`
- **Purpose**: Root styling variables, custom Tailwind CSS v4 layers, and theme variables overrides.
- **Example**: `global.css`.

### 17. `lib/`
- **Purpose**: Wrapper clients or instances for external packages (e.g. SupabaseClient, Axios instance, Prisma initialization).
