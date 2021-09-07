// Hide and Show Settings Page
document.getElementById("settings-button").addEventListener("click", () => {
    document.getElementById("edit-widgets-div").style.display = "none"
    if (localStorage.getItem("widget-style") == "sidebar") {
        document.getElementById("widgets-div").style.display = "none"
        localStorage.setItem("widgets", "none")
    }
    document.getElementById("to-do-div").style.display = ""
    let settingsState = localStorage.getItem("settingsState")
    getSettingsPage()
    if (settingsState == "none") {
        document.getElementById("settings-page").style.display = "inline-block"
        localStorage.setItem("settingsState", "inline-block")
    } else {
        document.getElementById("settings-page").style.display = "none"
        localStorage.setItem("settingsState", "none")
    }
})

document.getElementById("settings-dismiss").addEventListener("click", () => {
    document.getElementById("edit-widgets-div").style.display = "none"
    let settingsState = localStorage.getItem("settingsState")
    getSettingsPage()
    if (settingsState == "none") {
        document.getElementById("settings-page").style.display = "inline-block"
        localStorage.setItem("settingsState", "inline-block")
    } else {
        document.getElementById("settings-page").style.display = "none"
        localStorage.setItem("settingsState", "none")
    }
})

// Show Correct Page
function getSettingsPage() {
    settingsPage = localStorage.getItem("settings-page") ?? "General"
    if (settingsPage == "General") {
        document.getElementById("general-page").style.display = ""
        document.getElementById("general-button").className = "settings-sidebar-button settings-sidebar-button-top settings-sidebar-button-selected"
        document.getElementById("apps-page").style.display = "none"
        document.getElementById("apps-button").className = "settings-sidebar-button"
        document.getElementById("widgets-page").style.display = "none"
        document.getElementById("widgets-button").className = "settings-sidebar-button"
        document.getElementById("layout-page").style.display = "none"
        document.getElementById("layout-button").className = "settings-sidebar-button"
        document.getElementById("feedback-page").style.display = "none"
        document.getElementById("feedback-button").className = "settings-sidebar-button settings-sidebar-button-bottom"
    } else if (settingsPage == "Apps") {
        document.getElementById("general-page").style.display = "none"
        document.getElementById("general-button").className = "settings-sidebar-button settings-sidebar-button-top"
        document.getElementById("apps-page").style.display = ""
        document.getElementById("apps-button").className = "settings-sidebar-button settings-sidebar-button-selected "
        document.getElementById("widgets-page").style.display = "none"
        document.getElementById("widgets-button").className = "settings-sidebar-button"
        document.getElementById("layout-page").style.display = "none"
        document.getElementById("layout-button").className = "settings-sidebar-button"
        document.getElementById("feedback-page").style.display = "none"
        document.getElementById("feedback-button").className = "settings-sidebar-button settings-sidebar-button-bottom"
    } else if (settingsPage == "Widgets") {
        document.getElementById("general-page").style.display = "none"
        document.getElementById("general-button").className = "settings-sidebar-button settings-sidebar-button-top"
        document.getElementById("apps-page").style.display = "none"
        document.getElementById("apps-button").className = "settings-sidebar-button"
        document.getElementById("widgets-page").style.display = ""
        document.getElementById("widgets-button").className = "settings-sidebar-button settings-sidebar-button-selected "
        document.getElementById("layout-page").style.display = "none"
        document.getElementById("layout-button").className = "settings-sidebar-button"
        document.getElementById("feedback-page").style.display = "none"
        document.getElementById("feedback-button").className = "settings-sidebar-button settings-sidebar-button-bottom"
    } else if (settingsPage == "Layout") {
        document.getElementById("general-page").style.display = "none"
        document.getElementById("general-button").className = "settings-sidebar-button settings-sidebar-button-top"
        document.getElementById("apps-page").style.display = "none"
        document.getElementById("apps-button").className = "settings-sidebar-button"
        document.getElementById("widgets-page").style.display = "none"
        document.getElementById("widgets-button").className = "settings-sidebar-button"
        document.getElementById("layout-page").style.display = ""
        document.getElementById("layout-button").className = "settings-sidebar-button settings-sidebar-button-selected"
        document.getElementById("feedback-page").style.display = "none"
        document.getElementById("feedback-button").className = "settings-sidebar-button settings-sidebar-button-bottom"
    } else if (settingsPage == "Feedback") {
        document.getElementById("general-page").style.display = "none"
        document.getElementById("general-button").className = "settings-sidebar-button settings-sidebar-button-top"
        document.getElementById("apps-page").style.display = "none"
        document.getElementById("apps-button").className = "settings-sidebar-button"
        document.getElementById("widgets-page").style.display = "none"
        document.getElementById("widgets-button").className = "settings-sidebar-button"
        document.getElementById("layout-page").style.display = "none"
        document.getElementById("layout-button").className = "settings-sidebar-button"
        document.getElementById("feedback-page").style.display = ""
        document.getElementById("feedback-button").className = "settings-sidebar-button settings-sidebar-button-bottom settings-sidebar-button-selected "
    }
}

