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
        
        // Add a subtle animation to the toggle button (respect reduced motion)
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReduced) {
            this.toggleButton.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.toggleButton.style.transform = 'scale(1)';
            }, 150);
        }
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
        this.toggleButton.setAttribute('aria-pressed', theme === 'dark');
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
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const elements = document.querySelectorAll('.social-link, .projects-placeholder');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    if (!prefersReduced) {
                        entry.target.style.transform = 'translateY(0)';
                    } else {
                        entry.target.style.transform = 'none';
                    }
                }
            });
        }, this.observerOptions);
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = prefersReduced ? 'none' : 'translateY(20px)';
            el.style.transition = prefersReduced ? 'opacity 0.2s ease' : 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    addSmoothScroll() {
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Add smooth scroll for any future internal navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: prefersReduced ? 'auto' : 'smooth',
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
                let platform = 'Unknown';
                if (link.classList.contains('github')) platform = 'GitHub';
                else if (link.classList.contains('linkedin')) platform = 'LinkedIn';
                else if (link.classList.contains('email')) platform = 'Email';
                console.log(`Social link clicked: ${platform}`);
            });
        });
    }
}

// Email protection - assembles email address only on interaction
class EmailProtection {
    constructor() {
        this.init();
    }

    init() {
        const emailLinks = document.querySelectorAll('.social-link.email[data-user][data-domain]');

        emailLinks.forEach(link => {
            // Handle click
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.openEmail(link);
            });

            // Handle keyboard (Enter/Space)
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openEmail(link);
                }
            });
        });
    }

    openEmail(link) {
        const user = link.dataset.user;
        const domain = link.dataset.domain;
        if (user && domain) {
            window.location.href = 'mailto:' + user + '@' + domain;
        }
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

    // Initialize email protection
    new EmailProtection();
    
    // Add a subtle loading animation (respect reduced motion)
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    }
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
