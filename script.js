let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let newGameEl = document.getElementById("newgame-el");
let winnerEl = document.getElementById("winner");
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

function winner() {
  if (homeScore < guestScore) {
    winner.textContent = "winner";
  }
}


function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeEl.textContent = homeScore;
  guestEl.textContent = guestScore;
}
