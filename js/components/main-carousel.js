

const buttonRight = document.querySelector('.button-arrow.-right');
const buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 50

console.log(buttonRight)

buttonRight.addEventListener('click', function() {
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px)`;
});

buttonLeft.addEventListener('click', function(){
    pixels = pixels - 50;
    elements.style = `transform: translateX(${pixels}px)`;
})