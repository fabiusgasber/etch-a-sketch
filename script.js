const grid = document.querySelector('#grid');
const color = document.querySelector('#color');

function createGrid(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
        const div = document.createElement('div');
        div.classList.toggle('cells');
        grid.appendChild(div);
        }
    }
}
    grid.addEventListener('mousemove', (e) => {
        e.target.style.cssText = `background-color: ${color.value}`;
    });

    createGrid();