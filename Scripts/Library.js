function deleteCustomApp(appToDelete) {
    apps = document.getElementsByClassName("app")
    i = 0
    for (app of apps) {
        if (app == appToDelete) {
            document.getElementsByClassName("app")[i].remove()
        }
        i++
    }
}

function addRemoveListener() {
    apps = document.getElementsByClassName("app")
    x = 0
    for (app of apps) {
        document.getElementsByClassName("app")[x].addEventListener("mousedown", (event) => {
            if (event.which == 3) {
                deleteCustomApp(event.currentTarget)//get current app

                library = document.getElementsByClassName("library-items")[0].innerHTML
                localStorage.setItem("libraryHTML", library)
            }
        })
        x++
    }
}

function addLinkListener() {
    apps = document.getElementsByClassName("app")
    x = 0
    for (app of apps) {
        document.getElementsByClassName("app")[x].addEventListener("click", (event) => {
            window.location.href = event.currentTarget.firstChild.title
        })
        x++
    }
}