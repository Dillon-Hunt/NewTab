document.getElementById("toggle-display").addEventListener("click", () => {
    display = localStorage.getItem("display") ?? "Default"
    if (display == "Default") {
        document.getElementById("to-do-div").style.display = "none"
        localStorage.setItem("settingsState", "none")
        document.getElementById("widgets-div").style.display = "none"
        document.getElementById("library").style.display = ""
        document.getElementById("toolbar").style.display = "none"
        localStorage.setItem("widgets", "none")
        localStorage.setItem("notes", "none")
        localStorage.setItem("display", "Focused")
    } else if (display == "Focused") {
        document.getElementById("to-do-div").style.display = "none"
        localStorage.setItem("settingsState", "none")
        document.getElementById("widgets-div").style.display = "none"
        document.getElementById("toolbar").style.display = "none"
        document.getElementById("library").style.display = "none"
        localStorage.setItem("widgets", "none")
        localStorage.setItem("notes", "none")
        localStorage.setItem("display", "Minimal")
    } else if (display == "Minimal") {
        document.getElementById("to-do-div").style.display = ""
        localStorage.setItem("settingsState", "none")
        document.getElementById("widgets-div").style.display = localStorage.getItem("widgets") ?? "none"
        document.getElementById("toolbar").style.display = ""
        document.getElementById("library").style.display = ""
        localStorage.setItem("widgets", "none")
        localStorage.setItem("notes", "none")
        localStorage.setItem("display", "Default")
    }
})

function setDisplay() {
    display = localStorage.getItem("display") ?? "Default"
    if (display == "Focused") {
        document.getElementById("to-do-div").style.display = "none"
        localStorage.setItem("display", "Focused")
        localStorage.setItem("settingsState", "none")
        document.getElementById("widgets-div").style.display = "none"
        document.getElementById("library").style.display = ""
        document.getElementById("toolbar").style.display = "none"
    } else if (display == "Minimal") {
        document.getElementById("to-do-div").style.display = "none"
        localStorage.setItem("settingsState", "none")
        document.getElementById("widgets-div").style.display = "none"
        document.getElementById("toolbar").style.display = "none"
        document.getElementById("library").style.display = "none"
        localStorage.setItem("display", "Minimal")
    } else if (display == "Default") {
        document.getElementById("to-do-div").style.display = ""
        localStorage.setItem("settingsState", "none")
        document.getElementById("widgets-div").style.display = localStorage.getItem("widgets") ?? "none"
        document.getElementById("toolbar").style.display = ""
        document.getElementById("library").style.display = ""
        localStorage.setItem("display", "Default")
    }
}