function saveNotes() {
    localStorage.setItem("notes-headding", document.getElementById("notes-headding").value)
    localStorage.setItem("notes-body", document.getElementById("notes-body").value)
}

document.getElementById("notes-div").addEventListener("input", () => {
    saveNotes()
})

document.getElementById("notes-toggle").addEventListener("click", () => {
    hideShow("notes", "notes-div")
    hide("widgets", "widgets-div")
})