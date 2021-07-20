let opened=false;
function openMenu() {

    if(opened==false){
        document.getElementById('menu').classList.add("menu");
        opened=true;
    }
    else{
        document.getElementById('menu').classList.remove("menu");
        opened=false;
    }
    
}