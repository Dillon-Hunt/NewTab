var remove = document.querySelector(".draggable")
 
function dragStart(event) {
    this.style.opacity = "0.2"
    dragItem = this
    event.dataTransfer.effectAllowed = "move"
    localStorage.setItem("dragItem", this.innerHTML)
}
 
function dragEnter(event) {
    this.classList.add("hovering-over")
}
 
function dragLeave(event) {
    this.classList.remove("hovering-over")
}
 
function dragOver(event) {
  event.preventDefault()
  event.dataTransfer.dropEffect = "move"
  return false
}
 
function dragDrop(event) {
  dragItem = localStorage.getItem("dragItem")
  thisItem = this.innerHTML
  apps = document.getElementsByClassName("app")
  if (dragItem != this) {
    for (app of apps) {
      if (app.innerHTML == dragItem) {
        app.innerHTML = thisItem
        app.style.opacity = "1"
        this.innerHTML = dragItem
      }
    }
  }
  return false
}
 
function dragEnd(event) {
    var listItens = document.querySelectorAll(".draggable");
    [].forEach.call(listItens, function(item) {
        item.classList.remove("hovering-over")
    })
    this.style.opacity = "1"
    localStorage.setItem("libraryHTML", this.parentNode.innerHTML)
}
 
function addEventsDragAndDrop(element) {
    element.addEventListener("dragstart", dragStart, false)
    element.addEventListener("dragenter", dragEnter, false)
    element.addEventListener("dragover", dragOver, false)
    element.addEventListener("dragleave", dragLeave, false)
    element.addEventListener("drop", dragDrop, false)
    element.addEventListener("dragend", dragEnd, false)
}