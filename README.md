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
- **State Management**: Local state is managed using React's built-in `useState` and `useContext` hooks, with a custom `ThemeContext` for theme handling.
- **API Integration**: While the current version uses mock data, the architecture is designed to easily integrate with RESTful APIs or GraphQL endpoints.
- **Testing**: Basic unit tests are implemented using Jest and React Testing Library to ensure component reliability.
- **Performance Optimization**: Implemented lazy loading for images and dynamic imports for components to improve initial load time.
- **Accessibility**: Followed best practices for accessibility, including semantic HTML, ARIA roles, and keyboard navigation support.
- **Component Structure**:
  - `ConfirmModal.jsx`: Displays a confirmation modal for user actions.
  - `FilterBar.jsx`: Provides filtering options for the skip list.
  - `Footer.jsx`: Renders the footer section of the application.
  - `LayoutContainer.jsx`: Wraps the main content with consistent layout styling.
  - `MenuButton.jsx`: A button to toggle the side menu.
  - `ProgressNavigator.jsx`: Displays the progress of steps in the skip selection process.
  - `SideMenu.jsx`: A side menu for configuration and navigation options.
  - `SkipCard.jsx`: Displays a single skip item with image, price, and options.
  - `SkipList.jsx`: Maps the skip list into individual `SkipCard` components.
  - `ThemeSwitcher.jsx`: Toggles between light and dark themes.
---

## Tech Stack

- Next.js (React)
- Tailwind CSS
- Supabase (for image storage)
- Modern JavaScript (ESModules)
- Local JSON mock data

---

## Running the Project

### Development
```bash
cd skip-selector-ui
npm install
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

Or access the sandbox version directly at:  
[https://p4td3t-3000.csb.app](https://p4td3t-3000.csb.app)

### Production
```bash
npm run build
npm start
```

### Prerequisites
- Node.js v16+ (recommended)
- npm v7+

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

### v1.3 – Custom Theme Handling & Menu Integration
- Replaced next-themes with custom `ThemeContext` and localStorage-based dark mode support.
- Added a `SideMenu` with Currency, VAT, Filters options.
- Integrated `ThemeSwitcher` directly into the SideMenu for more intuitive toggling.
- Improved `FilterBar` input styling for better visibility and dark mode contrast.
- Fixed `theme state` persistence on page reloads and transitions.

### v1.4 – Confirmation Modal & Component Refactoring
- Added `ConfirmModal` to review skip selection before proceeding.
- Updated `FilterBar` input behavior and appearance.
- Improved `ProgressNavigator` with mobile dropdown and interactive step highlighting.
- Refactored `SkipCard` and `SkipList` to share logic and handle step progression cleanly.
- Enhanced `UI feedback` for skip selection with modals and scroll locking.
- Extracted shared logic into utils/`skipHelpers`.js.

### v1.5 – Enhanced mobile layout and added footer
- Improved `mobile layout` and responsiveness
- Added `footer` with light/dark mode support
- Minor `UI refinements` for consistency

### v1.6 – Readme updates
- Added detailed descriptions for all reusable components in the **Component Structure** section.
- Updated the **Running the Project** section with the sandbox link: [https://p4td3t-3000.csb.app](https://p4td3t-3000.csb.app).
- Improved the **Tech Stack** section to include all relevant technologies.
- Enhanced the **Structure** section with a directory tree for better clarity.
- Added notes about dynamic image loading and alias imports.
- Verified and aligned README content with the actual implementation in the project.