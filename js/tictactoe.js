var turn = 0;
var winningCombos = [[[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2],[1,2],[2,2]], [[0,0],[1,1],[2,2]], [[0,0],[0,1],[0,2]], [[2,0],[2,1],[2,2]], [[1,0],[1,1],[1,2]], [[2,0],[1,1],[0,2]]]

var checkCells = function(arr){
	for (var i = 0; i < arr.length; i++){
		var x = arr[i][0];
		var y = arr[i][1];
		if ($("td[data-x='" + x +"'][data-y='" + y +"']").html() != player()) {
			return false;
		}
	}
	return true;
}

var checkWinner = function() {
	for(var i = 0; i < winningCombos.length; i++){
		if (checkCells(winningCombos[i]) == true){
			return true;
		}
	}
	return false;
}

var message = function(winner_message) {
	alert(winner_message);
}

var player = function() {
	if (turn % 2 == 0) {
		return "X";
	} else {
		return "0";
	}
}

var doTurn = function(event) {
	updateState(event);
	if (checkWinner() == true) {
		message("Player " + player() + " Won!");
	}
	turn += 1;
}

var message = function(message) {
}

var updateState = function(event) {
	$(event.target).html(player());
}

var attachListeners = function() {
	$('td').click(function(event) {
		doTurn(event);
	});
}

