const sketch = document.createElement('div');
const divContainer = document.querySelector('#container');
sketch.classList.add('sketchContainer');
divContainer.appendChild(sketch);


let cells = document.getElementsByClassName('cell');

function createGrid() {
    makeRows(16)
    
}

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        sketch.appendChild(row).classList.add('gridRow');
        makeCols(row)
    }
}

function makeCols(row) {
    for( j = 0; j < 16; j++) {
    let newcell = document.createElement('div');
    row.appendChild(newcell).classList.add('cell');
    }
}


createGrid();
for(const cell of cells) {
    cell.addEventListener('click', hovered);
}

function hovered(){
for(const cell of cells) {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hovered');
    })
}
}

let reset = document.querySelector('.reset');
reset.textContent = 'Reset';

reset.addEventListener('click', () => {
    for(const cell of cells) {
        cell.classList.remove('hovered');
    }
})
