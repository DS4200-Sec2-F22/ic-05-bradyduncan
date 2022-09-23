// function that increases number in the button-div every time the button is clicked
let clickCount = 0;

function buttonClick() {
	// add 1 to the click count
	clickCount += 1;

	// text of the page
	let pageText = 'Number of times button clicked: ';

	//update the text
	let buttonDiv = document.getElementById('button-div');

	buttonDiv.innerHTML = pageText + clickCount;
}