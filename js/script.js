//this code is to set the initial timings

function setInitials() {
  let date = new Date(); //create an object date from Date constructor
  let secondsInDeg = date.getSeconds() * 6; // call the method getSeconds() from date object and convert into degrees
  let minutesInDeg = date.getMinutes() * 6 + secondsInDeg / 60; // call the getMinutes() and add fractional seconds and convert into degrees
  let hoursInDeg = 180 + (date.getHours() % 12) * 30 + minutesInDeg / 15; //call getHOurs() method and add fractional hours and convert into degrees
  let ampm = date.getHours() >= 12 ? "pm" : "am";

  document.querySelector(".box.seconds").style.transform =
    "rotate(" + (180 + secondsInDeg) + "deg)";
  document.querySelector(".box.minutes").style.transform =
    "rotate(" + (180 + minutesInDeg) + "deg)";
  document.querySelector(".box.hours").style.transform =
    "rotate(" + hoursInDeg + "deg)";
  document.getElementById("h").value = date.getHours();
  document.getElementById("m").value = date.getMinutes();
  document.getElementById("s").value = date.getSeconds();
  document.getElementById("_ampm").value = ampm;
}
setInitials();
