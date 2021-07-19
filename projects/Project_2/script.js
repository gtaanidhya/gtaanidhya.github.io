var opened=false

function openMenu(){
    if(opened==false){
        document.getElementById("menu-bar").style.height="50px";
        document.getElementById("scroll").style.transform="rotateX(180deg)"
        opened=true
    }
    else{
        document.getElementById("menu-bar").style.height="0px";
        document.getElementById("scroll").style.transform="rotateX(360deg)"
        opened=false
    }
    
}

var navbar= document.getElementById('navbar');
var scrolled=false
window.onscroll=function(){
    if(window.pageYOffset>100){
        navbar.classList.remove('top');
        if(!scrolled){
            navbar.style.transform="translateY(-100px)";
        }
        setTimeout(function(){
            navbar.style.transform="translateY(0px)";
            scrolled=true;
        },200);
    }

    else{
        navbar.classList.add('top');
        scrolled=false;
    }
}

// smooth scrolling

$('#navbar a, .btn').on('click',function (e){
    if(this.hash!== ''){
        e.preventDefault();
        var hash=this.hash;
        $('html, body').animate(
            {
                scrollTop:$(hash).offset().top-150,
            },
            800
        );
    }
});