// Dark Mode Toggle Functionality
class DarkModeToggle {
    constructor() {
        this.toggleButton = document.getElementById('darkModeToggle');
        this.toggleIcon = this.toggleButton.querySelector('.toggle-icon');
        this.theme = this.getInitialTheme();
        
        this.init();
    }
    
    getInitialTheme() {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        // Default to light
        return 'light';
    }
    
    init() {
        // Set initial theme
        this.setTheme(this.theme);
        
        // Add event listener
        this.toggleButton.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add a subtle animation to the toggle button
        this.toggleButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.toggleButton.style.transform = 'scale(1)';
        }, 150);
    }
    
    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle icon
        this.toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        
        // Update aria-label for accessibility
        this.toggleButton.setAttribute('aria-label', 
            `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
}

// Smooth scroll and intersection observer for animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        // Add scroll-triggered animations
        this.observeElements();
        
        // Add smooth scroll behavior for any internal links
        this.addSmoothScroll();
    }
    
    observeElements() {
        const elements = document.querySelectorAll('.social-link, .projects-placeholder');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    addSmoothScroll() {
        // Add smooth scroll for any future internal navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Social link click tracking (optional analytics)
class Analytics {
    constructor() {
        this.init();
    }
    
    init() {
        // Track social link clicks
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const platform = link.classList.contains('github') ? 'GitHub' : 'LinkedIn';
                console.log(`Social link clicked: ${platform}`);
            });
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize dark mode toggle
    new DarkModeToggle();
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Initialize analytics
    new Analytics();
    
    // Add a subtle loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some fun easter eggs
document.addEventListener('keydown', (e) => {
    // Konami code easter egg
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    window.konamiSequence = window.konamiSequence || [];
    window.konamiSequence.push(e.keyCode);
    
    if (window.konamiSequence.length > konamiCode.length) {
        window.konamiSequence.shift();
    }
    
    if (window.konamiSequence.join(',') === konamiCode.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
