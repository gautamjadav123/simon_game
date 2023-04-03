var buttoncolour = ["red","blue","green","yellow"]
var userclickpattern = [];

var gamepattern =[];



var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextsequnce();
    
    started = true;
  }
});

$("button").click(function(){
    // var buttoninnerhtml = this.innerHTML;
    var userchoosencolour =$(this).attr("id");
    userclickpattern.push(userchoosencolour);

    animatepressed(userchoosencolour);
    playsound(userchoosencolour);

    checkanswer(userclickpattern.length-1);


});

function checkanswer(currentLevel) {
  if (gamepattern[currentLevel] === userclickpattern[currentLevel]) {
    if (userclickpattern.length === gamepattern.length){
      setTimeout(function () {
        nextsequnce();
      }, 1000);
    }
  } else {
    playsound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    
    startOver();
  }
}
function nextsequnce() {
    userclickpattern = [];
    level++;
    $("#level-title").text("level "+level);
    var randomnumber = Math.floor(Math.random()*4)+1;
    var randomchoosencolour = buttoncolour[randomnumber];

    gamepattern.push(randomchoosencolour);

  $("#" + randomchoosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomchoosencolour);
}


// var randomchoosencolour = buttoncolour[nextsequnce];

// gamepattern.push(randomchoosencolour);



// console.log(userclickpattern);

function animatepressed(currentcolor) {
    $("#"+ currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentcolor).removeClass("pressed");
    },100);
}

function playsound(name) {
    var audio = new Audio("sound/"+name+".mp3");
    audio.play();
}







function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}