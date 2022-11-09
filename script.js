let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let newGameEl = document.getElementById("newgame-el");

let count = 0;

function addhOne() {
  count += 1;
  homeEl.textContent = count;
}

function addhTwo() {
  count += 2;
  homeEl.textContent = count;
}

function addhThree() {
  count += 3;
  homeEl.textContent = count;
}

function addgOne() {
  count += 1;
  guestEl.textContent = count;
}

function addgTwo() {
  count += 2;
  guestEl.textContent = count;
}

function addgThree() {
  count += 3;
  guestEl.textContent = count;
}

function newGame() {
  homeEl.textContent = 0;
  guestEl.textContent = 0;
}
