/*jshint esversion: 6 */ 

(function(){

// variables globals
const container = document.querySelector('#container');
const change = document.querySelector('[data-js="change"]');
const clear = document.querySelector('[data-js="clear"]');

// default size of grid
createGrid(30); 

function clearGrid() {
    while(container.firstChild) {
    container.removeChild(container.firstChild);
    }
}
    
// create a grid
function createGrid(sides) {
    clearGrid();

    for(let i = 0; i < sides * sides; i++) {
        let div = document.createElement('div');
        div.classList.add('pixel');
        div.setAttribute('data-js', 'pixel');
        container.appendChild(div);
    }
    container.style.cssText = 'grid-template-columns: repeat(' + sides + ', ' + 512/sides + 'px);' +
                                'grid-template-rows: repeat(' + sides + ', '  + 512/sides + 'px);';
    paint();
}


function paint() {
    // change the colors randomly when mouse is over a div.
    let pixel = document.querySelectorAll('[data-js="pixel"]');
    pixel.forEach((button) => {
        button.addEventListener('mouseenter', (e) => {
            e.target.style.background = randomColors();
        });
    });

    clear.addEventListener('click', () =>{
        Array.prototype.forEach.call(pixel, (e) => {
            e.style.background = 'white';
        });    
    });
}

// change scale of grid
function changeScale() {
    let changeScaleNumber = Number(prompt('Choice a scale from 1 until 64: '));
    while(changeScaleNumber === null || isNaN(changeScaleNumber) || changeScaleNumber < 1 || changeScaleNumber > 64)
        changeScaleNumber = Number(prompt('Choice a scale from 1 until 64: '));
    createGrid(changeScaleNumber);
}
change.addEventListener('click', changeScale);

// function that change the colors.
function randomColors() {
    return  '#' + Math.random().toString(16).slice(2, 8);
}

}());