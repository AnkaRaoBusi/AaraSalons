# AARA Salon - React Frontend

This is a modern React application built with Vite, converting the original HTML/CSS/JS website into a component-based architecture.

## Project Structure

```
frontend/
├── public/
│   └── images/          # Static images
├── src/
│   ├── assets/
│   │   ├── css/        # Stylesheet files
│   │   └── images/     # Component assets
│   ├── components/     # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── BookingForm.jsx
│   │   └── OTPModal.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   └── Blog.jsx
│   ├── hooks/          # Custom React hooks (if needed)
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features

- ✅ React Router for navigation
- ✅ Responsive design (mobile-first)
- ✅ Hero slider with auto-advance and click navigation
- ✅ Service booking form with OTP verification modal
- ✅ Tabbed service menu (Women/Men, Hair/Skin/Makeup)
- ✅ Smooth scroll navigation
- ✅ Mobile menu toggle

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Playfair Display & Lato)

## Component Overview

### Pages

- **Home** - Landing page with hero slider, about section, services overview, booking form, locations, and reviews
- **Services** - Detailed service menu with tabs for Women/Men services and sub-categories
- **Blog** - Blog posts listing page

### Components

- **Navbar** - Navigation bar with mobile menu toggle
- **Footer** - Site footer with links and social media
- **HeroSlider** - Auto-advancing hero banner with click navigation
- **BookingForm** - Appointment booking form
- **OTPModal** - OTP verification modal for booking confirmation

## Key Features Converted

### From HTML/JS to React

1. **Slider Logic** → `HeroSlider` component with `useState` and `useEffect`
2. **Tab Navigation** → State management in `Services` component
3. **Form Handling** → Controlled components with `useState`
4. **Modal Logic** → `OTPModal` component with props
5. **Menu Toggle** → State-based toggle in `Navbar`
6. **Smooth Scroll** → Scroll utility functions

## Notes

- Images are served from `/public/images/` and referenced as `/images/...`
- CSS files maintain the original styling
- All functionality from the original site has been preserved
- The app uses client-side routing; ensure server is configured for SPA routing in production

## Development

The app runs on port 3000 by default (configurable in `vite.config.js`).

Hot Module Replacement (HMR) is enabled for fast development.

## License

© 2025 AARA Salon. All rights reserved.
