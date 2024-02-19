/* :::: main.js :::: */
const draggable = document.querySelectorAll('[data-theme="drag"]');
const dropZone = document.querySelectorAll('[data-theme="drop"]');

draggable.forEach((item) => {
    item.addEventListener('dragstart', () =>
        item.classList.add('dragging')
    )
});

draggable.forEach((item) => {
    item.addEventListener('dragend', () =>
        item.classList.remove('dragging')
    )
});

/* :::: drop zone :::: */
dropZone.forEach((item) => {
    item.addEventListener('dragover', () => {
        console.log('over');
        const dragged = document.querySelector('.dragging');
        item.appendChild(dragged)
    })
});