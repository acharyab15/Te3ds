/*
 * Te3ds
 * by Bipeen Acharya, Olivier Mahame, Suraj Bajracharya
 * Submitted to: Dr. Joshua Stough
 * Date: April 9th, 2014
 */

function makeArrayOf(value, length) {
	var arr = [], i = length;
	while (i>0) {
		arr.push(value);
		i -=1;
	}
	return arr;
}

var Z_LEVELS = makeArrayOf(0,20);

function levelCounter(cube,axis){
	var index;
	switch (axis){
	case "z":
	case "Z":
		index = cube.pos[2];      
		Z_LEVELS[index] +=1;

		break;

	}

}

function updateLevel(axis){
	for (var i=LAST_PIECE_START_INDEX; i<table.length;i++){
		levelCounter(table[i],axis)	;
	}	
	removeLine();

}

function removeLine(){
//	console.log(Z_LEVELS);
	for (var i=Z_LEVELS.length-1; i>=0 ; i--){
		if(Z_LEVELS[i] ==100){
			Z_LEVELS.splice(i,1);
			Z_LEVELS.push(0);

			cubesPoints = [];
			cubesNormals = [];
			var newTable = [];
			for (var j=0; j< table.length; j++){
				if(table[j].pos[2] == i){       
					// do nothing
				}else if(table[j].pos[2] >i){

					table[j].ctm = mult(table[j].ctm,translate(0.0,0.0,-TRAN_AMT));
					table[j].pos[2] -= TRAN_AMT;
					newTable.push(table[j]);
					cubesPoints = cubesPoints.concat(TETRIS_CUBE.vertices);
					cubesNormals = cubesNormals.concat(TETRIS_CUBE.normals)
				}else{
					newTable.push(table[j]);
					cubesPoints = cubesPoints.concat(TETRIS_CUBE.vertices);
					cubesNormals = cubesNormals.concat(TETRIS_CUBE.normals)	 

				}

			}
			LAST_PIECE_START_INDEX -= 100;
			SCORE +=100;
			if (TIMER >= 10) {
				LEVEL += 1;
				TIMER -= 99;
				$('#level').text(LEVEL);
				clearInterval(interval);
				interval = setInterval(function(){dropButton(); },TIMER);
			}
			table = newTable;
			bufferData();

		}



	}
}








