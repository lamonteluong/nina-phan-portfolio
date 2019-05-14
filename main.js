let mainNav = document.querySelector('.main-nav');

let navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    console.log(mainNav);
});
