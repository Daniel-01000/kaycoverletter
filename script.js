// Page navigation
let currentPage = 1;
const totalPages = 8;

// Menu button functionality
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Update active nav link on scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page');

function updateActiveNavLink() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

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
