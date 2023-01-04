const body = document.querySelector('body');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
var ball = document.querySelector('#ball');

ball.checked = false

sun.onclick = function () {
    body.classList.toggle(body.style.background = '#F1F1F1')
    ball.checked = true
}

moon.onclick = function () {
    if (ball.checked === true) {
        body.classList.toggle(body.style.background = '#292C35')
        ball.checked = false
    }
}