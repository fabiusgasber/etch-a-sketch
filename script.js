const container = document.querySelector('.container');

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

    // Div an der Stelle event.x und event.y = Farbe
    // wie bekomme ich raus wo das richtige div ist, was gefärbt werden soll?

createGrid();