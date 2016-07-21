/*
 * Te3ds
 * by Bipeen Acharya, Olivier Mahame, Suraj Bajracharya
 * Submitted to: Dr. Joshua Stough
 * Date: April 9th, 2014
 */

var object = function(objType,objID,objSize){

	return {
		type:	objType,
		id:		objID,
		size:	objSize,
		ctm:	mat4(),
		pos: 	vec3(),
		forPiece: "",
		materialAmbient:	vec4( 1.0, 0.0, 1.0, 1.0 ),
		materialDiffuse:	vec4( 1.0, 0.8, 0.0, 1.0 ),
		materialSpecular:	vec4( 1.0, 0.8, 0.0, 1.0 ),
		materialShininess:	100.0
	}
}


var drawObjects = function(){
	var start =0;
	// draw the grid( game container)
	for (var i = 0; i < gridTable.length; i++){

		var ap = mult(lightAmbient, gridTable[i].materialAmbient);
		var dp = mult(lightDiffuse, gridTable[i].materialDiffuse);
		var sp = mult(lightSpecular, gridTable[i].materialSpecular);

		gl.uniform4fv(ambientProductLoc,flatten(ap) );
		gl.uniform4fv(diffuseProductLoc,flatten(dp) );
		gl.uniform4fv( specularProductLoc,flatten(sp) );

		gl.uniform1f(shininessLoc,gridTable[i].materialShininess );
		gl.uniformMatrix4fv(ctmLoc, false, flatten(gridTable[i].ctm) );
		//draw square
		gl.drawArrays( gl.LINE_LOOP, start, gridTable[i].size);
		start += gridTable[i].size;
	}

	// draw  the next block in the game
	for (var i = 0; i < nextTable.length; i++){
		var ap = mult(lightAmbient, nextTable[i].materialAmbient);
		var dp = mult(lightDiffuse, nextTable[i].materialDiffuse);
		var sp = mult(lightSpecular, nextTable[i].materialSpecular);

		gl.uniform4fv(ambientProductLoc,flatten(ap) );
		gl.uniform4fv(diffuseProductLoc,flatten(dp) );
		gl.uniform4fv( specularProductLoc,flatten(sp) );

		gl.uniform1f(shininessLoc,nextTable[i].materialShininess );

		gl.uniformMatrix4fv(ctmLoc, false, flatten(nextTable[i].ctm) );

		gl.uniformMatrix4fv( gl.getUniformLocation(program,
		"modelViewMatrix"), false, flatten(modelViewInit) );




		// fill the object with it's color
		gl.drawArrays( gl.TRIANGLES, start, nextTable[i].size);
		// draw the black border color for each piece component cube
		var tempColorVariable = nextTable[i].materialDiffuse;
		var blackLine = vec4(0.0, 0.0, 0.0, 1.0);
		gl.uniform4fv(diffuseProductLoc,flatten(blackLine) );
		gl.uniform4fv( specularProductLoc,flatten(blackLine) );
		gl.drawArrays(gl.LINE_LOOP, start, 15);
		gl.drawArrays(gl.LINE_LOOP, start + 15, 5);
		gl.drawArrays(gl.LINES, start + 21, 2);
		gl.drawArrays(gl.LINES, start + 24, 2);
		gl.drawArrays(gl.LINES, start + 27, 2);
		gl.drawArrays(gl.LINE_LOOP, start + 29, 5);
		gl.drawArrays(gl.LINES, start + 33, 3);


		start += nextTable[i].size;
	}

	// draw cubes in the game

	for (var i = 0; i < table.length; i++){

		var ap = mult(lightAmbient, table[i].materialAmbient);
		var dp = mult(lightDiffuse, table[i].materialDiffuse);
		var sp = mult(lightSpecular, table[i].materialSpecular);

		gl.uniform4fv(ambientProductLoc,flatten(ap) );
		gl.uniform4fv(diffuseProductLoc,flatten(dp) );
		gl.uniform4fv( specularProductLoc,flatten(sp) );

		gl.uniform1f(shininessLoc,table[i].materialShininess );
		gl.uniformMatrix4fv(ctmLoc, false, flatten(table[i].ctm) );

		// fill the object with it's color
		gl.drawArrays( gl.TRIANGLES, start, table[i].size);

		// draw the black border color for each piece component cube
		var tempColorVariable = table[i].materialDiffuse;
		var blackLine = vec4(0.0, 0.0, 0.0, 1.0);
		gl.uniform4fv(diffuseProductLoc,flatten(blackLine) );
		gl.uniform4fv( specularProductLoc,flatten(blackLine) );
		gl.drawArrays(gl.LINE_LOOP, start, 15);
		gl.drawArrays(gl.LINE_LOOP, start + 15, 5);
		gl.drawArrays(gl.LINES, start + 21, 2);
		gl.drawArrays(gl.LINES, start + 24, 2);
		gl.drawArrays(gl.LINES, start + 27, 2);
		gl.drawArrays(gl.LINE_LOOP, start + 29, 5);
		gl.drawArrays(gl.LINES, start + 33, 3);


		start += table[i].size;
	}

	// draw the grid( game container)
	for (var i = 0; i < projectionTable.length; i++){

		var ap = mult(lightAmbient, projectionTable[i].materialAmbient);
		var dp = mult(lightDiffuse, projectionTable[i].materialDiffuse);
		var sp = mult(lightSpecular, projectionTable[i].materialSpecular);

		gl.uniform4fv(ambientProductLoc,flatten(ap) );
		gl.uniform4fv(diffuseProductLoc,flatten(dp) );
		gl.uniform4fv( specularProductLoc,flatten(sp) );

		gl.uniform1f(shininessLoc,projectionTable[i].materialShininess );
		gl.uniformMatrix4fv(ctmLoc, false, flatten(projectionTable[i].ctm) );
		//draw square
		gl.drawArrays( gl.TRIANGLES, start, projectionTable[i].size);
		start += gridTable[i].size;
	}

}
