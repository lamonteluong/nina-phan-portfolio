let navbar = document.querySelector('.navbar');
let mainNav = document.querySelectorAll('.main-nav');
let navOverlay = document.querySelector('.main-nav-container');
let navbarToggle = document.querySelector('.navbar-toggle');
let closeBtn = document.getElementById('close-btn');
let navLinks = document.querySelectorAll('.nav-link');
let logo = document.querySelector('.logo');
let dropDown = false;

let themeToggle = document.querySelector('.theme-toggle');
let darkMode = false;

let workTitles = document.querySelectorAll('.work-title');

let viewWork = document.querySelector('.view-work-container');
let arrowDown = document.getElementById('arrow-down');

let textHighlight = document.querySelectorAll('.text-highlight');
let heroImage = document.querySelectorAll('.hero-img');
let guitarText = document.getElementById('guitar-text');
let inclusiveText = document.getElementById('inclusive-text');

let backTopBtn = document.getElementById('back-top-btn');
let backTop1 = document.getElementById('back-top-1');
let backTop2 = document.getElementById('back-top-2');

let slideContainers = document.querySelectorAll('.slideshow-container');
let slides = document.querySelectorAll('.slide');
let tabs = document.querySelectorAll('.next-img');

let footer = document.querySelector('footer');
let contactLinks = document.querySelectorAll('.contact-link');

//hideSlides();
//checkImageClick();
waveLink();
mobileWaveLink();

// Display 'Hero images when text is hovered
window.onload = () => {

}

// Links
textHighlight[0].addEventListener('click', () => {
    window.location.href = "../pages/about.html";
});
textHighlight[1].addEventListener('click', () => {
    window.open("https://soundcloud.com/nina-phan-5", "_blank");
});

/* Display navbar links for Desktop size */
window.onresize = () => {
    if (document.body.clientWidth >= 768) {
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

/* Toggle for Light/Dark Mode */
/* themeToggle.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-theme');
    changeColours();
}); */

/* Change navbar link colour:hover based on the current theme */
navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#33B8A8';
    });
    link.addEventListener('mouseleave', () => {
        if (darkMode == true || navOverlay.style.display == "block") {
            link.style.color = 'white';
        } else {
            link.style.color = 'black';
        }
    });
});


/* 'view my work' scroll down to projects */
/* TODO: animate to make smooth */
viewWork.addEventListener('click', () => {
    // document.querySelector('#project-section').scrollIntoView();
    scrollingTo('#project-section', 800);
});



let slideIndex1 = 0;
let slideIndex2 = 3;
let slideIndex3 = 6;


/* function playSlideShow() {

    window.setInterval(() => {


        let i = 0;
        if (slideIndex1 > 2) {
            slideIndex1 = 0;
        }
        
        for (i = 0; i < 3; i++) {
            slides[i].style.display = "none";
            tabs[i].classList.remove("active-img");
            if (i == slideIndex1) {
                slides[slideIndex1].style.display = "block";
                tabs[slideIndex1].classList.add("active-img");
            }
        }
        slideIndex1++;
    
        i = 3;
        if (slideIndex2 > 5) {
            slideIndex2 = 3;
        }
    
        for (i = 3; i < 6; i++) {
            slides[i].style.display = "none";
            tabs[i].classList.remove("active-img");
            if (i == slideIndex2) {
                slides[slideIndex2].style.display = "block";
                tabs[slideIndex2].classList.add("active-img");
            }
        }
        slideIndex2++;
    
        i = 6;
        if (slideIndex3 > 7) {
            slideIndex3 = 6;
        }
    
        for (i = 6; i < 8; i++) {
            slides[i].style.display = "none";
            tabs[i].classList.remove("active-img");
            if (i == slideIndex3) {
                slides[slideIndex3].style.display = "block";
                tabs[slideIndex3].classList.add("active-img");
            }
        }
        slideIndex3++;

    }, 4000);

} */

// Sets product images to default (1st image) of each project
/* function hideSlides() {
    let i = 0;
    slides.forEach((slide) => {
        if (i != 0 || i != 3 || i != 6) {
            slide.style.display = "none";
        }
        i++;
    });
    
    slides[0].style.display = "block";
    slides[3].style.display = "block";
    slides[6].style.display = "block";
    tabs[0].classList.add("active-img");
    tabs[3].classList.add("active-img");
    tabs[6].classList.add("active-img");
} */


