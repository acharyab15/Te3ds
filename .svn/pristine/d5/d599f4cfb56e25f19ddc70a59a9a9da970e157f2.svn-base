/*
 * Te3ds
 * by Bipeen Acharya, Olivier Mahame, Suraj Bajracharya
 * Submitted to: Dr. Joshua Stough
 * Date: April 9th, 2014
 */

function zoom(event, delta) {
	var zoomSpeed = 15;
	var newFovy = fovy - (delta / zoomSpeed);
	newFovy = Math.min(newFovy, 75);
	newFovy = Math.max(newFovy, 20);
	fovy = newFovy;
	projection = perspective(fovy,aspect,zNear,zFar);
}