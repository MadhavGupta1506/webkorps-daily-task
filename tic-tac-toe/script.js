let player, board, gameOver;

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
    
    const winCells = checkWin(i, j, curr);
  if (winCells) {
    highlightWin(winCells);

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
  
    return [[i,0], [i,1], [i,2]];
  } else if (
    board[0][j] === player &&
    board[1][j] === player &&
    board[2][j] === player
  ) {
    return [[0,j], [1,j], [2,j]];
  } else if (
    i === j &&
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return [[0,0], [1,1], [2,2]];
  } else if (
    i + j === 2 &&
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return [[0,2], [1,1], [2,0]];
  }

  return false;
}

function highlightWin(cells) {
  cells.forEach(([r, c]) => {
    $(`.row${r} > .col${c}`).css("background", "#877663");
  });
}
