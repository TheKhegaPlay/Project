let nav = true;
function displayNav() {
    if (nav == true) {
        document.getElementById("nav").style.width = "70px";
        document.getElementById("nav-span1").style.display = "none";
        document.getElementById("nav-span2").style.display = "none";
        document.getElementById("nav-span3").style.display = "none";
        document.getElementById("nav-span4").style.display = "none";
        document.getElementById("nav-span5").style.display = "none";
        document.getElementById("nav-span5").style.display = "none";
        document.getElementById("arrow").style.transform = "scale(-1, 1)";
        nav = false;
    } else {
        document.getElementById("nav").style.width = "200px";
        document.getElementById("nav-span1").style.display = "unset";
        document.getElementById("nav-span2").style.display = "unset";
        document.getElementById("nav-span3").style.display = "unset";
        document.getElementById("nav-span4").style.display = "unset";
        document.getElementById("nav-span5").style.display = "unset";
        document.getElementById("nav-span5").style.display = "unset";
        document.getElementById("arrow").style.transform = "scale(1, 1)";
        nav = true;
    }

}