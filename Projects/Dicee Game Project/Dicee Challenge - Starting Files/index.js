var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 =  Math.floor(Math.random() * 6);
var imgArr = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

var player1Img = imgArr[randomNumber1];
var player2Img = imgArr[randomNumber2];
document.querySelector(".img1").src = player1Img;
document.querySelector(".img2").src = player2Img;

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