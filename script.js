const container = document.querySelector('#grid');

function createGrid(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
        const div = document.createElement('div');
        div.classList.toggle('cells');
        container.appendChild(div);
        }
    }
}
    container.addEventListener('mousemove', (e) => {
        e.target.style.cssText = 'background-color: black;'
    });

    createGrid();