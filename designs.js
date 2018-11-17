// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submitButton = $("#submitButton");
const colorPickerButton = $("#colorPicker");
let inputHeight = $("#inputHeight");
let inputWidth = $("#inputWidth");
let tableDraw = $("#pixelCanvas");

function makeGrid() {

  for (let i = 0; i < inputHeight; i++) {
    $(tableDraw).append( `<tr class = "Row${i}" id = "temp">`);
    let temp = $(`.Row${i}`);
    for (let i = 0; i < inputWidth; i++) {
      $(temp).append( `<td class = "Column${i}">&nbsp;</td>` );
      }
    }

  // Your code goes here!

  }
// Your code goes here!
