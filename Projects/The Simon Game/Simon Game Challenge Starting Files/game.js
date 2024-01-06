var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var isGameStarted = false;
var level = 0;


$(document).on("keydown", function(e){

    if (!isGameStarted){

        isGameStarted = true;

        nextSequence();
        
    }
})

$(".btn").click(function(){
    if (isGameStarted){
        var userChosenColour = $(this).attr('id');
        userClickedPattern.push(userChosenColour);
        
        playButtonSound(userChosenColour);
        animatePress(userChosenColour);
    
        checkAnswer(userClickedPattern.length - 1);
    }
    
})

function nextSequence() {
    level++;
    $("#level-title").html("Level " + level);
    var randomNumber = Math.floor(Math.random() * buttonColours.length);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    var chosenButton = $("#" + randomChosenColour);
    chosenButton.fadeOut(100).fadeIn(100);
    playButtonSound(chosenButton.attr('id'));
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            userClickedPattern = [];
            setTimeout(nextSequence, 1000);
            
        }
    }

    else if (isGameStarted){
        handleWrongPress();

    }
}

function playButtonSound(name) {
    
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    console.log((currentColour));
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {$("#" + currentColour).removeClass('pressed');}, 100);
}

function handleWrongPress() {
    console.log("wrong");
    playButtonSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {$("body").removeClass("game-over");}, 200);
    $("#" + "level-title").html("Game Over, Press Any Key to Restart");
    startOver();
}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    isGameStarted = false;
    level = 0;
}