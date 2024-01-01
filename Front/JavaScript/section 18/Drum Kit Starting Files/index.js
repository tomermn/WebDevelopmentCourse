

var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonPressed = this.innerHTML;
        buttonAnimation(buttonPressed);
        switchEvent(buttonPressed);
    });
}



document.addEventListener("keydown", function(event){
    buttonAnimation(event.key);
    switchEvent(event.key);
})



function playSound(path){
    var sound = new Audio(path);
    sound.play();
}

function buttonAnimation(currKey){
    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}


function switchEvent(event){
    switch(event){
        case "w":
            playSound("sounds/tom-1.mp3")
            break;
        
        case "a":
            playSound("sounds/tom-2.mp3");
            break;

        case "s":
            playSound("sounds/tom-3.mp3");
            break;

        case "d":
            playSound("sounds/tom-4.mp3");
            break;
        
        case "j":
            playSound("sounds/snare.mp3");
            break;

        case "k":
            playSound("sounds/crash.mp3");
            break;

        case "l":
        playSound("sounds/kick-bass.mp3");
        break;

        default:
            console.log("Missing Button");

    }
}