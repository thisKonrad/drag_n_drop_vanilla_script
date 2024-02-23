# drag n drop with vanilla script.

This JavaScript code implements a simple drag-and-drop
functionality for elements with the data-theme="drag"
attribute, allowing them to be moved and positioned
within drop zones that have the data-theme="drop" attribute.

goal is to achieve a drag n drop behaviour like this:
all elements are draggable from one drop-zone to another.
all elements are sortable from top to bottom.
all elements are sortable individual by position.

# step by step:

1 - 3: select the elements from the dom.

4 - 9 : attach an eventlistener with an dragstart event to all draggable elements.
addClasslist of something ...

10 - 15: attach second event to the draggable elements, an dragend. so we can drag from start - end.
removeClasslist of something ...

//The dragstart event listener adds the 'dragging' class to the element being dragged, visually indicating its selected state.
The dragend event listener removes the 'dragging' class once the dragging operation is complete.//

18 - 36: define the dropzone behaviour:
attach an dragover event to all"targets" of the both dropzones.

        The dragover event listener prevents the browser's default behavior, allowing the dragged element to be dropped within the drop zone.

Inside the dragover event listener, the code calculates the position of the dragged element relative to the drop zone and inserts the dragged element accordingly:

          24: call the function that return the element that is currently dragged
          with all the needed coordinates like y-position and target offset included.

          26: get the current dragged item, its the one with the added classlist of something.

          28: when the element is over an other element the call in
              24 returns nothing so the element is dropped at the end.

          32: elsewhise the element gets inserted befor the element that it is currently before.

//The getCurrentDraggedItem function is used to
determine the correct position for the
dragged element within the drop zone.
The getCurrentDraggedItem function calculates the
vertical position of the dragged
element relative to the drop zone and returns the
element that should be placed
after the dragged element:
42 - 69:

    44: select the actual elements as an array. that are not actually
    dragged.(all those whithout added class) Use the :not() pseudo class therefore.

    49: return a reduced value of the selected array in line 44,
    that overgives the position offset over the not dragged items to the dropzone

    reduce starts at the closest item (closet) where the dragged item is dragged over
    to the next border of the next item , and there it appends a child (child).

    52: get the size of the child relative to the viewport using the getBoundingClientRect() Method ,
        this is the boundingBox that sourrounds your dragged child...

    54: offset= get the center of this "boundingBox" at his current Y Position.

    59-63:  check condition of the current offset position
            return the current center of the child position
            or the closest if its positive,

    65:   reduce() initial value = start at the Number NEGATIVE_INFINITY the nearly end of the border to the        next   element..
        at last return the element.

The function loops through all elements within the drop zone, calculates their vertical position relative to the dragged element, and returns the closest element that should be placed after the dragged element.
