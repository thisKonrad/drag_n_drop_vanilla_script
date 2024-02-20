/*  :::: main.js :::: */
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
dropZone.forEach((target) => {

    target.addEventListener('dragover', (event) => {

        event.preventDefault();

        const afterElement = getCurrentDraggedItem(target, event.clientY);

        const dragged = document.querySelector('.dragging');
        /* when element is over no other element:*/
        if (afterElement == null) {
            target.appendChild(dragged)
        }
        else {
            target.insertBefore(dragged, afterElement)
        }

    })
});

/** :::: handling the abilitiy to drop the items individually 
 * using :not() pseudo class selector:: */
function getCurrentDraggedItem(dropZone, yPosition) {

    const currentDraggedItem = [...dropZone.querySelectorAll('[data-theme="drag"]:not(.dragging)')];

    /* :: reduce starts from closest item to next till 
    * (infinity) = border of the pregiven Max.Value
    * and then append a child => the dragged item: */
    return currentDraggedItem.reduce((closest, child) => {

        /*the size of an element and its position relative to the viewport*/
        const boundingBox = child.getBoundingClientRect();

        const offset = yPosition - boundingBox.top - (boundingBox.height / 2);

        console.log('center box offset: ', offset);
        console.log('box: ', boundingBox);

        if (offset < 0 && offset > closest.offset) {

            return { offset: offset, element: child };

        } else {
            return closest;
        }

    }, { offset: Number.NEGATIVE_INFINITY }).element;

}