const grid = document.querySelector('#grid');
const color = document.querySelector('#color');
const clearButton = document.querySelector('#clearButton');
const slider = document.querySelector('#slider');
const sliderVal = document.querySelector('#sliderValue');

grid.addEventListener('mousemove', changeColor);
clearButton.addEventListener('click', removeColor);
slider.addEventListener('input', updateValue);

function updateValue(){
    sliderVal.textContent = `${slider.value} x ${slider.value}`;
}


function createGrid(slider){
    for(let i = 0; i < slider; i++){
        for(let j = 0; j < slider; j++){
        const div = document.createElement('div');
        div.classList.toggle('cells');
        grid.appendChild(div);
        }
    }
}
    
function changeColor(e){
     e.target.style.cssText = `background-color: ${color.value}`;
}

function removeColor(){
    let cells = grid.childNodes;
        for (let i = 0; i < cells.length; i++){
            cells[i].style.cssText = 'background-color: #FFFFFF'
        }
    }

createGrid(parseInt(slider.value));
updateValue();