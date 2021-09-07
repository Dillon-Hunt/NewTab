// Widgets
document.getElementById("widgets-toggle").addEventListener("click", () => {
    hideShow("widgets", "widgets-div")
    document.getElementById("settings-page").style.display = "none"
    localStorage.setItem("settingsState", "none")
    countSearches()
    countNewTabs()
})

// Edit Widgets
document.getElementById("edit-widgets").addEventListener("click", () => {
    document.getElementById("settings-page").style.display = "none"
    localStorage.setItem("settingsState", "none")
    if (document.getElementById("edit-widgets-div").style.display == "inline-block") {
        document.getElementById("edit-widgets-div").style.display = "none"
        document.getElementById("to-do-div").style.display = ""
    } else {
        document.getElementById("edit-widgets-div").style.display = "inline-block"
        document.getElementById("to-do-div").style.display = "none"
    }
})

// Dismiss Buttons
document.getElementById("edit-apps-widget").addEventListener("click", () => {
    localStorage.setItem("apps", "")
    document.getElementById("apps-widget").style.display = ""
    document.getElementById("apps-widget").style.animation = "none"
    document.getElementById("url-input").style.animation = "none"
    document.getElementById("name-input").style.animation = "none"
    document.getElementById("apps-submit").style.animation = "none"
    document.getElementById("edit-apps-widget").style.display = "none"
})

document.getElementById("edit-stats-widget").addEventListener("click", () => {
    localStorage.setItem("stats", "")
    document.getElementById("stats").style.display = ""
    document.getElementById("stats").style.animation = "none"
    document.getElementById("edit-stats-widget").style.display = "none"

})

document.getElementById("edit-notes-widget").addEventListener("click", () => {
    localStorage.setItem("notes", "")
    document.getElementById("notes").style.display = ""
    document.getElementById("notes").style.animation = "none"
    document.getElementById("edit-notes-widget").style.display = "none"

})

document.getElementById("notes-dismiss").addEventListener("click", () => {
    localStorage.setItem("notes", "none")
    document.getElementById("notes").style.animation = "fadeToNone 1s"
    document.getElementById("notes-headding").style.animation = "fadeToNone 1s"
    document.getElementById("notes-body").style.animation = "fadeToNone 1s"
    document.getElementById("edit-notes-widget").style.display = ""
    setTimeout(
        () => {
            hideWidget("notes")
    }, 1000);
})
  

// Custom App Creator
document.getElementById("file-input").addEventListener("change", () => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
        localStorage.setItem("image", reader.result)
    })

    reader.readAsDataURL(document.getElementById("file-input").files[0])
})

document.getElementById("add-apps").addEventListener("click", () => {
    localStorage.setItem("apps", "")
    document.getElementById("widgets-div").style.display = "inline-block"
    localStorage.setItem("widgets", "inline-block")
    document.getElementById("apps-widget").style.display = ""
    document.getElementById("apps-widget").style.animation = "none"
    document.getElementById("url-input").style.animation = "none"
    document.getElementById("name-input").style.animation = "none"
    document.getElementById("apps-submit").style.animation = "none"
    document.getElementById("edit-apps-widget").style.display = "none"
    countSearches()
    input = document.getElementById("url-input")
    input.focus()
})

document.getElementById("apps-dismiss").addEventListener("click", () => {
    localStorage.setItem("apps", "none")
    document.getElementById("apps-widget").style.animation = "fadeToNone 1s"
    document.getElementById("url-input").style.animation = "fadeToNone 1s"
    document.getElementById("name-input").style.animation = "fadeToNone 1s"
    document.getElementById("apps-submit").style.animation = "fadeToNone 1s"
    document.getElementById("edit-apps-widget").style.display = ""
    setTimeout(
        () => {
            hideWidget("apps-widget")
    }, 1000);
})

document.getElementById("apps-submit").addEventListener("click", () => {
    createApp()
    library = document.getElementsByClassName("library-items")[0].innerHTML
    localStorage.setItem("libraryHTML", library)
})

function createApp() {
    url = document.getElementById("url-input").value
    image = localStorage.getItem("image") ?? null
    console.log(image)
    document.getElementById("file-input").value = null
    localStorage.setItem("image", null)
    if (url.includes("http") == false) {
        url = "https://" + url
    }
    name = document.getElementById("name-input").value
    var library = document.getElementsByClassName("library-items")[0],

                // href Div
                newdiv = document.createElement("div")
                newdiv.title = url
                
                // Item
                newitem = document.createElement("div")
                newitem.className = "app custom-app draggable"
                newitem.style.display = "inline-block"
                newitem.style.opacity = 1
                newitem.draggable = "true"
                addEventsDragAndDrop(newitem)
                newitem.addEventListener("click", (event) => {
                    window.location = event.currentTarget.firstChild.title
                })
                newitem.addEventListener("mousedown", (event) => {
                    if (event.which == 3) {
                        deleteCustomApp(event.currentTarget)
                        library = document.getElementsByClassName("library-items")[0].innerHTML
                        localStorage.setItem("libraryHTML", library)
                    }
                })

                // Letter Icon
                if (image == "null") {
                    h1 = document.createElement("h1")
                    h1.className = "custom-app-div"
                    h1.textContent = name[0]
                } else {
                    img = document.createElement("img")
                    img.setAttribute("src", image)
                    img.style = "border-radius: 20px; background-color: rgba(0, 0, 0, 0.5);"
                    img.className = "app-image"
                    img.draggable = "false"
                }

                // Name
                p = document.createElement("p")
                p.textContent = name

                //Append
                if (image == "null") {
                    newdiv.appendChild(h1)
                } else {
                    newdiv.appendChild(img)
                }
                newdiv.appendChild(p)
                newitem.appendChild(newdiv)
                library.appendChild(newitem)
    document.getElementById("url-input").value = ""
    document.getElementById("name-input").value = ""
    setAppDisplay()
    setAppStyle()
}

function hideWidget(Widget) {
    document.getElementById(Widget).style.display = "none"
}

// Stats Widget
document.getElementById("stats-dismiss").addEventListener("click", () => {
    localStorage.setItem("stats", "none")
    document.getElementById("stats").style.animation = "fadeToNone 1s"
    document.getElementById("edit-stats-widget").style.display = ""
    setTimeout(
        () => {
        hideStatsWidget()
    }, 1000);
})

function setSearches(value) {
    document.getElementById("searches").textContent = value + " Searches";
}

function setNewTabs(value) {
    document.getElementById("newTabs").textContent = value + " NewTabs Opened";
}

function countSearches() {
    searches = Number(localStorage.getItem("searches") ?? "0")
    for (let i = 0; i < searches + 1; i++) {
        setTimeout(function(){ setSearches(i) }, 10 * i);
    }
}

function countNewTabs() {
    searches = Number(localStorage.getItem("newTabs") ?? "0")
    for (let i = 0; i < searches + 1; i++) {
        setTimeout(function(){ setNewTabs(i) }, 10 * i);
    }
}

function addToSearches() {
    searches = Number(localStorage.getItem("searches") ?? "0")
    searches += 1
    localStorage.setItem("searches", searches.toString())
}

function hideStatsWidget() {
    document.getElementById("stats").style.display = "none"
}

// Notes Widget
function saveNotes() {
    localStorage.setItem("notes-headding", document.getElementById("notes-headding").value)
    localStorage.setItem("notes-body", document.getElementById("notes-body").value)
}

document.getElementById("notes").addEventListener("input", () => {
    saveNotes()
})