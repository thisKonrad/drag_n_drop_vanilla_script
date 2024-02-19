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
    item.addEventListener('dragover', (event) => {
        event.preventDefault()
        const dragged = document.querySelector('.dragging');
        item.appendChild(dragged)
    })
});

/** :::: handling the abilitiy to drop the items individually 
 * using :not() pseudo class selector:: */
function getActualDraggedItem(dragged, mousePosition) {

    const currentDraggedItem = [...document.querySelector('[data-theme="drag"]:not(.dragging)')];

}