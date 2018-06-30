document.getElementById("open").addEventListener("click", function() {
    document.getElementById("side").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    var x = document.getElementById("side").querySelectorAll("a");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
});
document.getElementById("close").addEventListener("click", function() {
    document.getElementById("side").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    var x = document.getElementById("side").querySelectorAll("a");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
});
var date = new Date();
var n = date.getFullYear();
document.querySelector(".date").innerHTML = n;