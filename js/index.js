var speed = 121;

$(document).ready(function() {
  var imgCount = $(".img").length;
  for (var i = 1; i <= imgCount; i++) {
    speed = speed * (i / 1.25);
    $("#img-" + i).css({
      "animation-duration": speed + "s",
      "animation-name": "float"
    });
  }
});

var parallax = $("#scene").parallax();

for (var i = 1; i < 6; i++) {
  twinkleLoop(i);
}

function twinkleLoop(i) {
  var duration = Math.random() * 5 + 3;

  duration = duration - (495 - speed) / 100;
  twinkle(i, duration);

  setTimeout(function() {
    twinkleLoop(i);
  }, duration * 1000);
}

function twinkle(id, duration) {
  var top = Math.floor(Math.random() * 85) + 0 + "%";
  var left = Math.floor(Math.random() * 85) + 0 + "%";

  $("#speck" + id).remove();
  $("#specks").append("<div class='speck' id='speck" + id + "'></div>");
  $("#speck" + id).css({
    top: top,
    left: left,
    "animation-duration": duration + "s",
    "animation-timing-function": "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
    "animation-name": "twinkle"
  });
}

var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);