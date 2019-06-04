// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//global variables to start with
const makeTable = document.getElementById('sizePicker');

//function to create grid based on user input
function makeGrid() {
	const gridHeight = document.getElementById('inputHeight');
	const gridWidth = document.getElementById('inputWidth');
	const canvas = document.getElementById('pixelCanvas');
	const cellColor = document.getElementById('colorPicker'); 


	while(canvas.hasChildNodes()) {
		canvas.removeChild(canvas.firstChild);
	}

	for (let row = 0; row < gridHeight.value; row++) {
		const tableRows = canvas.appendChild(document.createElement('tr'));
		for (let col = 0; col < gridWidth.value; col++) {
			const tableCells = tableRows.appendChild(document.createElement('td'));
			tableCells.addEventListener('click', function (e) {
				this.style.backgroundColor = cellColor.value;
			});
		}
	}
}

//event listener for creating grid
makeTable.addEventListener('submit', function(e) {
	e.preventDefault();
	makeGrid();
});