// Change Page
function addSearchPageListener() {
    pages = document.getElementsByClassName("settings-sidebar-button")
    for (page of pages) {
        page.addEventListener("click", (event) => {
            localStorage.setItem("settings-page", event.currentTarget.textContent)
            getSettingsPage()
        })
    }
}

// General
// Background
function setBackground() {
    if (localStorage.getItem("color-theme") != "Gamer") {
    if (localStorage.getItem("background") == null) {
        localStorage.setItem("background", "./Images/background-cliff1.jpeg")
    }
    if (localStorage.getItem("background") == "./Images/background-cliff1.jpg") {
        localStorage.setItem("background", "./Images/background-cliff1.jpeg")
    }
    let background = localStorage.getItem("background")
    document.getElementById("body").style.backgroundImage = "url(" + background + ")"
    }
}

// Hide and Show Developer Apps
function setToolbarApps() {
    toggle = localStorage.getItem("toolbar-apps-toggle") ?? "hide"
    if (toggle == "hide") {
        apps = document.getElementsByClassName("dev-apps")
        document.getElementById("webapp").src = ""
        document.getElementById("webapp").style.display = "none"
        for (app of apps) {
            app.style.display = "none"
        }
    } else {
        document.getElementById("webapp").style.display = "none"
        apps = document.getElementsByClassName("dev-apps")
        for (app of apps) {
            app.style.display = ""
        }
    }
}

document.getElementById("background-select-button").addEventListener("click", () => {
    localStorage.setItem("background", document.getElementById("background-select").value)
    let background = localStorage.getItem("background")
    if (background == null) {
        localStorage.setItem("background", "./Images/background-cliff1.jpg")
        document.getElementById("body").style.backgroundImage = "url(./Images/background-cliff1.jpg)"
    } else {
        if (localStorage.getItem("color-theme")!= "Gamer") {
            document.getElementById("body").style.backgroundImage = "url(" + background + ")"
        }
    }
})

// Background Url
document.getElementById("background-select-url-button").addEventListener("click", () => {
    localStorage.setItem("background", document.getElementById("background-select-url").value)
    let background = localStorage.getItem("background")
    if (background == null) {
        localStorage.setItem("background", "Images/background-space.jpg")
        document.getElementById("body").style.backgroundImage = "url(Images/background-night-sky1)"
    } else {
        if (localStorage.getItem("color-theme")!= "Gamer") {
            document.getElementById("body").style.backgroundImage = "url(" + background + ")"
        }
    }
})

// Search Query search-q
document.getElementById("search-query-select-url-button").addEventListener("click", () => {
    value = document.getElementById("search-query-select-url").value
    if (value == "") {
        value = "https://www.google.com/search?q="
    }
    localStorage.setItem("search-q", value)
    document.getElementById("search-query-select-url").value = ""
})

// To Do Prefix
document.getElementById("to-do-prefix-select-button").addEventListener("click", () => {
    prefix = document.getElementById("to-do-prefix-select").value
    oldPrifix = localStorage.getItem("point") ?? "-"
    toDoItems = document.getElementsByClassName("to-do-item")
    for (item of toDoItems) {
        item.textContent = item.textContent.replace(oldPrifix, prefix)
    }
    localStorage.setItem("point", prefix)
    localStorage.setItem("to-do", document.getElementById("to-do-list").innerHTML)
})

// Display
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

// Apps
function setAppStyle() {
    style = localStorage.getItem("app-style") ?? "20px"
    apps = document.getElementsByClassName("app-image")
    customApps = document.getElementsByClassName("custom-app-div")
    for (app of apps) {
        app.style.borderRadius = style
    }
    for (app of customApps) {
        app.style.borderRadius = style
    }
}

function setAppDisplay() {
    display = localStorage.getItem("app-display") ?? "transparent"
    apps = document.getElementsByClassName("app-image")
    appsDiv = document.getElementsByClassName("app")
    customApps = document.getElementsByClassName("custom-app-div")
    if (display == "solid") {
        for (app of apps) {
            app.style.backgroundColor = "#303030"
        }
        for (app of customApps) {
            app.style.backgroundColor = "#303030"
        }
        for (app of appsDiv) {
            app.style.display = "inline-block";
        }
    } else if (display == "transparent") {
        for (app of apps) {
            app.style.backgroundColor = "#00000080"
        }
        for (app of customApps) {
            app.style.backgroundColor = "#00000080"
        }
        for (app of appsDiv) {
            app.style.display = "inline-block";
        }
    } else {
        for (app of apps) {
            app.style.backgroundColor = "#00000080"
        }
        for (app of customApps) {
            app.style.backgroundColor = "#00000080"
        }
        for (app of appsDiv) {
            app.style.display = "none";
        }
    }
}

