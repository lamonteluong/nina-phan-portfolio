let navbar = document.querySelector('.navbar');
let mainNav = document.querySelector('.main-nav');
let navbarToggle = document.querySelector('.navbar-toggle');
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

let backTopBtn = document.getElementById('back-top-btn');
let backTop1 = document.getElementById('back-top-1');
let backTop2 = document.getElementById('back-top-2');

let footer = document.querySelector('footer');
let contactLinks = document.querySelectorAll('.contact-link');

let slideContainers = document.querySelectorAll('.slideshow-container');
let slides = document.querySelectorAll('.slide');
let tabs = document.querySelectorAll('.next-img');

hideSlides();
changeImageCarousel(); 
mailLink();

// Display 'Hero images when text is hovered
window.onload = () => {
    
    if (textHighlight.length > 0) {

        if (document.body.clientWidth >= 768) {
            // NINA IMAGE
            textHighlight[0].addEventListener('mouseenter', () => {
                document.getElementById('nina-img').style.display = "block";
                heroImage[0].style.display = "block";
                document.getElementById('soundcloud-img').style.display = "none";
            });
            textHighlight[0].addEventListener('mouseleave', () => {
                document.getElementById('nina-img').style.display = "none";
            });
    
            //BLUEPRINT IMAGE
            textHighlight[2].addEventListener('mouseenter', () => {
                document.getElementById('blueprint-img').style.display = "block";
                heroImage[1].style.display = "block";
                document.getElementById('soundcloud-img').style.display = "none";
            });
            textHighlight[2].addEventListener('mouseleave', () => {
                document.getElementById('blueprint-img').style.display = "none";
            });
    
            //SOUNDCLOUD PLAYER
            textHighlight[1].addEventListener('mouseenter', () => {
                document.getElementById('soundcloud-img').style.display = "block";
            });
        } else {
            textHighlight[0].addEventListener('click', () => {
                window.location.href = "../pages/about.html";
            });

            // NINA IMAGE
            textHighlight[0].addEventListener('mouseenter', () => {
                document.getElementById('nina-img').style.display = "none";
            });
            textHighlight[0].addEventListener('mouseleave', () => {
                document.getElementById('nina-img').style.display = "none";
            });

            //BLUEPRINT IMAGE
            textHighlight[2].addEventListener('mouseenter', () => {
                document.getElementById('blueprint-img').style.display = "none";
            });
            textHighlight[2].addEventListener('mouseleave', () => {
                document.getElementById('blueprint-img').style.display = "none";
            });

            //SOUNDCLOUD PLAYER
            textHighlight[1].addEventListener('mouseenter', () => {
                document.getElementById('soundcloud-img').style.display = "none";
            });
            textHighlight[1].addEventListener('mouseleave', () => {
                document.getElementById('soundcloud-img').style.display = "none";
            });

        }

    }

}

/* Display navbar links for Desktop size */
window.onresize = () => {
    if (document.body.clientWidth >= 768) {
        mainNav.style.display = 'flex';
    } else {
        mainNav.style.display = 'none';

        backTopBtn.style.display = "none";
    }

    // Remove 'Hero' images on tablets and mobile
    if (document.body.clientWidth > 1024) {
        // NINA IMAGE
        textHighlight[0].addEventListener('mouseenter', () => {
            document.getElementById('nina-img').style.display = "block";
        });
        textHighlight[0].addEventListener('mouseleave', () => {
            document.getElementById('nina-img').style.display = "none";
            document.getElementById('soundcloud-img').style.display = "none";
        });

        //BLUEPRINT IMAGE
        textHighlight[2].addEventListener('mouseenter', () => {
            document.getElementById('blueprint-img').style.display = "block";
        });
        textHighlight[2].addEventListener('mouseleave', () => {
            document.getElementById('blueprint-img').style.display = "none";
            document.getElementById('soundcloud-img').style.display = "none";
        });

        //SOUNDCLOUD PLAYER
        textHighlight[1].addEventListener('mouseenter', () => {
            document.getElementById('soundcloud-img').style.display = "block";
        });
    } else {
        // NINA IMAGE
        textHighlight[0].addEventListener('mouseenter', () => {
            document.getElementById('nina-img').style.display = "none";
        });
        textHighlight[0].addEventListener('mouseleave', () => {
            document.getElementById('nina-img').style.display = "none";
        });
        textHighlight[0].addEventListener('click', () => {
            window.location.href = "../pages/about.html";
        });

        //BLUEPRINT IMAGE
        textHighlight[2].addEventListener('mouseenter', () => {
            document.getElementById('blueprint-img').style.display = "none";
        });
        textHighlight[2].addEventListener('mouseleave', () => {
            document.getElementById('blueprint-img').style.display = "none";
        });

        //SOUNDCLOUD PLAYER
        textHighlight[1].addEventListener('mouseenter', () => {
            document.getElementById('soundcloud-img').style.display = "none";
        });
        textHighlight[1].addEventListener('mouseleave', () => {
            document.getElementById('soundcloud-img').style.display = "none";
        });

    } 

}
/* FIXME: Desktop resize to mobile -> open dropdown -> resize desktop
        -> resize mobile => need to double-click nav toggle */

navbarToggle.addEventListener('click', () => {
    // TODO: Make position = absolute; create style class for mobile navbar view and toggle
    if (dropDown == false) {
        mainNav.style.display = 'block';
        dropDown = true;
    } else {
        mainNav.style.display = 'none';
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

// Rotate image carousel every 3 seconds
function changeImageCarousel() {

    setInterval(() => {
        checkImageClick();

        let i = 0;
        for (i = 0; i < 8; i++) {
            if (slides[i].style.display == "block") {
                console.log(i);
                // slides[i].style.display = "none";
            }
        }

    }, 3000);

}

// Sets product images to default (1st image) of each project
function hideSlides() {
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
}


function checkImageClick() {

    tabs[0].addEventListener('click', () => {
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
        if (tabs[7].classList.contains("active-img")) {
            return;
        } else {
            slides[6].style.display = "none";
            slides[7].style.display = "block";
            tabs[6].classList.remove('active-img');
            tabs[7].classList.add('active-img');
        }
    });

}

function mailLink() {
    let link = document.querySelector(".contact-container");
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE & Opera
});


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
