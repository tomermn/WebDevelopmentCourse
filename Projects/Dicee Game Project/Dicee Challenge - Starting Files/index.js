var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

var player1Img = "./images/dice" + randomNumber1 + ".png";
var player2Img = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").src=player1Img;
document.querySelector(".img2").src=player2Img;

var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1 wins";
}

else if (randomNumber2 > randomNumber1){
    heading.innerHTML = "Player 2 wins";
}

else{
    heading.innerHTML = "Draw";
}