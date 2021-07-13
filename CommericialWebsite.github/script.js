let opened=false;
function openMenu() {

    if(opened==false){
        document.getElementById('menu').style.width="40%";
        opened=true;
    }
    else{
        document.getElementById('menu').style.width="0";
        opened=false;
    }
    
}