/* function checkImageClick() {

    tabs[0].addEventListener('click', () => {
        slideIndex1 = 0;

        if (tabs[0].classList.contains("active-img")) {
            return;
        } else {
            slides[0].style.display = "block";
            slides[1].style.display = "none";
            slides[2].style.display = "none";
            tabs[0].classList.add('active-img');
            tabs[1].classList.remove('active-img');
            tabs[2].classList.remove('active-img');
        }
    });
    tabs[1].addEventListener('click', () => {
        slideIndex1 = 1;

        if (tabs[1].classList.contains("active-img")) {
            return;
        } else {
            slides[0].style.display = "none";
            slides[1].style.display = "block";
            slides[2].style.display = "none";
            tabs[0].classList.remove('active-img');
            tabs[1].classList.add('active-img');
            tabs[2].classList.remove('active-img');
    
        }
    });
    tabs[2].addEventListener('click', () => {
        slideIndex1 = 2;

        if (tabs[2].classList.contains("active-img")) {
            return;
        } else {
            slides[0].style.display = "none";
            slides[1].style.display = "none";
            slides[2].style.display = "block";
            tabs[0].classList.remove('active-img');
            tabs[1].classList.remove('active-img');
            tabs[2].classList.add('active-img');
        }
    });
    tabs[3].addEventListener('click', () => {
        slideIndex2 = 3;

        if (tabs[3].classList.contains("active-img")) {
            return;
        } else {
            slides[3].style.display = "block";
            slides[4].style.display = "none";
            slides[5].style.display = "none";
            tabs[3].classList.add('active-img');
            tabs[4].classList.remove('active-img');
            tabs[5].classList.remove('active-img');
        }
    });
    tabs[4].addEventListener('click', () => {
        slideIndex2 = 4;

        if (tabs[4].classList.contains("active-img")) {
            return;
        } else {
            slides[3].style.display = "none";
            slides[4].style.display = "block";
            slides[5].style.display = "none";
            tabs[3].classList.remove('active-img');
            tabs[4].classList.add('active-img');
            tabs[5].classList.remove('active-img');
        }
    });
    tabs[5].addEventListener('click', () => {
        slideIndex2 = 5;

        if (tabs[5].classList.contains("active-img")) {
            return;
        } else {
            slides[3].style.display = "none";
            slides[4].style.display = "none";
            slides[5].style.display = "block";
            tabs[3].classList.remove('active-img');
            tabs[4].classList.remove('active-img');
            tabs[5].classList.add('active-img');
        }
    });
    tabs[6].addEventListener('click', () => {
        slideIndex3 = 6;

        if (tabs[6].classList.contains("active-img")) {
            return;
        } else {
            slides[6].style.display = "block";
            slides[7].style.display = "none";
            tabs[6].classList.add('active-img');
            tabs[7].classList.remove('active-img');
        }
    });
    tabs[7].addEventListener('click', () => {
        slideIndex3 = 7;

        if (tabs[7].classList.contains("active-img")) {
            return;
        } else {
            slides[6].style.display = "none";
            slides[7].style.display = "block";
            tabs[6].classList.remove('active-img');
            tabs[7].classList.add('active-img');
        }
    });

} */

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


/* Button to scroll back to top */
window.onscroll = () => {
    if (document.body.clientWidth >= 768) {

        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            backTopBtn.style.display = "block";
        } else {
            backTopBtn.style.display = "none";
        }

    } else {
        backTopBtn.style.display = "none";
    }

};
backTopBtn.addEventListener('click', () => {
    scrollingTo('#hero-container', 800);
});

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

/* Change element colours based on current theme */
function changeColours() {
    if (darkMode == false) {
        darkMode = true;

        navbar.style.backgroundColor = '#181818';
        logo.style.color = 'white'; // 'Nina Phan' logo

        /* Work titles */
        workTitles.forEach((title) => {
            title.classList.add('work-title-dark');
        });
        /* SVG elements */
        arrowDown.style.fill = 'white';
        backTop1.style.stroke = 'white';
        backTop2.style.fill = 'white';

        footer.classList.add('grey');
        contactLinks.forEach((link) => {
            link.style.color = '#cacaca';
        });
    } else {
        darkMode = false;

        navbar.style.backgroundColor = 'white';
        logo.style.color = "#555555"; // 'Nina Phan' logo
        /* Work titles */
        workTitles.forEach((title) => {
            title.classList.remove('work-title-dark');
        });
        /* SVG elements */
        arrowDown.style.fill = 'black';
        backTop1.style.stroke = 'black';
        backTop2.style.fill = 'black';

        footer.classList.remove('grey');
        contactLinks.forEach((link) => {
            link.style.color = "#666666";
        });
    }

    navLinks.forEach((link) => {
        if (link.style.color != 'white') {
            link.style.color = 'white';
        } else {
            link.style.color = 'black';
        }
    });
}
