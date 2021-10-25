FusionCharts.ready(function () {
  var chartObj = new FusionCharts({
    type: "multilevelpie",
    renderAt: "chart-container",

    width: window.innerWidth > 750 ? "500" : "380",
    height: window.innerWidth > 750 ? "500" : "380",
    dataFormat: "json",
    dataSource: {
      chart: {
        showPlotBorder: "1",
        piefillalpha: "60",
        pieborderthickness: "2",
        hoverfillcolor: "#4FE9DD",
        piebordercolor: "transparent",
        hoverfillcolor: "#4FE9DD",
        numberprefix: "",
        plottooltext: "",
        //Theme
        theme: "fusion",
      },
      category: [
        {
          label: "Skills",
          color: "#4F7EE9",
          value: "100",
          category: [
            {
              label: "Frontend",
              color: "#f8bd19",
              value: "50",
              tooltext: "",
              category: [
                {
                  label: "React",
                  color: "#f8bd19",
                  value: "11.1",
                },
                {
                  label: "React Native",
                  color: "#f8bd19",
                  value: "27.75",
                  tooltext: "2 years of experience",
                },
                {
                  label: "Angular",
                  color: "#f8bd19",
                  value: "9.99",
                },
                {
                  label: "Typescript",
                  color: "#f8bd19",
                  value: "6.66",
                },
              ],
            },
            {
              label: "Backend",
              color: "#33ccff",
              value: "20",
              tooltext: "",
              category: [
                {
                  label: "ExpressJS",
                  color: "#33ccff",
                  value: "20",
                },
                {
                  label: "CakePHP",
                  color: "#33ccff",
                  value: "15",
                },
                {
                  label: "PHP",
                  color: "#33ccff",
                  value: "6.3",
                },
              ],
            },
            {
              label: "Basics",
              color: "#ccff66",
              value: "30",
              category: [
                {
                  label: "Devops",
                  color: "#ccff66",
                  value: "8.1",
                },
                {
                  label: "UX/UI",
                  color: "#ccff66",
                  value: "10.5",
                },
                {
                  label: "DB",
                  color: "#ccff66",
                  value: "11.4",
                },
              ],
            },
          ],
        },
      ],
    },
  });
  chartObj.render();
});

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

function changeContent(active) {
  if(active === "contact"){
    var d = document.getElementById("contact");
    var e = document.getElementById("skills");
    var p = document.getElementById("portfolio");
    var dmenu = document.getElementById("menu-contact");
    var emenu = document.getElementById("menu-skills");
    var pmenu = document.getElementById("menu-portfolio");
    dmenu.className += " active";
    emenu.classList.remove("active");
    pmenu.classList.remove("active");
    e.className += " hidden";
    p.className += " hidden";
    d.classList.remove("hidden");
  }
  else if(active === "skills")  {
    var e = document.getElementById("contact");
    var d = document.getElementById("skills");
    var p = document.getElementById("portfolio");
    var dmenu = document.getElementById("menu-contact");
    var emenu = document.getElementById("menu-skills");
    var pmenu = document.getElementById("menu-portfolio");
    e.className += " hidden";
    d.classList.remove("hidden");
    p.className += " hidden";
    emenu.className += " active";
    dmenu.classList.remove("active");
    pmenu.classList.remove("active");
  }
  else if(active === "portfolio"){
    var e = document.getElementById("contact");
    var d = document.getElementById("skills");
    var p = document.getElementById("portfolio");
    var dmenu = document.getElementById("menu-contact");
    var emenu = document.getElementById("menu-skills");
    var pmenu = document.getElementById("menu-portfolio");
    e.className += " hidden";
    p.classList.remove("hidden");
    d.className += " hidden";
    pmenu.className += " active";
    dmenu.classList.remove("active");
    emenu.classList.remove("active");
    
  }
}