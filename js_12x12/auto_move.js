
var auto_move_flag = false;
var auto_move_time;

function start_auto_move(){
	auto_move_flag = true;
	auto_move();
}

function auto_move(){
	if ( auto_move_flag === false )
		return;
	// 0: up, 1: right, 2:down, 3: left
	var score = GM.score
	var moves = 0;
	for (;;) {
		var score = GM.score
		GM.move(1);
		if (score == GM.score)
			break;
		moves = moves + 1;
	}
	if (moves == 0) {
		var score = GM.score;

		GM.move(2);
		GM.move(1);
		if (score == GM.score) {
			GM.move(0);
			GM.move(1);
			if (score == GM.score)
				GM.move(3);
		}
	}
	if (GM.won || GM.over) {
		stop_auto_move();
		return;
	}
	setTimeout( "auto_move()", auto_move_time );
}

function stop_auto_move(){
	auto_move_flag = false;
}

window.requestAnimationFrame(function(){
	document.getElementById("auto-move-run").addEventListener("click",function(){
		var time = parseInt( document.getElementById("auto-move-input-time").value );
		if ( !isNaN( time ) ){
			auto_move_time = time;
			if ( auto_move_flag === false ){
				start_auto_move();
			}
		}
	});
	document.getElementById("auto-move-stop").addEventListener("click",function(){
		stop_auto_move();
	});
});
