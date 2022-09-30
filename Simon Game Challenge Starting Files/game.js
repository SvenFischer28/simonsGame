
var buttonsColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonsColour[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);



}

$(".btn").click(function () {
    var userChosenColor;
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
})
console.log(userClickedPattern);




