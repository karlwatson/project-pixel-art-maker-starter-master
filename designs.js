// DOM Selectors

const submitButton = $("#submitButton");
const colorPickerSelect = $("#colorPicker");
let tableDraw = $("#pixelCanvas");
let currentColor = "#000000";
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
    $(tableDraw).append(`<tr class = "Row${i}" id = "temp">`);
    let temp = $(`.Row${i}`);
    for (let j = 0; j < inputWidth; j++) {
      $(temp).append(`<td class = "Row${i}_Column${j}"></td>`);
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
    let colorValue = $(this).val();
    currentColor = colorValue;
    // window.alert(`Selected Color is ${colorValue}`);
  });

  // Event Listener for selecting a table / grid element

  $('table').on('click', 'td', function(evt)  {
    evt.preventDefault();
    $(this).css('background-color', `${currentColor}`);



    // if ($(this).css('background-color') !== 'rgb(255, 255, 255)') {
    //   $(this).css('background-color', "#FFFFFF");
    //   // window.alert(`Color: ${$(this).css('background-color')}`)
    // } else {
    //   $(this).css('background-color', `${currentColor}`);
    // }
  //   window.alert(`Event Target ${$(event.target)},
  //                 Event item ${$(event)},
  //                 "This" keyword ${$(this)`}
  //
  //   `)
  });



  // Useful

  //   window.alert(`Height is ${height}, Width is ${width}`);
  // });
