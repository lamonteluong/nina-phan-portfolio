let mainNav = document.querySelector('.main-nav');
let navbarToggle = document.querySelector('.navbar-toggle');
let navLinks = document.querySelectorAll('.nav-link');
let dropDown = false;

let themeToggle = document.querySelector('.theme-toggle');
let darkMode = false;

let viewWork = document.querySelector('.view-work-container');
let arrowDown = document.getElementById('arrow-down');

let backTopBtn = document.getElementById('back-top-btn');
let backTop1 = document.getElementById('back-top-1');
let backTop2 = document.getElementById('back-top-2');

/* FIXME: Class added, display: block overriden by display: none */ 
navbarToggle.addEventListener('click', () => {
    //mainNav.classList.toggle('show');
    /* FIXME: Desktop resize to mobile & back => links disappear */
    if (dropDown == false) {
        mainNav.style.display = 'block';
        dropDown = true;
    } else {
        mainNav.style.display = 'none';
        dropDown = false;
    }
});

/* Toggle for Light/Dark Mode */
themeToggle.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-theme');
    if (darkMode == false) {
        darkMode = true;
        arrowDown.style.fill = 'white';
        backTop1.style.stroke = 'white';
        backTop2.style.fill = 'white';
    } else {
        darkMode = false;
        arrowDown.style.fill = 'black';
        backTop1.style.stroke = 'black';
        backTop2.style.fill = 'black';
    }

    navLinks.forEach((link) => {
        if (link.style.color != 'white') {
            link.style.color = 'white';
        } else {
            link.style.color = 'black';
        }
    });
});

/* Change navbar link colour:hover based on the current theme */
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

/* Button to scroll back to top */
window.onscroll = () => {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        backTopBtn.style.display = "block";
    } else {
        backTopBtn.style.display = "none";
    }
};
backTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE & Opera
});
