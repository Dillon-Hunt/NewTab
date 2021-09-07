//Gets History Items From Input
function search(key, array){
    var returnArray = []
    if (array != null) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].toLowerCase().includes(key.toLowerCase())) {
                returnArray.push(array[i])
            }
        }
        return returnArray
    }
    return null
}

//Adds History Content To Search Bar
function addToSearch(recommendedContent) {
    input = document.getElementById("search-bar")
    input.focus()
    if (document.getElementById("search-bar").value != recommendedContent) {
        localStorage.setItem("lastSearch", document.getElementById("search-bar").value)
    }
    document.getElementById("search-bar").value = recommendedContent
    return
}

//Deletes History Item
function deleteFromSearch(recommendedContent) {
    array = JSON.parse(localStorage.getItem("search"))
    array.splice(array.indexOf(recommendedContent), 1);
    localStorage.setItem("search", JSON.stringify(array))
    history(array)
}

//Creates History Menu
function history(toSearch) {
    var SearchBarContent = document.getElementById("search-bar").value
    historyItems = document.getElementsByClassName("history-item")
    while (historyItems[0]) {
        document.getElementsByClassName("history")[0].removeChild(historyItems[0])
    }
    if (SearchBarContent.length > 0) {
        if (search(SearchBarContent, toSearch) != null) {
            array = search(SearchBarContent, JSON.parse(localStorage.getItem("search")))
            for (i = 0; i < array.length && i < 3; i++) {
                var history = document.getElementsByClassName("history")[0],
                    newitem = document.createElement("a")
                    newitem.id = "history-item"
                    newitem.style.color = "#ffffffb5"
                    newitem.onclick = function() {
                        addToSearch(this.textContent)
                    }
                    newitem.ondblclick = function() {
                        addToSearches()
                        if (this.textContent.includes("image: ")) {
                            window.location.replace("https://www.google.com/search?tbm=isch&q=" + this.textContent.replace("image: ", ""))
                        } else if (this.textContent.includes("mail: ")) {
                            window.location.replace("https://mail.google.com/mail/u/0/#search/" + this.textContent.replace("mail: ", ""))
                        } else if (this.textContent.includes(" ") == false && this.textContent.includes(".") == true){
                            if (this.textContent.includes("https://")) {
                                window.location.replace(this.textContent)
                            } else {
                                window.location.replace("https://" + this.textContent)
                            } 
                        } else if (this.textContent.includes("google: ")) {
                            window.location.replace("https://www.google.com/search?q=" + this.textContent.replace("google: ", ""))
                        } else {
                            window.location.replace("https://www.google.com/search?q=" + this.textContent)
                        }
                    }
                    newitem.className = "history-item"
                    newitem.textContent = array[i]
                    newitem.onmousedown = function(event) {
                        event.preventDefault()
                        if (event.which == 3) {
                            deleteFromSearch(this.textContent)
                        }
                    }
                    seperator = document.createElement("hr")
                    seperator.className = "history-item"
                    seperator.id = "history-item"
                    if (document.getElementsByClassName("history-item").length == 0 && i == 0) {
                        title = document.createElement("p")
                        title.className = "history-item"
                        title.id = "history-item"
                        title.textContent = "Recomended Results:"
                        title.style.color = "white"
                        history.appendChild(title)
                    }
                    history.appendChild(newitem)
            }
        }
    }
    if (document.getElementsByClassName("history-item").length == 1) {
        document.getElementsByClassName("history")[0].removeChild(document.getElementsByClassName("history-item")[0])
    }
}