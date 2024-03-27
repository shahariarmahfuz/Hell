document.querySelectorAll('#calculator input[type="button"]').forEach(function(button) {
  button.addEventListener('click', function(e) {
    var display = document.getElementById('display');
    var displayValue = display.value;
    var buttonValue = e.target.value;

    if (buttonValue === 'C') {
      // Clear display
      display.value = '';
    } else if (buttonValue === '=') {
      // Calculate and show result
      display.value = eval(displayValue);
    } else {
      // Add clicked button value to display
      display.value += buttonValue;
    }
  });
});
