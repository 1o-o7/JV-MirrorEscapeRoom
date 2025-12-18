var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");

var s1 = document.getElementById("symbol1");
var s2 = document.getElementById("symbol2");
var s3 = document.getElementById("symbol3");
var s4 = document.getElementById("symbol4");

var d1 = document.getElementById("div1");
var d2 = document.getElementById("div2");
var d3 = document.getElementById("div3");
var d4 = document.getElementById("div4");

var x = 0;
var click = 0;

const symbols = [
  "images/bullseyee.png",
  "images/joker.png",
  "images/circus.png",
  "images/partyHat.png",
  "images/balloon.png",
  "images/skull.png",
];
read();

function read() {
  setTimeout(() => {
    document.getElementById("closeBtn").style.display = "flex";
  }, 5000);
}

function playLocked() {
  document.getElementById("lockedBox").play();
  document.getElementById("lockedBox").volume = 1.0;
}

function playMirror() {
  document.getElementById("mirror").pause(); // stop previous audio
  document.getElementById("mirror").currentTime = 0;
  document.getElementById("mirror").play();
  document.getElementById("mirror").volume = 1.0;
}
function playSpooky() {
  document.getElementById("spooky").play();
  document.getElementById("spooky").volume = 0.5;
}
function getKey() {
  document.getElementById("key").style.display = "flex";
  document.getElementById("lock").style.display = "none";
}

function finalEscape() {
  window.location.href = "https://1o-o7.github.io/FinalDecisionRoom-JV/";
}

// Modals
function showElement(ID) {
  document.getElementById(ID).style.display = "flex";
}
function hideElement(ID) {
  document.getElementById(ID).style.display = "none";
}

function changeSymbols(elem) {
  console.log(x);
  elem.src = symbols[x];
  x++;
  if (x == 6) {
    x = 0;
  }
}

function checkSymbols() {
  if (
    s1.src.includes("circus") &&
    s2.src.includes("bullseyee") &&
    s3.src.includes("joker") &&
    s4.src.includes("balloon")
  ) {
    console.log("unlocked");
    s1.removeAttribute("onclick");
    s2.removeAttribute("onclick");
    s3.removeAttribute("onclick");
    s4.removeAttribute("onclick");
    d1.classList.remove("clickk");
    d2.classList.remove("clickk");
    d3.classList.remove("clickk");
    d4.classList.remove("clickk");
    getKey();
  } else {
    alert("The order is incorrect. Try again.");
    console.log("locked");
  }
}



