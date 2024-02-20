# drag n drop with vanilla script.
goal is to achieve a drag n drop behaviour like this:
all elements are draggable from one drop-zone to another.
all elements are sortable from top to bottom.
all elements are sortable individual by position.


# step by step:

1 - 3:  select the elements from the dom.

4 - 9 :     attach an eventlistener with an dragstart event to all draggable elements.
                addClasslist of something ...
                
10 - 15:    attach second event to the draggable elements, an dragend. so we can drag from start - end.
                removeClasslist of something ...

18 - 36:     define the dropzone behaviour:
              attach an dragover event to all"targets" of the both dropzones.
          22: in the dragover event handler for the target container(our dropZone), we call event.preventDefault(), which enables it to receive drop events.

          24: call the function that return the element that is currently dragged with all the needed coordinates like y-position and target offset included.

          26: get the current dragged item, its the one with the added classlist of something.

          28: when the element is over an other element the call in 24 returns nothing so the element is dropped at the end.

          32: elsewhise the element gets inserted befor the element that it is currently before.

42 - 69: main function to get the current position value of the dragged element:

    44: select the actual elements as an array. that are not actually dragged.(all those whithout added class) Use the :not() pseudo class therefore.

    49: return a reduced value of the selected array in line 44, that overgives the position offset over the not dragged items to the dropzone

    
    

              







JavaScript Methods like:  Number.POSITIVE_INFINITY, Number.Negative_Infinity;
reduce with object and return value.
