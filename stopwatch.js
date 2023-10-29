var msec = 0;
var sec = 0;
var min = 0;
var hour = 0;

var hrs = document.getElementById("hours");
var mins = document.getElementById("mins");
var secs = document.getElementById("sec");
var microsec = document.getElementById("msec");

var startInterval;
var startFun = 0;

//if number in hrs,minutes or seconds lessthan zero,this function Adds '0' before that values
function zero(num) {   
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function interval() {
  startInterval = setInterval(() => {
    msec++;
    if (msec == 100) {
      msec = 0;
      sec++;
      if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
          min = 0;
          hour++;
        }
      }
    }
    hrs.innerHTML = zero(hour);
    mins.innerHTML = zero(min);
    secs.innerHTML = zero(sec);
    microsec.innerHTML = zero(msec);
  }, 10);
}

function start() {
  startFun++;
  if (startFun == 3) {
    interval();
    document.getElementById("stop").classList.toggle("stop");
    document.getElementById("reset").classList.toggle("reset");
  }

  else if (startFun == 1) {
    interval();
    document.getElementById("stop").classList.toggle("stop");
  }

   else {
    startFun = 1;
  }
}

function stop() {
  clearInterval(startInterval);
  document.getElementById("stop").classList.toggle("stop");
  document.getElementById("reset").classList.toggle("reset");
  startFun = 2;
}

function reset() {
  hrs.innerHTML = "00";
  mins.innerHTML = "00";
  secs.innerHTML = "00";
  microsec.innerHTML = "00";

  msec = 0;
  sec = 0;
  min = 0;
  hour = 0;

  clearInterval(startInterval);
  document.getElementById("reset").classList.toggle("reset");

  startFun = 0;
}
