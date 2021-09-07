document.getElementById("search-bar").addEventListener("input", () => {
    history(JSON.parse(localStorage.getItem("search")))
})

document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    addToSearches()
    var SearchBarContent = document.getElementById("search-bar").value
    var search = JSON.parse(localStorage.getItem("search")) ?? [SearchBarContent]
    if (search.includes(SearchBarContent)) {} else {
            search.push(SearchBarContent)
    }
    localStorage.setItem("search", JSON.stringify(search))
    if (SearchBarContent.includes("image: ")) {
        window.location.replace("https://www.google.com/search?tbm=isch&q=" + SearchBarContent.replace("image: ", ""))
    } else if (SearchBarContent.includes("mail: ")) {
        window.location.replace("https://mail.google.com/mail/u/0/#search/" + SearchBarContent.replace("mail: ", ""))
    } else if (SearchBarContent.includes(" ") == false && SearchBarContent.includes(".") == true){ //Add TLD Check To Make Sure It Is A Real Site
        if (SearchBarContent.includes("https://")) {
            window.location.replace(SearchBarContent)
        } else {
            window.location.replace("https://" + SearchBarContent)
        }
    } else if (SearchBarContent.includes("duckduckgo: ")) {
        window.location.replace("https://duckduckgo.com/?q=" + SearchBarContent.replace("duckduckgo: ", ""))
    } else {
        searchQ = localStorage.getItem("search-q") ?? "https://www.google.com/search?q="
        window.location.replace(searchQ + SearchBarContent)
    }
});