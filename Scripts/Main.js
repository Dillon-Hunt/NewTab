function print(item) {
    console.log(item)
}

function hide(storage, element) {
    document.getElementById(element).style.display = "none"
    localStorage.setItem(storage, "none")
}

function hideShow(storage, element) {
    toggle = localStorage.getItem(storage) ?? "none"
    if (toggle == "none") {
        document.getElementById(element).style.display = "inline-block"
        localStorage.setItem(storage, "inline-block")
    } else {
        document.getElementById(element).style.display = "none"
        localStorage.setItem(storage, "none")
    }
}

window.addEventListener("contextmenu", function (e) {
    e.preventDefault(); 
}, false);


//document.getElementById("body").addEventListener("keypress", (event) => {
//    alert(String.fromCharCode(event.keyCode))
//})

document.getElementById("body").onload = () => {
    // Set Time
    updateTime()
    
    //Count New Tabs
    newTabs = Number(localStorage.getItem("newTabs") ?? "0") + 1

    localStorage.setItem("newTabs", newTabs)
    library = localStorage.getItem("libraryHTML")
    if (library == null) {
        library = document.getElementsByClassName("library-items")[0].innerHTML
        localStorage.setItem("libraryHTML", library)
    } else {
        document.getElementsByClassName("library-items")[0].innerHTML = library
    }

    listItens = document.querySelectorAll(".draggable");

    [].forEach.call(listItens, function(item) {
        addEventsDragAndDrop(item)
    })

    // Creates To Do Items
    document.getElementById("to-do-list").innerHTML = localStorage.getItem("to-do")

    // Clear Web Apps
    document.getElementById("webapp").src = ""

    // Preperation Functions
    addToDoListeners()
    addRemoveListener()
    addLinkListener()
    countSearches()
    countNewTabs()
    setDisplay() 
    addSearchPageListener()
    setAppStyle()
    setAppDisplay()
    setToolbarOrientetion()
    setWidgetStyle()
    setToolbarApps()

    // Display 
    document.getElementById("edit-stats-widget").style.display = localStorage.getItem("stats") == "none" ? "" : "none"
    document.getElementById("stats").style.display = localStorage.getItem("stats") == "none" ? "none" : ""
    document.getElementById("edit-notes-widget").style.display = localStorage.getItem("notes") == "none" ? "" : "none"
    document.getElementById("notes").style.display = localStorage.getItem("notes") == "none" ? "none" : ""
    document.getElementById("edit-apps-widget").style.display = localStorage.getItem("apps") == "none" ? "" : "none"
    document.getElementById("apps-widget").style.display = localStorage.getItem("apps") == "none" ? "none" : ""
    document.getElementById("widgets-div").style.display = localStorage.getItem("widgets") ?? ""
    document.getElementById("notes-headding").textContent = localStorage.getItem("notes-headding") ?? "Untitled"
    document.getElementById("notes-body").textContent = localStorage.getItem("notes-body") ?? "Type Here..."
    document.getElementById("to-do-prefix-select").placeholder = localStorage.getItem("point") ?? "- "

    //
    let apps = document.getElementsByClassName("app")
    let googleApps = document.getElementsByClassName("google-app")
    let appsState = localStorage.getItem("appsState") ?? "inline-block"
    let googleAppsState = localStorage.getItem("googleAppsState") ?? "inline-block"
    for (app of apps) {
        app.style.display = appsState 
    }
    for (app of googleApps) {
        app.style.display = googleAppsState 
    }
    setBackground()
    setTheme()
}


