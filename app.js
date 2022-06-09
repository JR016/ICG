//Global variables/constants
var imgSrc;  // The source for the image file to use
var img;     // The image object generated in this script
var canvasDims;  //  Object that stores the dimensions of the canvas
var imageCoors;  // Object that stored the coordinates of the image
var mouseOriginCoors; // Coordinates of the mouse considering the image as the origin of the plane
var displayCoors;  // Boolean that regulates wheather the coordinates of the image are displayed on the screen or not
var colorPicker;   // Color picker to change the color of the mouse coordinates

function preload()
{
	imgSrc = window.sessionStorage.getItem("imgSrc");
	img = createImg(imgSrc, "");
	img.hide();
}

function setup() 
{
	// Create an object to store the dimensions of the canvas
	canvasDims = {"width" : windowWidth, "height" : windowHeight - 50};
	createCanvas(canvasDims.width, canvasDims.height);
	
	// Calculate the coordinates of the image for it to be centered
	imageCoors = findMiddleCoors(canvasDims, {"width" : img.width, "height" : img.height});
	
	// Create the color picker element
	colorPicker = createColorPicker("#000000");
	colorPicker.parent(document.querySelector("#colorPallete"));
}

function draw() 
{
	// Reset the background always to white
	background(255);
	
	// Display the image
	image(img, imageCoors["x"], imageCoors["y"]);
	
	// Display the image coordinates along the mouse if the mouse hovers the image
	if (displayCoors)
	{
		textSize(15);
		
		// Set the color of the text to be the color of the color Picker
		
		fill(colorPicker.color());
		
		mouseOriginCoors = {"x" : (mouseX - imageCoors["x"]), "y" : (mouseY - imageCoors["y"])};
		
		text("(" + mouseOriginCoors["x"] + "," + mouseOriginCoors["y"] + ")", mouseX + 5, mouseY + 5);
	}
}

function mouseMoved()
{
	// Call the function to calculate whereas the coordinates should be displayed or not
	displayCoors = mouseInImg({"x" : mouseX, "y" : mouseY}, {"x" : imageCoors["x"], "y" : imageCoors["y"], "width": img.width, "height" : img.height});
}