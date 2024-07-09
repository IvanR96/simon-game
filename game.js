let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

    $("btn").click("click", function(){
        let userChosenColor = $(this).attr("id");

        userChosenColor.push(userClickedPattern);

        playSound(userChosenColour);

    });
}

function playSound(name){
    let audio = new Audio(name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass(".pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
nextSequence();