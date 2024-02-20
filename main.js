/*  :::: main.js :::: */
const draggable = document.querySelectorAll('.drag');
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
dropZone.forEach((target) => {
    target.addEventListener('dragover', (event) => {
        event.preventDefault();

        const y = getCurrentDraggedItem(target, event.clientY);

        const dragged = document.querySelector('.dragging');
        target.appendChild(dragged)
    })
});

/** :::: handling the abilitiy to drop the items individually 
 * using :not() pseudo class selector:: */
function getCurrentDraggedItem(dropZone, yPosition) {

    const currentDraggedItem = [...dropZone.querySelectorAll('.drag:not(.dragging)')];

    /* :: reduce starts from closest item to next till 
    * (infinity) = border of the pregiven Max.Value
    * and then append a child the dragged item: */
    currentDraggedItem.reduce((closest, child) => {

        /*the size of an element and its position relative to the viewport*/
        const box = child.getBoundingClientRect();

        console.log('box: ', box)

    }, { offset: Number.POSITIVE_INFINITY });

}