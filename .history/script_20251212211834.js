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
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        alert('CV download functionality - Connect your CV file here');
    });
}

// Add animation on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
