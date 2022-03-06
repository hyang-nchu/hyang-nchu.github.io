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

//txtMsgSearch------
document.getElementById("txtMsgSearch").defaultValue = "Search";
document.getElementById("txtMsgSearch").onclick = function () {
    document.getElementById("txtMsgSearch").style.color = "black";
    document.getElementById("txtMsgSearch").value = "";
}
document.getElementById("txtMsgSearch").onblur = function () {
    document.getElementById("txtMsgSearch").style.color = "#777777";
    document.getElementById("txtMsgSearch").value = "Search";
}
document.getElementById("txtMsgSearch").onkeypress = function (e) {
    if (e.which == 10 || e.which == 13) //enter
        document.getElementById("txtMsgSearch").blur();
}

function messageSearch() {
    document.getElementById("txtMsgSearch").style.color = "#777777";
    document.getElementById("txtMsgSearch").value = "Search";
}

//txtReply------
document.getElementById("txtReply").defaultValue = "Write a reply...";
document.getElementById("txtReply").onclick = function () {
    document.getElementById("txtReply").style.color = "black";
    document.getElementById("txtReply").value = "";
}
document.getElementById("txtReply").onblur = function () {
    document.getElementById("txtReply").style.color = "#777777";
    document.getElementById("txtReply").value = "Write a reply...";
}
document.getElementById("txtReply").onkeypress = function (e) {
    if (e.which == 10 || e.which == 13) //enter
        document.getElementById("txtReply").blur();
}

function messageSearch() {
    document.getElementById("txtReply").style.color = "#777777";
    document.getElementById("txtReply").value = "Write a reply...";
}
