function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Invalid Expression");
  }
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
