console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn1 = new Audio("ting1.mp3");
let audioTurn2 = new Audio("ting2.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//Function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let boxcolor = document.getElementsByClassName("box");
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
        boxtext[e[0]].innerText + " Win!";
      gameover.play();
      boxcolor[e[0]].style.backgroundColor = "cyan";
      boxcolor[e[1]].style.backgroundColor = "cyan";
      boxcolor[e[2]].style.backgroundColor = "cyan";
      setTimeout(function () {
        boxcolor[e[0]].style.backgroundColor = "white";
        boxcolor[e[1]].style.backgroundColor = "white";
        boxcolor[e[2]].style.backgroundColor = "white";
      }, 1500);

      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      let temp = document.querySelectorAll(".box");
      Array.from(temp).forEach((element) => {
        element.classList.add("no-cursor");
      });
    }
  });
};

//Game Logic
let count = 1;
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      count++;
      if (count % 2 == 0) {
        audioTurn1.play();
      } else {
        audioTurn2.play();
      }
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

//Add onclick listner to reset button
reset.addEventListener("click", () => {
  let temp = document.querySelectorAll(".box");
  Array.from(temp).forEach((element) => {
    element.classList.remove("no-cursor");
  });
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document
    .querySelector(".imgbox")
    .getElementsByTagName("img")[0].style.width = 0;
  count = 1;
  document.querySelector(".line").style.width = 0;

  //Chagning color to white again
  removeColor();
});
