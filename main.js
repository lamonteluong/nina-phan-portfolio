let mainNav = document.querySelector('.main-nav');
let navbarToggle = document.querySelector('.navbar-toggle');

let themeToggle = document.querySelector('.theme-toggle');
let navLinks = document.querySelectorAll('.nav-link');

/* FIX: Class added, display: block overriden by display: none */ 
navbarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    console.log(mainNav);
});


/* FIX: Class added, color: white overriden by color: black */ 
themeToggle.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-theme');
    navLinks.forEach((link) => {
        link.classList.toggle('dark-theme');
        console.log(link); 
    });
});