// Sets Theme
function setTheme() {
    let theme = localStorage.getItem("color-theme") ?? "light"
    let background = localStorage.getItem("background") ?? "./Images/background-cliff1.jpg"
    if (theme == "Gamer") {
        document.getElementById("body").style.backgroundImage = "none"
        document.getElementById("search-form").style.borderBottomColor = "white"
        document.getElementById("body").style.animation = "pulse 8s infinite"
    } else {
        document.getElementById("body").style.backgroundImage = "url(" + background + ")"
        document.getElementById("to-do-list").style.color = (theme  == "Dark" ? "black" : "white")
        document.getElementById("to-do-input").style.borderBottomColor = (theme  == "Dark" ? "black" : "white")
        document.getElementById("to-do-input").style.color = (theme  == "Dark" ? "black" : "white")
        document.getElementById("search-bar").style.color = (theme  == "Dark" ? "black" : "white")
        document.getElementById("search-form").style.borderBottomColor = (theme  == "Dark" ? "black" : "white")
        document.getElementById("time").style.color = (theme == "Dark" ? "black" : "white")
        document.getElementById("date").style.color = (theme == "Dark" ? "black" : "white")
        document.getElementById("body").style.animation = "none"
    }
}

// Theme Selector
document.getElementById("color-theme-select-button").addEventListener("click", () => {
    localStorage.setItem("color-theme", document.getElementById("color-select").value)
    setTheme() 
})

// Clock Style Selector
document.getElementById("clock-style-select-button").addEventListener("click", () => {
    localStorage.setItem("timeStyle", document.getElementById("clock-style-select").value)
    updateTime()
})

// Toolbar Apps Toggle
document.getElementById("toolbar-apps-select-button").addEventListener("click", () => {
    localStorage.setItem("toolbar-apps-toggle", document.getElementById("toolbar-apps-select").value)
    setToolbarApps()
})

// App Style Selector
document.getElementById("app-style-select-button").addEventListener("click", () => {
    localStorage.setItem("app-style", document.getElementById("app-style-select").value)
    setAppStyle()
})

// App Display Selector
document.getElementById("app-display-select-button").addEventListener("click", () => {
    localStorage.setItem("app-display", document.getElementById("app-display-select").value)
    setAppDisplay()
})

// Resets Apps
document.getElementById("reset-apps").addEventListener("click", () => {
    localStorage.removeItem("app-style")
    localStorage.removeItem("app-display")
    let apps = document.getElementsByClassName("app")
    length = apps.length -1
    for (i = length; i > -1; i--) {
        document.getElementsByClassName("app")[i].remove()
    }
    localStorage.removeItem("libraryHTML")
    window.location.reload()
})



// Widgets


// toolbar
function setToolbarOrientetion() {
    toolbarOrientation = localStorage.getItem("toolbar-orientation") ?? "left"
    if (toolbarOrientation == "left") {
        document.getElementById("toolbar").style.left = "0px"
        document.getElementById("toolbar").style.right = ""
        document.getElementById("toolbar").style.borderRight = "1px solid white"
        document.getElementById("toolbar").style.borderLeft = "none"
        document.getElementById("webapp").style.left = "46px"
        document.getElementById("widgets-div").style = "right: 0px !important; display: none;"
        document.getElementById("toggle-display").style = "border: none; background-color: transparent; top: 5px; left: 5px; position: absolute; transform: rotate(180deg); z-index: 10;"
        document.getElementById("edit-widgets-div").style = "display: none; left: 46px;"
    } else if (toolbarOrientation == "right") {
        document.getElementById("toolbar").style.left = ""
        document.getElementById("toolbar").style.right = "0px"
        document.getElementById("toolbar").style.borderRight = "none"
        document.getElementById("toolbar").style.borderLeft = "1px solid white"
        document.getElementById("webapp").style.left = "0px"
        document.getElementById("widgets-div").style = "right: 46px !important; display: none;"
        document.getElementById("toggle-display").style = "border: none; background-color: transparent; top: 5px; right: 5px; position: absolute; transform: rotate(180deg); z-index: 10;"
        document.getElementById("edit-widgets-div").style = "display: none; left: 0px;"
    }
}

