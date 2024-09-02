var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;

document.querySelector(".dice1 img").setAttribute("src","images/dice"+random1+".png");
document.querySelector(".dice2 img").setAttribute("src","images/dice"+random2+".png");

if(random1>random2){
    document.querySelector(".container h1").innerHTML = "Player 1 won";
}else if(random1<random2){
    document.querySelector(".container h1").innerHTML = "Player 2 won";
}else{
    document.querySelector(".container h1").innerHTML = "It was a draw";
}
var myButton = document.querySelector("button");

myButton.addEventListener("click",function reload(){ location.reload() });

