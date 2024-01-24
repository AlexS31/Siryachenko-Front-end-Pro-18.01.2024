const number1 = Number(prompt("Введіть перше число:"));
const number2 = Number(prompt("Введіть друге число:"));

if (isNaN(number1) || isNaN(number2)) {
  alert("Будь ласка, введіть коректні числові значення.");
} else {

  alert(
    number1 + " + " + number2 + " = " + (number1 + number2) + "\n" +
    number1 + " - " + number2 + " = " + (number1 - number2) + "\n" +
    number1 + " * " + number2 + " = " + (number1 * number2) + "\n" +
    number1 + " / " + number2 + " = " + (number1 / number2)
  );
}