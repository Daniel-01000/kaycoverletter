// Page navigation
let currentPage = 1;
const totalPages = 8;

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

// View Full Portfolio button - let the link work naturally
const portfolioBtn = document.querySelector('.btn-secondary');
// No event listener needed - the link will work on its own

// Download CV button
const downloadCVBtn = document.querySelector('#downloadCV');
if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', () => {
        // You can replace this with an actual CV file path
        alert('CV download functionality - please add your CV file path here');
        // Example: window.location.href = 'path/to/your/cv.pdf';
    });
}

// Add animation on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Get in Touch button - opens email
const getInTouchBtn = document.querySelector('.btn-large');
if (getInTouchBtn) {
    getInTouchBtn.addEventListener('click', () => {
        window.location.href = 'mailto:kadisha.owoturo@email.com';
    });
}

// Portfolio links work naturally - no need to prevent default
// The portfolio-link elements will navigate to their href URLs automatically

// Smooth scroll for all internal page navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
