

//https://stackoverflow.com/questions/44415228/list-sorting-with-html5-dragndrop-drop-above-or-below-depending-on-mouse


var dragging = null;

document.addEventListener('dragstart', function(event) {
        dragging = event.target;
    event.dataTransfer.setData('text/html', dragging);
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.addEventListener('dragenter', function(event) {
    event.target.style['border-bottom'] = 'solid 4px blue';
});

document.addEventListener('dragleave', function(event) {
    event.target.style['border-bottom'] = '';
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    event.target.style['border-bottom'] = '';
    event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
});
