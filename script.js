let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameover = false;
//Function to change the turn
function changeTurn() {
  return turn === "X" ? "0" : "X";
}

//Function to check for a Win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      isGameover = true;
      document
        .getElementsByClassName("imgBox")[0]
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};

//Game Logic
let boxes = Array.from(document.getElementsByClassName("box"));
boxes.forEach((element) => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (!isGameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for" + turn;
      }
    }
  });
});

//reset button logic
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxtext");
  boxText.forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
  document
    .getElementsByClassName("imgBox")[0]
    .getElementsByTagName("img")[0].style.width = "0px";
});
