let player = 0;
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
let gameOver = false;

function startGame(){
    $("table").html("")
    player = 0;
    board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
gameOver = false;
    for (let i = 0; i < 3; i++) {
        $("table").append(`<tr class=row${i}>${rows(i)}</tr>`);
    }
}   
startGame();

function rows(i) {
  let tds = "";
  for (let j = 0; j < 3; j++) {
    tds += `$(.row${i}).append(<td class=col${j}><button class="boardBtn" onclick="playMove(${i},${j})" ></button></td>)`;
  }
  return tds;
}

function move(i,j,curr){
    let val = player == 1 ? "X" : "O";
    board[i][j] = curr;
    $(`.row${i} > .col${j}`).html(val);
    return;
}
function playMove(i, j) {
    if (gameOver) {
        return;
    }
    let curr = player;
    move(i,j,curr);
  if (checkWin(i, j, curr)) {
    gameOver=true;
    setTimeout(() => {
    alert(`Player ${curr} wins!!`);
  }, 0);
    return;
  }
  player ^= 1;
}

function checkWin(i, j, player) {
  
  if (
    board[i][0] === player &&
    board[i][1] === player &&
    board[i][2] === player
  ) {
  
    return true;
  } else if (
    board[0][j] === player &&
    board[1][j] === player &&
    board[2][j] === player
  ) {
    return true;
  } else if (
    i === j &&
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  } else if (
    i + j === 2 &&
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }

  return false;
}
