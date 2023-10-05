const sketch = document.createElement('div');
const divContainer = document.querySelector('#container');
sketch.classList.add('sketchContainer');
divContainer.appendChild(sketch);

function createGrid() {
    makeRows(16);
    addHoverEffect();
}

function makeRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        sketch.appendChild(row).classList.add('gridRow');
        makeCols(row);
    }
}

function makeCols(row) {
    for (let j = 0; j < 16; j++) {
        let newcell = document.createElement('div');
        row.appendChild(newcell).classList.add('cell');
    }
}

function addHoverEffect() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('hovered');
        });
    });
}

createGrid();

let reset = document.querySelector('.reset');
reset.textContent = 'Reset';

reset.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.classList.remove('hovered');
    });
});
