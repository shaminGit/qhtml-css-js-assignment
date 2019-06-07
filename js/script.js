var counter;
var x = document.getElementById("alarm");
var S, H, M, AMPM;
var snooze, hideDigital, sf = 0;
//this code is to set the initial timings

function setInitials() {
  date = new Date();
  let secondsInDeg = date.getSeconds() * 6;
  let minutesInDeg = date.getMinutes() * 6 + secondsInDeg / 60;
  let hoursInDeg = 180 + (date.getHours() % 12) * 30 + minutesInDeg / 15;
  let ampm = date.getHours() >= 12 ? "pm" : "am";

  document.querySelector(".box.seconds").style.transform =
    "rotate(" + (180 + secondsInDeg) + "deg)";
  document.querySelector(".box.minutes").style.transform =
    "rotate(" + (180 + minutesInDeg) + "deg)";
  document.querySelector(".box.hours").style.transform =
    "rotate(" + hoursInDeg + "deg)";
  document.getElementById("hh").value = "";
  document.getElementById("mm").value = "";
  document.getElementById("ss").value = "";
  document.getElementById("ampm").value = "";
  document.getElementById("ring").style.opacity = 0;
}

function updateTime() {
  let date = new Date();
  let ampm = date.getHours() >= 12 ? "pm" : "am";
  H = date.getHours();
  M = document.getElementById("m1").innerText = date.getMinutes();
  S = document.getElementById("s1").innerText = date.getSeconds();
  AMPM = document.getElementById("ampm1").innerText = ampm;
  if (sf == 1 && H > 12) {
    H = H - 12;
    document.getElementById("h1").innerText = H;
  }
  else if (sf == 1 && H < 12) {
    document.getElementById("h1").innerText = H;
  }
  else
    document.getElementById("h1").innerText = H;
  setTimeout("updateTime()", 100);
}

function getAlarm() {
  let hh = document.getElementById("hh").value;
  let mm = document.getElementById("mm").value;
  let ss = document.getElementById("ss").value;
  let _ampm = document.getElementById("ampm").value;
  setAlarm(hh, mm, ss, _ampm);
}

function setAlarm(h, m, s, ampm) {

  let date, totalSec, currentH, currentM, currentS, leftS, leftM, leftH;
  currentH = H;
  currentM = M;
  currentS = S;
  if (currentH > 12) currentH = currentH - 12;

  if (currentS > s) {
    m = m - 1;
    leftS = s + 60 - currentS;
  }
  else leftS = s - currentS;
  if (currentM > m) {
    h = h - 1;
    leftM = m + 60 - currentM;
  }
  else leftM = m - currentM;
  if (currentH > h) {
    leftH = h + 12 - currentH;
  }
  else leftH = h - currentH;
  totalSec = leftH * 3600 + leftM * 60 + leftS;
  counter = totalSec;
  runCounter();
}
function runCounter() {
  counter = counter - 1;
  document.getElementById("counter").innerText = counter;
  if (counter == 0) playAlarm();
  if (snooze == 1) {
    return;
  }
  setTimeout("runCounter()", 1000);
}

function playAlarm() {
  document.getElementById("ring").style.opacity = 1;
  x.play();
}

function pauseAudio() {
  snooze = 1;
  x.pause();
}

function runDigital() {
  // let digital = document.getElementById("digital");
  // let analog  = document.getElementsByClassName(" clock center").
  document.getElementById("hd").innerText = H;
  document.getElementById("md").innerText = M;
  document.getElementById("sd").innerText = S;
  document.getElementById("ampmd").innerText = AMPM;
  // if (x.style.display === "none") {
  //   x.style.display = "flex";
  //   x.style.flexDirection = "row";
  // } else {
  //   x.style.display = "none";
  // }
  setTimeout("runDigital()", 100);
}
function hideDigital() {
  document.getElementById("digital").style.opacity = 0;
}

function switchClock() {
  let hideDigital = document.getElementById("digital");
  //document.getElementById("digital").style.opacity = 1;
  var elements = document.getElementsByClassName("clock");

  if (hideDigital.style.opacity == 0) {
    hideDigital.style.opacity = 1;
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 0;
    }
  }
  else {
    hideDigital.style.opacity = 0;
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 1;
    }
  }
}
function switchFormat() {
  if (sf == 0)
    sf = 1;
  else
    sf = 0;
}

setInitials();
updateTime();
runDigital();


