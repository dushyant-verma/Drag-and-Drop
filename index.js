//  Getting all the elements from html document

const draggableElements = document.querySelectorAll('.draggable');
const dropZone = document.getElementById("drop-zone");

draggableElements.forEach((draggable) => {
  draggable.addEventListener("dragstart", handleDragStart);
});

dropZone.addEventListener('dragover', handleDragOver);

dropZone.addEventListener("drop", handleDrop);

function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.textContent); // dragged item's text as data
  this.classList.add("dragging"); // Add visual feedback for dragging
}

function handleDragOver(event) {
  event.preventDefault(); // prevent default browser behavior
  this.classList.add("active"); // Show drop zone highlight on hover
}

function handleDrop(event) {
  event.preventDefault();
  const draggedText = event.dataTransfer.getData("text/plain");
  const newElement = document.createElement("div");
  newElement.textContent = draggedText;
  newElement.classList.add("draggable"); // Make dropped element draggable again

  // Optionally, remove the dragged element from its original location
  // event.target.removechild(event.target.querySelector('.dragging));

  this.appendChild(newElement);
  this.classList.remove("active");
}


draggableElements.forEach(draggable => {
    draggable.addEventListener('dragend', () => {
draggable.classList.remove('dragging');  //  
    });
});