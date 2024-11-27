const display = document.getElementById("display");
let lastInputOperator = false;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      display.value = "";
      lastInputOperator = false;
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1);
      lastInputOperator = /[+\-*/.]$/.test(display.value);
    } else if (value === "=") {
      display.value = eval(display.value) || "";
      lastInputOperator = false;
    } else if (/[+\-*/.]/.test(value)) {
      if (!lastInputOperator && display.value !== "") {
        display.value += value;
        lastInputOperator = true;
      }
    } else {
      display.value += value;
      lastInputOperator = false;
    }
  });
});
