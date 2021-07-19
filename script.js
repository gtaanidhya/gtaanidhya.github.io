
var opened=false;
function openMenu(){

    if(!opened){
        document.getElementById("hamburger").classList.add("menu-animation");
        document.getElementById("menubar").classList.add("showmenu");
        opened=true;
    }
    else{
        document.getElementById("hamburger").classList.remove("menu-animation");
        document.getElementById("menubar").classList.remove("showmenu");
        opened=false;
    }
}
