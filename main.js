let mainNav = document.querySelector('.main-nav');
let navbarToggle = document.querySelector('.navbar-toggle');
let navLinks = document.querySelectorAll('.nav-link');

let themeToggle = document.querySelector('.theme-toggle');
let darkMode = false;

let viewWork = document.querySelector('.view-work-container');

/* FIXME: Class added, display: block overriden by display: none */ 
navbarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});

/* Toggle for Light/Dark Mode */
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

/* Change navbar link colour based on the current theme */
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

/* 'view my work' scroll down to projects */
/* TODO: animate to make smooth */
viewWork.addEventListener('click', () => {
    document.querySelector('.project').scrollIntoView();
});
