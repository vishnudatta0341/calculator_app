let inputs = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let string = "";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inputs.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      inputs.value = string;
    } else if (e.target.innerHTML == "DE") {
      string = string.substring(0, string.length - 1);
      inputs.value = string;
    } else {
      string += e.target.innerHTML;
      inputs.value = string;
    }
  });
});
