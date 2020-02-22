

/* ------------- Modal ------------- */
/* ------------- Code structure from w3schools ------------- */ 
let modal = document.getElementById("rulesModal");
let btnModal = document.getElementById("rulesBtn");
let btnModalClose = document.getElementById("modalBtnClose");
 
btnModal.onclick = function() {
  modal.style.display = "block";
}

btnModalClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* ------------- Game ------------- */
let order = [];
let playerOrder = [];
let flash;
let round;
let score;
let compTurn;
let intervalId;
let power = false;
let win;
let strictButton = false;
let muteButton = false;

const strictToggleBtn = document.getElementById("strictMode");
const sB = document.getElementById("strictBlank");
const sC = document.getElementById("strictCheck");
const muteToggleBtn =  document.getElementById("soundOnOff");
const sOn = document.getElementById("soundOn");
const sOff = document.getElementById("soundOff");
const turnCount = document.getElementById("counterWindow");
const gameField1 = document.querySelector(".game-field-1");
const gameField2 = document.querySelector(".game-field-2");
const gameField3 = document.querySelector(".game-field-3");
const gameField4 = document.querySelector(".game-field-4");
const onToggleBtn = document.getElementById("powerOn");
const onLight = document.getElementById("onOffIcon");
const startButton = document.getElementById("playGame");

strictToggleBtn.addEventListener("click", (event) => {
    if (strictButton == false) {
        strictButton = true;
        sB.style.display = "none";  
        sC.style.display = "inline-block"
    } else {
        strictButton = false;
        sB.style.display = "inline-block"
        sC.style.display = "none"
    }
})

muteToggleBtn.addEventListener("click", (event) => {
    if (muteButton == false) {
        muteButton = true;
        sOn.style.display = "none";  
        sOff.style.display = "inline-block"
    } else {
        muteButton = false;
        sOn.style.display = "inline-block"
        sOff.style.display = "none"
    }
})

onToggleBtn.addEventListener("click", (event) => {
    if (power == false) {
        power = true;
        onLight.style.color = "#FFFFFF"
    } else {
        power = false;
        onLight.style.color = "#232323"
    }
})




