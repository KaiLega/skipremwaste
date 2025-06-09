# Skip Selector UI – Skip RemWaste

A responsive user interface for selecting skip sizes, built as part of the Skip RemWaste project.

---

## Approach

The goal was to redesign and modernize the skip selection page using a modular, scalable React setup.

### Key Design & Development Decisions

- **Framework**: Next.js was chosen for routing, performance, and developer experience.
- **Styling**: Tailwind CSS was used for utility-first styling and responsiveness without bloated CSS.
- **Component Structure**:
  - `SkipCard.jsx`: displays a single skip item with image, price, and options.
  - `SkipList.jsx`: maps the skip list into cards.
- **Data**: Data is sourced from a local mock file `data/skips.json` for simplicity.
- **Images**: Skip images are loaded dynamically from Supabase Storage based on the skip size.
- **Alias Imports**: Configured `@` as a base alias for cleaner imports (`@/components/...`).

---

## Tech Stack

- Next.js (React)
- Tailwind CSS
- Supabase (for image storage)
- Modern JavaScript (ESModules)
- Local JSON mock data

---

## ▶️ Running the Project

```bash
cd skip-selector-ui
npm install
npm run dev
```
Then open http://localhost:3000 in your browser.

---

## Structure

skip-selector-ui/
├── components/        # Reusable UI components
├── data/              # skips.json mock data
├── pages/             # Next.js routes
├── public/            # Static assets
├── styles/            # Tailwind CSS

---

## Notes

All images are loaded dynamically based on the skip size to avoid hardcoding URLs.

---

## Changelog

### v1.1 – Modern UI & Feature Enhancements
- Added `search bar` to filter skips by yard size.
- Implemented `scroll to top` button on scroll.
- Integrated `Framer Motion` for animated UI elements.
- Introduced `dark/light mode` (light as default).
- Improved `responsiveness` and cleaned component structure.

### v1.2 – Advanced UI Structure & Filtering
- Introduced `FilterBar` with filtering options (size, price, hire period, road/heavy waste).
- Added `ProgressNavigator` component to visually indicate current step.
- Wrapped page in `LayoutContainer` for consistent spacing and structure.
- Improved visual theming of progress separator for dark/light mode.
