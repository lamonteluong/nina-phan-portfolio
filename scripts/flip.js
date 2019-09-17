let backTopBtn = document.getElementById('back-top-btn');

let sidebarWrapper = document.querySelector(".sidebar-container");
let sidebar = document.querySelectorAll(".sidebar li");
let hideSideNav = document.querySelector(".hideSideNav");

let section = document.querySelectorAll(".sidebar-jump");
let section2 = document.querySelectorAll(".section-jump");

let problemSection = document.getElementById('problem-section');
let fieldSection = document.getElementById('field-research-section');
let userSection = document.getElementById('user-research-section');
let solutionSection = document.getElementById('solution-section');
let retrospectSection = document.getElementById('retrospect-section');


/* Button to scroll back to top */
window.onscroll = () => {

    displaySideNav();

    if (document.body.clientWidth >= 768) {

        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
            backTopBtn.style.display = "block";
        } else {
            backTopBtn.style.display = "none";
        }

    } else {
        backTopBtn.style.display = "none";
    }

};

backTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE & Opera
});

let isInViewport = function(elem) {
    let distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientWidth) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


window.onload = () => {

    displaySideNav();

}

window.addEventListener('scroll', (event) => {

    sideNavScroll();

}, false);


sidebar[0].addEventListener('click', () => {
        
    activeSideNav(0);

});
sidebar[1].addEventListener('click', () => {
        
    activeSideNav(1);

});
sidebar[2].addEventListener('click', () => {
        
    activeSideNav(2);

});
sidebar[3].addEventListener('click', () => {
        
    activeSideNav(3);

});
sidebar[4].addEventListener('click', () => {
        
    activeSideNav(4);

});

function activeSideNav(num) {

    let i = 0;

    for (i = 0; i < 5; i++) {
        if (i == num) {
            sidebar[i].classList.add('sidebar-active');
            continue;
        } else {
            sidebar[i].classList.remove('sidebar-active');
        }

    }

}

function displaySideNav() {

    if (window.pageYOffset < hideSideNav.offsetTop) {
        sidebarWrapper.style.display = "none";
    } else {
        sidebarWrapper.style.display = "block";
    }

}

function sideNavScroll() {
    // Problem Section
    if (isInViewport(section[0])) {
        sidebarWrapper.style.display = "block";
        sidebar[1].classList.remove('sidebar-active');
        sidebar[0].classList.add('sidebar-active');
    } else {
        sidebar[0].classList.remove('sidebar-active');
    }

    // Field Research Section
    if (isInViewport(section[1])) {
        sidebar[0].classList.remove('sidebar-active');
        sidebar[2].classList.remove('sidebar-active');
        sidebar[1].classList.add('sidebar-active');
    } 
    if (isInViewport(section2[0])) { //Bottom of field research section
        sidebar[2].classList.remove('sidebar-active');
        sidebar[1].classList.add('sidebar-active');
    }

    // User Research Section
    if (isInViewport(section[2])) {
        sidebar[1].classList.remove('sidebar-active');
        sidebar[2].classList.add('sidebar-active');
    } 
    if(isInViewport(section2[1])) { //Bottom of user research section
        sidebar[3].classList.remove('sidebar-active');
        sidebar[2].classList.add('sidebar-active');
    }

    // Solution Section
    if (isInViewport(section[3])) {
        sidebar[2].classList.remove('sidebar-active');
        sidebar[3].classList.add('sidebar-active');
    } 
    if (isInViewport(section2[2])) {
        sidebar[4].classList.remove('sidebar-active');
        sidebar[3].classList.add('sidebar-active');
    }

    // Retrospect Section
    if (isInViewport(section[4]) || isInViewport(section2[3])) {
        sidebar[3].classList.remove('sidebar-active');
        sidebar[4].classList.add('sidebar-active');
    }  else {
        sidebar[4].classList.remove('sidebar-active');
    }
}



