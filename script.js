const grid = document.querySelector('#grid');
const color = document.querySelector('#color');
const clear = document.querySelector('#clear');

grid.addEventListener('mousemove', changeColor);
clear.addEventListener('click', removeColor);


function createGrid(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
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

    createGrid();