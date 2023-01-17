let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let resetEl = document.getElementById("reset-el")
let winnerEl = document.getElementById("winner")
let newGame = document.getElementById("newgame")
let startgame = document.getElementById("startgame")
let pauseGame = document.getElementById("pausegame")
console.log(pauseGame)

let resumeGame = document.getElementById("resumegame")
console.log(resumeGame)
let homeScore = 0
let guestScore = 0
let count = 0

function addhOne() {
  homeScore += 1
  homeEl.textContent = homeScore
}

function addhTwo() {
  homeScore += 2
  homeEl.textContent = homeScore
}

function addhThree() {
  homeScore += 3
  homeEl.textContent = homeScore
}

function addgOne() {
  guestScore += 1
  guestEl.textContent = guestScore
}

function addgTwo() {
  guestScore += 2
  guestEl.textContent = guestScore
}

function addgThree() {
  guestScore += 3
  guestEl.textContent = guestScore
}

function endGame() {
  if (homeScore > guestScore) {
    winnerEl.textContent = "Home Wins!!"
  } else if (homeScore < guestScore) {
    winnerEl.textContent = "Guest Wins!!"
  } else {
    winner.textContent = "Draw!!"
  }
}

function reset() {
  homeScore = 0
  guestScore = 0
  homeEl.textContent = homeScore
  guestEl.textContent = guestScore
  winner.textContent = " "
}
