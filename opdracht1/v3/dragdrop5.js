var dragging;     //Variable dragging aan maken

//https://stackoverflow.com/questions/44415228/list-sorting-with-html5-dragndrop-drop-above-or-below-depending-on-mouse


function dragStart(event) {
    dragging = event.target;                                    //verwijzing naar wie het object heeft verzonden
    event.dataTransfer.effectAllowed = 'move';                  //effect eigenschap drag
    event.dataTransfer.setData('text/plain', event.target.id);  //behoud gevens tijdens het drag
}

function dragOver(event) {
    //console.log('dragOver', event.target);
    event.preventDefault();
}

function dragEnter(event) {
    console.log('dragEnter', event.target);
    event.target.classList.add('over');                         //Groene border waar je kan droppen
}

function dragLeave(event) {
    event.target.classList.remove('over');                       //Verwijderen groene border
}

function drop(event) {
    //console.log('drop', event.target);
    event.preventDefault();
    event.target.classList.remove('over');                      //Verwijderen groene border
    event.target.parentNode.insertBefore(dragging, event.target.previousSibling); //Plaatst het nieuwe item boven de ouder/ al bestaande item
}

document.addEventListener('dragstart', dragStart);
document.addEventListener('dragover', dragOver);
document.addEventListener('dragenter', dragEnter);
document.addEventListener('dragleave', dragLeave);
document.addEventListener('drop', drop);


