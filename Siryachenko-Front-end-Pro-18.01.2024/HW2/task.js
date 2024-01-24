const operation = prompt("Виберіть операцію (add, sub, mult, div):");

const number1 = parseFloat(prompt("Введіть перше число:"));

const number2 = parseFloat(prompt("Введіть друге число:"));

if (isNaN(number1) || isNaN(number2)) {
  alert("Будь ласка, введіть коректні числові значення.");
} else {
  
  switch (operation) {
    case "add":
      alert(number1 + " + " + number2 + " = " + (number1 + number2));
      break;
    case "sub":
      alert(number1 + " - " + number2 + " = " + (number1 - number2));
      break;
    case "mult":
      alert(number1 + " * " + number2 + " = " + (number1 * number2));
      break;
    case "div":
     
      if (number2 !== 0) {
        alert(number1 + " / " + number2 + " = " + (number1 / number2));
      } else {
        alert("Ділення на нуль неможливе.");
      }
      break;
    default:
      alert("Невірна операція. Будь ласка, виберіть add, sub, mult або div.");
  }
}