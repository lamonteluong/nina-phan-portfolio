let mainNav = document.querySelector('.main-nav');
let navbarToggle = document.querySelector('.navbar-toggle');
let navLinks = document.querySelectorAll('.nav-link');

let themeToggle = document.querySelector('.theme-toggle');
let darkMode = false;

/* FIX: Class added, display: block overriden by display: none */ 
navbarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    console.log(mainNav);
});

themeToggle.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-theme');
    if (darkMode == false) {
        darkMode = true;
    } else {
        darkMode = false;
    }

    navLinks.forEach((link) => {
        if (link.style.color != 'white') {
            link.style.color = 'white';
        } else {
            link.style.color = 'black';
        }
    });
});

navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#33B8A8';
    });
    link.addEventListener('mouseleave', () => {
        if (darkMode == true) {
            link.style.color = 'white';
        } else {
            link.style.color = 'black';
        }
    });
});