// Main JavaScript for Animations and Interactions

console.log('CyberSim Platform Loaded Successfully.');

// Simple hover effects
const cards = document.querySelectorAll('.attack-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // card.style.borderColor = 'var(--accent-blue)';
    });
});

// Add a smooth fade-in for page sections
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.8s ease-in-out';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }
    
    // Animate hero text
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.style.letterSpacing = '10px';
        heroTitle.style.transition = 'letter-spacing 1s ease-out';
        setTimeout(() => {
            heroTitle.style.letterSpacing = 'normal';
        }, 200);
    }

    // Terminal Typewriter Effect for Status
    const statusLine = document.querySelector('.mono');
    if (statusLine) {
        const text = statusLine.innerText;
        statusLine.innerText = '> ';
        let i = 2;
        const type = () => {
            if (i < text.length) {
                statusLine.innerText += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        };
        setTimeout(type, 1000);
    }
});
