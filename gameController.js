/*
 * Te3ds
 * by Bipeen Acharya, Olivier Mahame, Suraj Bajracharya
 * Submitted to: Dr. Joshua Stough
 * Date: April 9th, 2014
 */

var TIMER = 1000;
var IS_PLAYING = false;
var START = false;
var nextShape = Math.floor(Math.random()*5);
var shapeNames =["C","L","I","T","S"];
var SCORE = 0;
var LEVEL = 1;
var IS_GAME_OVER = false;


var interval = setInterval(function(){dropButton(); },TIMER);



function addRandomShape(){
	var index = nextShape;
	nextShape= Math.floor(Math.random()*5);
	if (IS_PLAYING){    
		addShape(shapeNames[index],false);
//		addShape("I", false); 					//debug mode
		$('.shape').hide();
		$('#'+shapeNames[nextShape]).show();
		$('#score').text(SCORE);
		lastBlockProjection();



	}
}

function startGame(){
	playMusic();
	START = true;
	IS_PLAYING = true;	
	addRandomShape();

}


function pauseGame(){
	$('.webglGame').hide();
	$('.introImage').show();
	$('.gameOverImage').hide();

}

function showGame(){
	$('.webglGame').show();
	$('.introImage').hide();   
	$('.gameOverImage').hide();
	if(IS_GAME_OVER){
		location.reload();	
	}




}

function gameOver(){
	pauseMusic()
	$('.webglGame').hide();
	$('.introImage').hide();   
	$('.gameOverImage').show();
	IS_PLAYING = false;
	IS_GAME_OVER = true;

}

