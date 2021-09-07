document.getElementById("to-do-form").addEventListener("submit", (event) => {
    event.preventDefault()
    point = localStorage.getItem("point") ?? "-" // Add custom point to settings
    input = document.getElementById("to-do-input").value
    var toDo = document.getElementById("to-do-list"),
        newToDo = document.createElement("p")
        newToDo.textContent = point + " " + input
        newToDo.id = "to-do-item"
        newToDo.className = "to-do-item"
        newToDo.addEventListener("click", (event) => {
            i = 0
            items = document.getElementsByClassName("to-do-item")
            for (item of items) {
                if (item == event.currentTarget) {
                    document.getElementsByClassName("to-do-item")[i].remove()
                    localStorage.setItem("to-do", document.getElementById("to-do-list").innerHTML)
                }
                i++
            }
        })
        toDo.appendChild(newToDo)

    document.getElementById("to-do-input").value = ""
    localStorage.setItem("to-do", document.getElementById("to-do-list").innerHTML)
})

function addToDoListeners() {
    toDoItems = document.getElementsByClassName("to-do-item")
    for (toDoItem of toDoItems) {
        toDoItem.addEventListener("click", (event) => {
            i = 0
            items = document.getElementsByClassName("to-do-item")
            for (item of items) {
                if (item == event.currentTarget) {
                    document.getElementsByClassName("to-do-item")[i].remove()
                    localStorage.setItem("to-do", document.getElementById("to-do-list").innerHTML)
                }
                i++
            }
        })
    }
}