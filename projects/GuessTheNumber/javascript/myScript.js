var x= Math.floor(Math.random()*5+1);
var i = 1;
var again = false;

function playAgain(){
    document.getElementById("submit").innerHTML="Play Again"
    document.getElementById("submit").onclick=function(){
        i=1;
        x= Math.floor(Math.random()*5+1);
        document.getElementById("submit").innerHTML="Submit";
        document.getElementById("chanceLeft").innerHTML=""
        document.getElementById("submit").onclick=function(){
            gamePlay();
        } 
    }
}

function gamePlay(){
    if(i <= 3){
        var y=document.getElementById("numberselect").value;
        if(x==y){
            document.getElementById("chanceLeft").innerHTML="You Have won the Game";
            playAgain();    
        }
        else{
            var z = 3-i;
            document.getElementById("chanceLeft").innerHTML= z + " chance left";
            if(z==0){
                playAgain();
            }
        }
        i++;
    }
}


document.getElementById("submit").onclick=function(){
    gamePlay();
}