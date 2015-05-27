var turn = 0;
var winningCombos = [[[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2],[1,2],[2,2]], [[0,0],[1,1],[2,2]], [[0,0],[0,1],[0,2]], [[2,0],[2,1],[2,2]], [[1,0],[1,1],[1,2]], [[2,0],[1,1],[0,2]]];
var xPlayer = [], oPlayer = [];

var checkWinner = function(htmlData) {
  var currentPlayer;
  if(player() === "O"){
    oPlayer.push([$(htmlData).data("x"),$(htmlData).data("y")])
    currentPlayer = oPlayer
  } else{
    xPlayer.push([$(htmlData).data("x"),$(htmlData).data("y")])
    currentPlayer = xPlayer
  };

  for(var i = 0; i < winningCombos.length; i++){
    var winning = [];
    if(includes(winningCombos[i], currentPlayer[currentPlayer.length-1])){
      if(currentPlayer.length >= 3){

        for(var x = 0; x < currentPlayer.length; x++){
          if(includes(winningCombos[i], currentPlayer[x])){
            winning.push(currentPlayer[x]);
          }
        }
      }
    }
    if(winning.length === 3){
      return true
    };
  }
  return false
}

var player = function() {
  if (turn % 2 === 0){
    return "X"
  } else{
    return "O"
  }
};

var doTurn = function(event){
  updateState(event);
  if(checkWinner(event)){
    message("Player "+ player() + " Won!")
    return resetBoard();
  };
  if(turn === 9){
    }
  turn ++;
}

var message = function(message) {
  $("#message").html(message)
}

var updateState = function(event) {
  $(event).html(player);
}

var attachListeners = function() {
  $("td").click(function(){
    doTurn(this);
    if(turn == 9){
      message("Tie game")
      return resetBoard()
    }
  });
}

function includes(winningArray, playerArray) {
  for(var i = 0 ; i < winningArray.length; i++){
    if(winningArray[i][0] === playerArray[0] && winningArray[i][1] === playerArray[1]){
      return true
    }
  }
  return false
};

function resetBoard(){
turn = 0;
xPlayer = []; oPlayer = [];
winning = [];
$("tr td").html("");
};
