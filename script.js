// criar variaveis para os dois CSSCounterStyleRule(home e guest) e para a contagem

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let newGameEl = document.getElementById("newgame-el");

let count = 0;

// criar funcao para mudar o score de home

//  3 funcões tem que fazer o incremento e alterar o valor do score de home

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
// criar funcao para mudar o score de  guest

// 3 funcões  tem que fazer o incremento e alterar o valor do score de guest
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

// adicionar botão que tem a funcionalidade dar reset no jogo para iniciar nova pontuação

function newGame() {
  homeEl.textContent = 0;
  guestEl.textContent = 0;
}
