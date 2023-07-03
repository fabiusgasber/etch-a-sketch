const grid = document.querySelector('#grid');
const color = document.querySelector('#color');
const clearButton = document.querySelector('#clearButton');
const slider = document.querySelector('#slider');
const sliderText = document.querySelector('#sliderValue');
const container = document.querySelector('.container');
const defaultButton = document.querySelector('#defaultButton');
const eraserButton = document.querySelector('#eraserButton');
const rainbowButton = document.querySelector('#rainbowButton');

grid.addEventListener('mousemove', changeColor);
grid.addEventListener('mousemove', setEraser);
grid.addEventListener('mousemove', setRainbow);
eraserButton.addEventListener('click', setEraser);
rainbowButton.addEventListener('click', setRainbow);
clearButton.addEventListener('click', removeColor);
slider.addEventListener('input', updateText);
slider.addEventListener('input', updateGrid);
defaultButton.addEventListener('click', setDefault);

function setRainbow(e) {
    if(rainbowButton.checked === true){
    eraserButton.checked = false;
    let color1 = Math.floor(Math.random()*256);
    let color2 = Math.floor(Math.random()*256);
    let color3 = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
}

function setEraser(e){
    if(eraserButton.checked === true){
        rainbowButton.checked = false;
        e.target.style.backgroundColor = '#ffffff';
    }
}

function setDefault(){
    slider.value = 16;
    color.value = '#39bee3';
    eraserButton.checked = false;
    rainbowButton.checked = false;
    updateText();
    updateGrid();
}

function updateText(){
    sliderText.textContent = `${slider.value} x ${slider.value}`;
}

function removeGrid(){
    grid.replaceChildren();
    grid.remove();
}

function updateGrid(){
    removeGrid();
    createGrid(parseInt(slider.value));
}


function createGrid(slider){
    for(let i = 0; i < slider; i++){
        for(let j = 0; j < slider; j++){
        const div = document.createElement('div');
        div.style.width = (640/slider) + 'px';
        div.style.height = (640/slider) + 'px';
        div.classList.toggle('cells');
        container.appendChild(grid);
        grid.appendChild(div);
        }
    }
}
    
function changeColor(e){
     e.target.style.backgroundColor = color.value;
}

function removeColor(){
    let cells = grid.childNodes;
        for (let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = '#FFFFFF'
        }
    }

createGrid(parseInt(slider.value));