# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for René Sauerwein (sauerwein.ch). Built with vanilla HTML5, CSS3, and JavaScript ES6+ — no frameworks or build tools.

## Development

**No build system required.** Files are production-ready static assets.

- **Local development**: Open `index.html` directly in a browser, or use any static file server
- **Deployment**: Upload files to any web server (Apache, Nginx, etc.)

## Architecture

### Theming System (Dark Mode)
- CSS custom properties in `:root` define light mode colors
- Dark mode overrides via `[data-theme="dark"]` selector
- System preference detection with `@media (prefers-color-scheme: dark)`
- `DarkModeToggle` class in `script.js` manages toggle and localStorage persistence

### JavaScript Classes (`script.js`)
- `DarkModeToggle` - Theme switching with system preference detection and localStorage
- `ScrollAnimations` - IntersectionObserver for scroll-triggered animations, smooth scroll for internal links
- `Analytics` - Tracks social link clicks (console logging)
- Konami code easter egg (↑↑↓↓←→←→BA) triggers rainbow animation

### CSS Architecture (`styles.css`)
- Mobile-first responsive design
- Breakpoints: 768px (tablet), 480px (mobile)
- Primary accent color: `--accent-green: #10b981`
- Animations use `transform` and `opacity` for GPU acceleration
- Transitions use `cubic-bezier(0.4, 0, 0.2, 1)` timing

### HTML Structure (`index.html`)
- German language (`lang="de"`)
- Comprehensive SEO meta tags (Open Graph, Twitter Cards)
- Skip link and ARIA labels for accessibility (WCAG 2.1 AA)

## Key Guidelines

- Maintain German language consistency in content
- Use BEM-like naming for CSS classes
- Keep touch targets minimum 44px
- Respect `prefers-reduced-motion` for animations
- Store theme preference in localStorage under consistent key
