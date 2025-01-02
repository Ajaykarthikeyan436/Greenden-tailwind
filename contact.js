//Selecting Side Navbar,Menu Icon
var sidenav = document.getElementById("side_nav")
var menu = document.getElementById("menuicon")

menu.addEventListener("click", function () {
    sidenav.style.right = 0;
})

//Selecting Close Navbar
var closenav = document.getElementById("close_nav")

closenav.addEventListener("click",function(){
    sidenav.style.right ="-50%";
})