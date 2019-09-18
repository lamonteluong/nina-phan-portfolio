let navbar = document.querySelector('.navbar');
let mainNav = document.querySelectorAll('.main-nav');
let navOverlay = document.querySelector('.main-nav-container');
let navbarToggle = document.querySelector('.navbar-toggle');
let closeBtn = document.getElementById('close-btn');
let navLinks = document.querySelectorAll('.nav-link');
let logo = document.querySelector('.logo');
let dropDown = false;

waveLink();
mobileWaveLink();


navbarToggle.addEventListener('click', () => {
    if (dropDown == false) {
        navOverlay.style.display = 'block';
        mainNav[1].style.display = 'block';
        navbarToggle.style.display = 'none';
        closeBtn.style.display = 'inline';
        dropDown = true;
    } else {
        navOverlay.style.display = 'none';
        dropDown = false;
    }
});

closeBtn.addEventListener('click', () => {
    if (dropDown == true) {
        navOverlay.style.display = 'none';
        mainNav[1].style.display = 'none';
        navbarToggle.style.display = 'inline';
        dropDown = false;
    } 
});

/* Change navbar link colour:hover based on the current theme */
navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#33B8A8';
    });
    link.addEventListener('mouseleave', () => {
        if (navOverlay.style.display == "block") {
            link.style.color = 'white';
        } else {
            link.style.color = 'black';
        }
    });
});

function waveLink() {
    let link = document.querySelector(".contact-container");
    link.addEventListener('click', () => {
        window.location.href = "https://www.linkedin.com/in/ntp";
    });
}

function mobileWaveLink() {
    let link = document.getElementById("wave-btn");
    link.addEventListener('click', () => {
        window.location.href = "https://www.linkedin.com/in/ntp";
    });
}
