let btn = document.querySelectorAll('button');
let displayScript1 = false;
let displayScript2 = false;
let userScript1 = document.getElementById('script1');
let userScript2 = document.getElementById('script2');
let scriptBtn = document.querySelectorAll('.script-btn');

let sidebarWrapper = document.querySelector(".sidebar-container");
let sidebar = document.querySelectorAll(".sidebar li");
let hideSideNav = document.querySelector(".hideSideNav");

let section = document.querySelectorAll(".sidebar-jump");
let section2 = document.querySelectorAll(".section-jump");
let sectionTop = document.querySelectorAll(".section-top");

let problemSection = document.getElementById('problem-section');
let evaluativeSection = document.getElementById('evaluative-section');
let userSection = document.getElementById('user-research-section');
let solutionSection = document.getElementById('solution-section');
let retrospectSection = document.getElementById('retrospect-section');

scriptBtn[1].style.display = 'none';
scriptBtn[3].style.display = 'none';


btn[0].addEventListener('click', () => {
    if (displayScript1 == false) {
        userScript1.style.display = 'block';
        scriptBtn[0].style.display = 'none';
        scriptBtn[1].style.display = 'inline-block';
        displayScript1 = true;
    } else {
        userScript1.style.display = 'none';
        scriptBtn[0].style.display = 'inline-block';
        scriptBtn[1].style.display = 'none';
        displayScript1 = false;
    }
});

btn[1].addEventListener('click', () => {
    if (displayScript2 == false) {
        userScript2.style.display = 'block';
        scriptBtn[2].style.display = 'none';
        scriptBtn[3].style.display = 'inline-block';
        displayScript2 = true;
    } else {
        userScript2.style.display = 'none';
        scriptBtn[2].style.display = 'inline-block';
        scriptBtn[3].style.display = 'none';
        displayScript2 = false;
    }
});


let backTopBtn = document.getElementById('back-top-btn');

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


window.addEventListener('scroll', (event) => {

    sideNavScroll();

}, false);

window.onload = () => {

    displaySideNav();

};


let isInViewport = function(elem) {
    let distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientWidth) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

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
    
    if (window.pageYOffset >= problemSection.offsetTop && window.pageYOffset < section2[0].offsetTop) {
        activeSideNav(0);
    }
    if (window.pageYOffset >= section[1].offsetTop && window.pageYOffset < section[2].offsetTop) {
        activeSideNav(1);
    }
    if (window.pageYOffset >= section[2].offsetTop && window.pageYOffset < section[3].offsetTop) {
        activeSideNav(2);
    }
    if (window.pageYOffset >= section[3].offsetTop && window.pageYOffset < section[4].offsetTop) {
        activeSideNav(3);
    }
    if (window.pageYOffset >= section[4].offsetTop) {
        activeSideNav(4);
    }

}


function sideNavScroll() {
    // Problem Section
    if (isInViewport(section[0])) {
        sidebarWrapper.style.display = "block";
        sidebar[1].classList.remove('sidebar-active');
        sidebar[0].classList.add('sidebar-active');
    } 

    // Evaluative Research Section
    if (isInViewport(section[1])) {
        sidebar[0].classList.remove('sidebar-active');
        sidebar[2].classList.remove('sidebar-active');
        sidebar[1].classList.add('sidebar-active');
    } 

    // User Research Section
    if (isInViewport(section[2])) {
        sidebar[1].classList.remove('sidebar-active');
        sidebar[3].classList.remove('sidebar-active');
        sidebar[2].classList.add('sidebar-active');
    } 

    //Solution Section
    if (isInViewport(section[3])) {
        sidebar[2].classList.remove('sidebar-active');
        sidebar[4].classList.remove('sidebar-active');
        sidebar[3].classList.add('sidebar-active');
    }
    
    //Retrospect Section
    if (isInViewport(section[4])) {
        sidebar[3].classList.remove('sidebar-active');
        sidebar[4].classList.add('sidebar-active');
    }

}
