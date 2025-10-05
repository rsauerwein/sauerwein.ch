# René Sauerwein - Personal Website

A minimalistic, responsive personal contact page built with vanilla HTML, CSS, and JavaScript.

## 🌐 Live Site

Visit: [sauerwein.ch](https://sauerwein.ch)

## ✨ Features

- **Minimalistic Design**: Clean, professional layout with focus on content
- **Dark Mode Support**: Automatic system preference detection with manual toggle
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Social Integration**: Direct links to GitHub and LinkedIn profiles
- **Performance Optimized**: Fast loading with minimal dependencies
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **SEO Ready**: Complete meta tags, Open Graph, and Twitter Card support

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern CSS with custom properties and flexbox
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **Google Fonts**: Inter font family for clean typography

## 🚀 Getting Started

### Prerequisites

- A web server (Apache, Nginx, or any static file server)
- Modern web browser with ES6+ support

### Installation

1. Clone or download this repository
2. Upload all files to your web server
3. Ensure `index.html` is in the root directory
4. Access your site via web browser

### File Structure

```
sauerwein.ch/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and theming
├── script.js           # JavaScript functionality
├── avatar.jpeg         # Profile picture
├── favicon.svg         # Site favicon
├── robots.txt          # Search engine directives
├── sitemap.xml         # XML sitemap
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --accent-green: #10b981;        /* Primary accent color */
    --accent-green-dark: #059669;   /* Darker variant */
    --accent-green-light: #34d399;  /* Lighter variant */
}
```

### Content
Update personal information in `index.html`:
- Profile picture: Replace `avatar.jpeg`
- Introduction text: Modify the German introduction paragraph
- Social links: Update GitHub and LinkedIn URLs

### Meta Information
Update SEO and social media tags in `index.html`:
- Meta description
- Open Graph tags
- Twitter Card tags
- Canonical URL

## 🔧 Features Explained

### Dark Mode
- Automatically detects system preference on first visit
- Manual toggle button in top-right corner
- Remembers user preference in localStorage
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Flexible typography and spacing
- Touch-friendly interactive elements

### Performance
- No external dependencies except Google Fonts
- Optimized CSS with efficient selectors
- Minimal JavaScript with event delegation
- Preloaded critical resources

## 🎮 Easter Egg

Try the Konami Code: ↑↑↓↓←→←→BA for a surprise! 🎮

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📞 Contact

- **GitHub**: [@rsauerwein](https://github.com/rsauerwein)
- **LinkedIn**: [René Sauerwein](https://www.linkedin.com/in/rene-sauerwein-995b001b9/)
- **Website**: [sauerwein.ch](https://sauerwein.ch)

---

*Built with ❤️ by René Sauerwein*
