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

let backTopBtn = document.getElementById('back-top-btn');
let backTop1 = document.getElementById('back-top-1');
let backTop2 = document.getElementById('back-top-2');

let footer = document.querySelector('footer');
let contactLinks = document.querySelectorAll('.contact-link');

/* Display navbar links for Desktop size */
window.onresize = () => {
    if (document.body.clientWidth >= 768) {
        mainNav.style.display = 'flex';
    } else {
        mainNav.style.display = 'none';
    }
}
/* FIXME: Desktop resize to mobile -> open dropdown -> resize desktop
        -> resize mobile => need to double-click nav toggle */

navbarToggle.addEventListener('click', () => {
    //mainNav.classList.toggle('show');
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
    changeColours();
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

/* Display 'Hero' images when text is hovered */
// NINA IMAGE
textHighlight[0].addEventListener('mouseenter', () => {
    document.getElementById('nina-img').style.display = "block";
});
textHighlight[0].addEventListener('mouseleave', () => {
    document.getElementById('nina-img').style.display = "none";
});
//BLUEPRINT IMAGE
textHighlight[2].addEventListener('mouseenter', () => {
    document.getElementById('blueprint-img').style.display = "block";
});
textHighlight[2].addEventListener('mouseleave', () => {
    document.getElementById('blueprint-img').style.display = "none";
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


/* Change element colours based on current theme */
function changeColours() {
    if (darkMode == false) {
        darkMode = true;
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
