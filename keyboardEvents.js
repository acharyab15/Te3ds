/*
 * Te3ds
 * by Bipeen Acharya, Olivier Mahame, Suraj Bajracharya
 * Submitted to: Dr. Joshua Stough
 * Date: April 9th, 2014
 */

var initKeyboardEvents = function(){
	document.onkeypress = handleKeyboardEvents;

}

function handleKeyboardEvents(event){
	switch (event.charCode){

	case "w".charCodeAt(0):
	case "W".charCodeAt(0):
		//  move last piece towards red wall
		moveCurrentPieceTowardRedWall();
	break;
	case "a".charCodeAt(0):
	case "A".charCodeAt(0):
		// move piece towards yellow wall
		moveCurrentPieceTowardYellowWall();
	break;
	case "s".charCodeAt(0):
	case "S".charCodeAt(0):
		// move piece towards blue wall
		moveCurrentPieceTowardBlueWall();
	break;
	case "d".charCodeAt(0):
	case "D".charCodeAt(0):
		// move piece towards green wall
		moveCurrentPieceTowardGreenWall();
	break;
	case "j".charCodeAt(0):
	case "J".charCodeAt(0):
		// rotate camera left
		rotateCameraLeft();
	break;
	case "l".charCodeAt(0):
	case "L".charCodeAt(0):
		// rotate camera right
		rotateCameraRight();
	break;
	case "i".charCodeAt(0):
	case "I".charCodeAt(0):
		// rotate camera up
		rotateCameraUp();
	break;
	case "k".charCodeAt(0):
	case "K".charCodeAt(0):
		// rotate camera down
		rotateCameraDown();
	break;
	case "r".charCodeAt(0):
	case "R".charCodeAt(0):
		// resetCamera
		resetCamera();
	break;

	case "x".charCodeAt(0):
		rotateAboutAxis(90, [1,0,0]);
	break;
	case "X".charCodeAt(0):
		rotateAboutAxis(-90, [1,0,0]);
	break;

	case "c".charCodeAt(0):
		rotateAboutAxis(90, [0,1,0]);
	break;
	case "C".charCodeAt(0):
		rotateAboutAxis(-90, [0,1,0]);
	break;

	case "z".charCodeAt(0):
		rotateAboutAxis(90, [0,0,1]);
	break;
	case "Z".charCodeAt(0):
		rotateAboutAxis(-90, [0,0,1]);
	break;

	case 32:
		dropButton();
		break;
	case 0: 		// Enter button for UBUNTU
	case 13: 		// Enter button for MAC
		if(!START){
			startGame();
			showGame();
		}
		else if(!IS_PLAYING){
			IS_PLAYING= true;
			showGame();
			if(IS_MUSIC_PLAYING){
				playMusic();
				IS_MUSIC_PLAYING = true;
			}

		}else{
			IS_PLAYING= false;
			pauseGame();
			if(IS_MUSIC_PLAYING){
				pauseMusic();
				IS_MUSIC_PLAYING = true;
			}
		}

		break;


	}
	lastBlockProjection();

}
