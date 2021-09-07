document.getElementById("kitchefs").addEventListener("click", () => {
    if (document.getElementById("webapp").src == "https://kitchefs.github.io/" && document.getElementById("webapp").style.display == "") {
        document.getElementById("webapp").style.display = "none"
    } else {
        document.getElementById("webapp").style.display = ""
        if (document.getElementById("webapp").src != "https://kitchefs.github.io/") {
            document.getElementById("webapp").src = "https://kitchefs.github.io/"
        }
    }
})

document.getElementById("lanes-cafe").addEventListener("click", () => {
    if (document.getElementById("webapp").src == "https://lanes.cafe/" && document.getElementById("webapp").style.display == "") {
        document.getElementById("webapp").style.display = "none"
    } else {
        document.getElementById("webapp").style.display = ""
        if (document.getElementById("webapp").src != "https://lanes.cafe/") {
            document.getElementById("webapp").src = "https://lanes.cafe/"
        }
    }
})