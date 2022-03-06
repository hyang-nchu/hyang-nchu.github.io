//txtSearch------
document.getElementById("txtSearch").defaultValue = "Search for people, places and things";
document.getElementById("txtSearch").onclick = function () {
    document.getElementById("txtSearch").style.color = "black";
    document.getElementById("txtSearch").value = "";
}
document.getElementById("txtSearch").onblur = function () {
    document.getElementById("txtSearch").style.color = "#777777";
    document.getElementById("txtSearch").value = "Search for people, places and things";
}
document.getElementById("txtSearch").onkeypress = function (e) {
    if (e.which == 10 || e.which == 13) //enter
        document.getElementById("txtSearch").blur();
}

function search() {
    document.getElementById("txtSearch").style.color = "#777777";
    document.getElementById("txtSearch").value = "Search for people, places and things";
}

//txtUpdateStatus------
document.getElementById("txtUpdateStatus").defaultValue = "How are you doing, Hongta?";
document.getElementById("txtUpdateStatus").onclick = function () {
    document.getElementById("txtUpdateStatus").style.color = "black";
    document.getElementById("txtUpdateStatus").value = "";
}
document.getElementById("txtUpdateStatus").onblur = function () {
    document.getElementById("txtUpdateStatus").style.color = "#777777";
    document.getElementById("txtUpdateStatus").value = "How are you doing, Hongta?";
}
document.getElementById("txtUpdateStatus").onkeypress = function (e) {
    if (e.which == 10 || e.which == 13) //enter
        document.getElementById("txtUpdateStatus").blur();
}

//News Feed
function onClickNewsFeed() {
    document.getElementById("divNewsFeed").style.display = "block";
    documnet.getElementById("divFamily").style.display = "none";
}

//Family
function onClickFamily() {
    document.getElementById("divNewsFeed").style.display = "none";
    documnet.getElementById("divFamily").style.display = "block";
}