document.getElementById("toolbar-orientation-select-button").addEventListener("click", () => {
    toolbarOrientation = document.getElementById("toolbar-orientation-select").value
    localStorage.setItem("toolbar-orientation", toolbarOrientation)
    setToolbarOrientetion()
})


// Feedback
document.getElementById("feedback-submit").addEventListener("click", () => {
    subject = document.getElementById("feedback-subject").value
    body = document.getElementById("feedback-body").value 
    document.getElementById("feedback-subject").value = ""
    document.getElementById("feedback-body").value = ""
    window.location.replace("mailto:binaryvox@gmail.com?subject=" + subject + "&body=" + body)
})

document.getElementById("widget-theme-select-button").addEventListener("click", () => {
    localStorage.setItem("widget-theme", document.getElementById("widget-theme-select").value)
    setWidgetStyle()
})

function setWidgetTheme() {
    theme = localStorage.getItem("widget-theme") ?? "light"
    widgets = document.getElementsByClassName("widget")
    widgetInputs = document.getElementsByClassName("widget-button")
    widgetButtons = document.getElementsByClassName("widget-input")
    if (theme == "dark") {
        getElementById("file-input-label").style.backgroundColor = "rgba(0, 0, 0, 0.27)"
        for (widget of widgets) {
            widget.style.backgroundColor = "#090909cc"
        }
        for (widget of widgetInputs) {
            widget.style.backgroundColor = "#000"
        }
        for (widget of widgetButtons) {
            widget.style.backgroundColor = "#000"
        }
    } else {
        getElementById("file-input-label").style.backgroundColor = "rgba(151, 151, 151, 0.153)"
        for (widget of widgets) {
            widget.style.backgroundColor = "#ffffff61"
        }
        for (widget of widgetInputs) {
            widget.style.backgroundColor = "#97979727"
        }
        for (widget of widgetButtons) {
            widget.style.backgroundColor = "#97979727"
        }
    }
}

document.getElementById("widget-style-select-button").addEventListener("click", () => {
    localStorage.setItem("widget-style", document.getElementById("widget-style-select").value)
    setWidgetStyle()
})

function setWidgetStyle() {
    style = localStorage.getItem("widget-style") ?? "on-screen"
    theme = localStorage.getItem("widget-theme") ?? "light"
    widgets = document.getElementsByClassName("widget")
    widgetInputs = document.getElementsByClassName("widget-button")
    widgetButtons = document.getElementsByClassName("widget-input")
    if (style == "sidebar") {
        document.getElementById("widgets-div").style.zIndex = "100"
        document.getElementById("widgets-div").style.backgroundColor = "#0006"
        document.getElementById("edit-widgets").style.color = "white"
        document.getElementById("edit-widgets").style.borderColor = "white"
        if (theme == "dark") {
            //document.getElementById("file-input-label").style.backgroundColor = "rgba(0, 0, 0, 0.27)"
            for (widget of widgets) {
                widget.style.backgroundColor = "#090909cc"
            }
            for (widget of widgetInputs) {
                widget.style.backgroundColor = "#000"
            }
            for (widget of widgetButtons) {
                widget.style.backgroundColor = "#000"
            }
        } else {
            //document.getElementById("file-input-label").style.backgroundColor = "rgba(151, 151, 151, 0.153)"
            for (widget of widgets) {
                widget.style.backgroundColor = "#ffffff61"
            }
            for (widget of widgetInputs) {
                widget.style.backgroundColor = "#97979727"
            }
            for (widget of widgetButtons) {
                widget.style.backgroundColor = "#97979727"
            }
        }
    } else if (style == "on-screen") {
        document.getElementById("widgets-div").style.zIndex = "1"
        document.getElementById("widgets-div").style.backgroundColor = "transparent"
        document.getElementById("edit-widgets").style.color = "#ffffff1c"
        document.getElementById("edit-widgets").style.borderColor = "#ffffff1c"
        if (theme == "dark") {
            //document.getElementById("file-input-label").style.backgroundColor = "rgba(0, 0, 0, 0.27)"
            for (widget of widgets) {
                widget.style.backgroundColor = "#00000036"
            }
            for (widget of widgetInputs) {
                widget.style.backgroundColor = "#00000045"
            }
            for (widget of widgetButtons) {
                widget.style.backgroundColor = "#00000045"
            }
        } else {
            //document.getElementById("file-input-label").style.backgroundColor = "rgba(151, 151, 151, 0.153)"
            for (widget of widgets) {
                widget.style.backgroundColor = "#cecece36"
            }
            for (widget of widgetInputs) {
                widget.style.backgroundColor = "#97979727"
            }
            for (widget of widgetButtons) {
                widget.style.backgroundColor = "#97979727"
            }
        }
    }
}