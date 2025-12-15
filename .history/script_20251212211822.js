// Page navigation
let currentPage = 1;
const totalPages = 2;

// Menu button functionality
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
    });
}

// View My Fit button - scroll to page 2
const viewFitBtn = document.querySelector('.btn-primary');
if (viewFitBtn) {
    viewFitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const page2 = document.querySelector('#page2');
        if (page2) {
            page2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Scroll indicator - scroll to page 2
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', (e) => {
        e.preventDefault();
        const page2 = document.querySelector('#page2');
        if (page2) {
            page2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Download CV functionality
const downloadBtn = document.querySelector('.btn-secondary');
downloadBtn.addEventListener('click', () => {
    alert('CV download functionality - Connect your CV file here');
});

// Smooth scroll behavior for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add parallax effect to hero section on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        if (currentScroll > window.innerHeight * 0.5 && currentPage === 1) {
            navigateToPage(2);
        }
    } else {
        // Scrolling up
        if (currentScroll < window.innerHeight * 0.3 && currentPage === 2) {
            navigateToPage(1);
        }
    }
    
    lastScroll = currentScroll;
});

// Add animation on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle responsive menu
function handleResize() {
    const width = window.innerWidth;
    // Add any resize-specific logic here
}

window.addEventListener('resize', handleResize);
handleResize(); // Call on load
