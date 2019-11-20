let btn = document.querySelectorAll('button');
let displayScript1 = false;
let displayScript2 = false;
let userScript1 = document.getElementById('script1');
let userScript2 = document.getElementById('script2');
let scriptBtn = document.querySelectorAll('.script-btn');
let backTopBtn = document.getElementById('back-top-btn');

let showScrollTop = document.querySelector('.show-scroll-top');

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


/* Button to scroll back to top */
window.onscroll = () => {

    if (document.body.clientWidth >= 1280 || window.innerWidth >= 1280) {
        displaySideNav();
    } else {
        sidebarWrapper.style.display = "none";
    }

    if (document.body.clientWidth >= 768 || window.innerWidth >= 768) {

        if (window.pageYOffset >= showScrollTop.offsetTop) {
            backTopBtn.style.display = "block";
        } else {
            backTopBtn.style.display = "none";
        }

    } else {
        backTopBtn.style.display = "none";
    }

};

window.onresize = () => {

    if (document.body.clientWidth >= 768 || window.innerWidth >= 768) {
        mainNav[0].style.display = 'flex';
        navbarToggle.style.display = 'none';
    } else {
        mainNav[0].style.display = 'none';
        navbarToggle.style.display = 'inline';
        backTopBtn.style.display = "none";
    }
    
}

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

backTopBtn.addEventListener('click', () => {
    scrollingTo('.navbar', 800);
});


window.addEventListener('scroll', (event) => {

    sideNavScroll();

}, false);

window.onload = () => {

    if (document.body.clientWidth >= 1280 || window.innerWidth >= 1280) {
        displaySideNav();
    } else {
        sidebarWrapper.style.display = "none";
    }

};

// From: https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function scrollingTo(element, duration) {
    var startingY = window.pageYOffset
    var elementY = getElementY(element)
    // If element is close to page's bottom then window will scroll only to some position above the element.
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
        var diff = targetY - startingY
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
    var start

    if (!diff) return

        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp
        // Elapsed miliseconds since start of scrolling.
        var time = timestamp - start
            // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1)
        // Apply the easing.
        // It can cause bad-looking slow frames in browser performance tool, so be careful.
        percent = easing(percent)

        window.scrollTo(0, startingY + diff * percent)

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
        window.requestAnimationFrame(step)
        }
    })
}


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
    
    if (window.pageYOffset >= problemSection.offsetTop && window.pageYOffset < section[1].offsetTop) {
        console.log(window.pageYOffset)
        activeSideNav(0);
    }
    if (window.pageYOffset >= section2[1].offsetTop && window.pageYOffset < section[2].offsetTop) {
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
