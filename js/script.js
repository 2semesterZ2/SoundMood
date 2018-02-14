var soundEffectAudio = document.getElementById('buttonSound');
soundEffectAudio.src = "songs/click.mp3";


// JS file var seconds;

document.getElementById('ready').onclick = function() {
  setTimeout(function() {
  document.getElementById("loadingscreen").classList.add("hidden");
  }, 1000);
  document.getElementById('loadingscreen').classList.add('bounceOutLeft');
  soundEffectAudio.play();
  // animation
  document.getElementById("instructionP").classList.add("zoomIn");
  document.getElementById("ok").classList.add("zoomIn");

};

// first selection round timer
$("#ok").click(function() {
  $('#timer').addClass('timer-quick');
  $('.timer-quick').startTimer();
  console.log('timer works');
});

// second selection round timer
$("#ok2").click(function() {
  $('#timer2').addClass('timer-quick');
  $('.timer-quick').startTimer();
  console.log('timer works');
});

var error;

document.getElementById('ok').onclick = function() {
  setTimeout(function() {
  document.getElementById("instruction1").classList.add("hidden");
  }, 1000);
  document.getElementById('instruction1').classList.add('bounceOutLeft');
  soundEffectAudio.play();
  // after 10 seconds error screen appears
  error = setTimeout(function() {
      setTimeout(function() {
          document.getElementById('SlowEndScreen').classList.add('topLayer');
            }, 300);
    document.getElementById("gallery1").classList.add("bounceOutLeft");
    document.getElementById("SlowEndScreen").classList.add("zoomIn");
  }, 11000);
};

var result = "slow";

var firstRound = document.getElementsByClassName('gallery__img');
console.log(result);

// first round of selections - picture selection
for (var i = 0; i < firstRound.length; i++) {
  firstRound[i].onclick = function(event) {
    var value = event.target.getAttribute('data-value');
    console.log(value);
    result = value;
    console.log(result);
    soundEffectAudio.play();
    // because the user clicked on one of the images the timeOut for error screen gets cleared
    clearTimeout(error);
     document.getElementById("gallery1").classList.add("bounceOutLeft");
     setTimeout(function() {
    document.getElementById("gallery1").classList.add("hidden");
  }, 1000);
    // makes the gifScreen disappear after 10 seconds
    setTimeout(function() {
      // animation
      document.getElementById("instructionP2").classList.add("zoomIn");
      document.getElementById("ok2").classList.add("zoomIn");
    }, 6000);
              setTimeout(function() {
                document.getElementById("gifScreen").classList.add("bounceOutLeft");
              }, 6000);
              setTimeout(function() {
                    document.getElementById("gifScreen").classList.add("hidden");
              }, 7000);
  }
};

document.getElementById('ok2').onclick = function() {
  soundEffectAudio.play();
   clearTimeout(error);
     setTimeout(function() {
    document.getElementById("instruction2").classList.add("hidden");
  }, 1000);
            document.getElementById("instruction2").classList.add("bounceOutLeft");
  // after 10 seconds error screen appears
  error = setTimeout(function() {
      setTimeout(function() {
          document.getElementById('SlowEndScreen').classList.add('topLayer');
            }, 300);
    document.getElementById("gallery2").classList.add("bounceOutLeft");
    document.getElementById("SlowEndScreen").classList.add("zoomIn");
  }, 11000);
};

new Vue({
  el: '#gallery2',
  methods: {
    showResult: function() {
      setTimeout(function() {
    document.getElementById("gallery2").classList.add("hidden");
  }, 1000);
            document.getElementById("gallery2").classList.add("bounceOutLeft");
      var value = event.target.getAttribute('data-value');
      console.log(value);
      // combination of both selections (concatinated)
      result = result + value;
      console.log(result);
      soundEffectAudio.play();
      // result calculation
      if (result == "happyhappy" || result == "happyenergetic" || result == "energetichappy" || result == "energeticenergetic") {
              setTimeout(function() {
        document.getElementById("HappyEndScreen").classList.add("topLayer");
              }, 300);
        console.log(result);
      } else if (result == "sadsad" || result == "sadbored" || result == "boredsad" || result == "boredbored") {
              setTimeout(function() {
        document.getElementById("SadEndScreen").classList.add("topLayer");
              }, 300);
        console.log(result);
      } else {
              setTimeout(function() {
        document.getElementById("SlowEndScreen").classList.add("topLayer");
              }, 300);
        console.log(result);
      }
    }
  }
});

// play and pause buttons
var playButtons = document.getElementsByClassName('endScreen__button--play');
console.log(playButtons);
var pauseButtons = document.getElementsByClassName('endScreen__button--pause');
var audio = document.getElementsByClassName('songs');
console.log(audio);

$(document).ready(function() {
  $(document.getElementsByClassName('endScreen__button--pause')).hide();
  for (var i = 0; i < playButtons.length; i++) {
    playButtons[i].onclick = function(event) {
      var value = $(this).attr('data-value');
      $(document.getElementsByClassName('endScreen__button--play')).hide();
      $(document.getElementsByClassName('endScreen__button--pause')).show();
      if (value == 1) {
        audio[i].play();
      } else {
        audio[i + 2].play();
      }
    }
  }

  for (var i = 0; i < pauseButtons.length; i++) {
    pauseButtons[i].onclick = function(event) {
      var value = $(this).attr('data-value');
      $(document.getElementsByClassName('endScreen__button--pause')).hide();
      $(document.getElementsByClassName('endScreen__button--play')).show();
      if (value == 1) {
        audio[i].pause();
      } else {
        audio[i + 2].pause();
      }
    }
  }
});