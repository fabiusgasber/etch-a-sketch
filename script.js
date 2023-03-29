const container = document.querySelector('.container');

function createGrid(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
        const div = document.createElement('div');
        div.style.cssText = 'height:20px; width:20px; border: 1px solid black; margin: -1px; background-color: white;'
        container.appendChild(div);
        }
    }
}

createGrid();