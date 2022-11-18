let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let resetEl = document.getElementById("reset-el");
let winnerEl = document.getElementById("winner");
let newGame = document.getElementById("newgame");
let startgame = document.getElementById("startgame")
let pauseGame = document.getElementById("pausegame");
console.log(pauseGame)

let resumeGame = document.getElementById("resumegame")
console.log(resumeGame)
let homeScore = 0;
let guestScore = 0;
let count = 0;

function addhOne() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}

function addhTwo() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}

function addhThree() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}

function addgOne() {
  guestScore += 1;
  guestEl.textContent = guestScore;
}

function addgTwo() {
  guestScore += 2;
  guestEl.textContent = guestScore;
}

function addgThree() {
  guestScore += 3;
  guestEl.textContent = guestScore;
}
function endGame() {
  if (homeScore > guestScore) {
    winnerEl.textContent = "Home Wins!!";
  } else if ((homeScore = guestScore)) {
    winner.textContent = "Draw!!";
  } else {
    winnerEl.textContent = "Guest Wins!!";
  }
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  homeEl.textContent = homeScore;
  guestEl.textContent = guestScore;
  winner.textContent = " ";
}

// !countdown timer

// function startTimer(seconds, container, oncomplete) {
//   var startTime, timer, obj, ms = seconds*1000,
//       display = document.getElementById("countdownTimer");
//   obj = {};
//   obj.resume = function() {
//       startTime = new Date().getTime();
//       timer = setInterval(obj.step,250); // adjust this number to affect granularity
//                           // lower numbers are more accurate, but more CPU-expensive
//   };
//   obj.pause = function() {
//       ms = obj.step();
//       clearInterval(timer);
//   };
//   obj.step = function() {
//       var now = Math.max(0,ms-(new Date().getTime()-startTime)),
//           m = Math.floor(now/60000), s = Math.floor(now/1000)%60;
//       s = (s < 10 ? "0" : "")+s;
//       display.innerHTML = m+":"+s;
//       if( now == 0) {
//           clearInterval(timer);
//           obj.resume = function() {};
//           if( oncomplete) oncomplete();
//       }
//       return now;
//   };
//   obj.resume();
//   return obj;
// }

// // start:
// var timer = startTimer(5*60, "timer", function() {alert("Done!");});
// // pause:
// pauseGame.pause();
// // resume:
// resumeGame.resume();

// !timer 3
// const timer = document.getElementById("countdowntimer");
// let id;
// let value = "00:00";

// function startTimer(m, s) {
//     timer.textContent = m + ":" + s;
//     if (s == 0) {
//         if (m == 0) {
//             return;
//         } else if (m != 0) {
//             m = m - 1;
//             s = 60;
//         }
//     }
// console.log(startTimer())
//     s = s - 1;
//     id = setTimeout(function () {
//         startTimer(m, s)
//     }, 1000);
// }

// function pauseTimer() {
//     value = timer.textContent;
//     clearTimeout(id);
// }

// function resumeTimer() {
//     var t = value.split(":");

//     startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
// }

// startgame.addEventListener("click", function () {
//     startTimer(12, 0);
// }, false);

// pauseGame.addEventListener("click", pauseTimer, false);

// resumeGame.addEventListener("click", resumeTimer, false);






// !countdown 2
// const timer = document.getElementById("countdowntimer");
// let timerInterval;

// startTimer = () => {
//   // First we start by clearing the existing timer, in case of a restart
//   clearInterval(timerInterval);
//   // Then we clear the variables
//   let second = 0,
//     minute = 0,
//     hour = 0;

//   // Next we set a interval every 1000 ms
//   timerInterval = setInterval(function () {
//     // Toggle the odd class every interval
// timer.classList.toggle('odd');

// // ! JavaScript shorthand properties
//     // We set the timer text to include a two digit representation
//     timer.innerHTML =
//       (hour ? hour + ":" : "") +
//       (minute < 10 ? "0" + minute : minute) +
//       ":" +
//       (second < 10 ? "0" + second : second);

//     // Next we add a new second since one second is passed
//     second++;

//     // We check if the second equals 60 "one minute"
//     if (second == 60) {
//       // If so, we add a minute and reset our seconds to 0
//       minute++;
//       second = 0;
//     }

//     // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
//     if (minute == 60) {
//       hour++;
//       minute = 0;
//     }
//   }, 1000);
// };

// function pauseTimer(){
  
// } 


// Add countdown
// add countdown pause button
// add periods
// add player
// Add fouls
// add bonus for fauls
// add button that lets you choose nba team for home and guest
// add timeouts in current period
