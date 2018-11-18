// DOM Selectors

const submitButton = $("#submitButton");
const colorPickerSelect = $("#colorPicker");
let tableDraw = $("#pixelCanvas");
let currentColor;
// let height = 1;
// let width = 1;
let color = null;
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Remove existing Table elements
  tableDraw.children('*').remove();

  let inputHeight = Number($("#inputHeight").val());
  let inputWidth = Number($("#inputWidth").val());

  for (let i = 0; i < inputHeight; i++) {
    $(tableDraw).append( `<tr class = "Row${i}" id = "temp">`);
    let temp = $(`.Row${i}`);
    for (let j = 0; j < inputWidth; j++) {
      $(temp).append( `<td class = "Row${i}_Column${j}">&nbsp;</td>` );
      }
    }
  }

  // Event Listeners for Height, Width, and Color value

  // Select size input

  submitButton.on('click', function(evt) {
    evt.preventDefault();
    makeGrid();
  });

  // Select color input
  colorPickerSelect.on('change', function(evt) {
    evt.preventDefault();
    let val = $(this).val();
    currentColor = val;
    window.alert(`Selected Color is ${val}`);
  });



  // Useful

  //   window.alert(`Height is ${height}, Width is ${width}`);
  // });
