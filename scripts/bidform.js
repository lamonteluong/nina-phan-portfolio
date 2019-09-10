let btn = document.querySelectorAll('button');
let displayScript1 = false;
let displayScript2 = false;
let userScript1 = document.getElementById('script1');
let userScript2 = document.getElementById('script2');
let scriptBtn = document.querySelectorAll('.script-btn');

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
