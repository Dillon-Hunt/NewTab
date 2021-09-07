window.setInterval(function(){
    updateTime()
}, 1000);

function getTime(time) {
    if (parseInt(time) < 10) {
        time = "0" + time
    }
    return time
}

function getHours() {
    let today = new Date();
    hours = today.getHours()
    if (hours > 12) {
        hours -= 12
    }
    return hours
}

function updateTime() {
    let today = new Date();
    hours = localStorage.getItem("timeStyle") == "12" ? getHours() : today.getHours()
    let time = hours + ":" + getTime(today.getMinutes())// + ":" + getTime(today.getSeconds());
    let date = (today.getMonth()+1) + "/" + today.getDate() +  "/"  + today.getFullYear();
    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
}