let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
          //   WHILE EVAL WORKS REALLY WELL HERE SINCE ITS A SIMPLE SILLY CODING EXERCISE, IT GOT SOME MAJOR SECURITY ISSUES SINCE IT EXECUTES ANYTHING AS A JAVA SCRIPT
        } catch {
          display.innerText = "ERROR!";
        }
        break;
      default:
        display.innerText += event.target.innerText;
    }
  });
});
