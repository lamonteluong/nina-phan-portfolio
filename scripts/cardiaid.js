let btn = document.querySelectorAll('button');
let displayMetric = false;
let displayRef = false;
let metricInfo = document.getElementById("hidden-metric");
let refInfo = document.querySelector('.ref-container');
let scriptBtn = document.querySelectorAll('.script-btn');

scriptBtn[1].style.display = 'none';
scriptBtn[3].style.display = 'none';
// scriptBtn[5].style.display = 'none';


btn[0].addEventListener('click', () => {
    if (displayMetric == false) {
        metricInfo.style.display = 'block';
        scriptBtn[0].style.display = 'none';
        scriptBtn[1].style.display = 'inline-block';
        displayMetric = true;
    } else {
        metricInfo.style.display = 'none';
        scriptBtn[0].style.display = 'inline-block';
        scriptBtn[1].style.display = 'none';
        displayMetric = false;
    }
});

console.log(scriptBtn);
console.log(btn);

btn[1].addEventListener('click', () => {
    if (displayRef == false) {
        refInfo.style.display = 'block';
        scriptBtn[2].style.display = 'none';
        scriptBtn[3].style.display = 'inline-block';
        displayRef = true;
    } else {
        refInfo.style.display = 'none';
        scriptBtn[2].style.display = 'inline-block';
        scriptBtn[3].style.display = 'none';
        displayRef = false;
    }
});


