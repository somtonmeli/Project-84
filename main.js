// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed an Alphabet Key";
		console.log("alphabtkey");

	

		if((keyPressed >=48 && keyPressed<=57))
		//write a code to check the type of key pressed
		numberkey();
		document.getElementById("d1").innerHTML="You pressed a Number Key";
		console.log("numkey");

		if((keyPressed >=37 && keyPressed<=40))
		//write a code to check the type of key pressed
		arrkey();
		document.getElementById("d1").innerHTML="You pressed an Arrow Key";
		console.log("arrowkey");

		if((keyPressed =17 && keyPressed <=18 && keyPressed <= 27))
		//write a code to check the type of key pressed
		spkey();
		document.getElementById("d1").innerHTML="You pressed a Special Key";
		console.log("spkey");

		if((keyPressed >17))
		//write a code to check the type of key pressed
		otherkey();
		document.getElementById("d1").innerHTML="You pressed a Different Key";
		console.log("otherkey");


		




		
}

function alphabetkey()
{
	//upload respective image with the message.
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image = "numkey.png";
	add();
}

function arrkey()
{
	img_image = "Arrkey.png";
	add();
}	

function spkey()
{
	img_image ="spkey.png";
	add();
}

function otherkey()
{
	img_image = "otherkey.png";
	add();
}