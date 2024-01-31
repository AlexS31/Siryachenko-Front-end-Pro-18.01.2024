let number1 = prompt("Введіть перше число:");
let number2 = prompt("Введіть друге число:");
let number3 = prompt("Введіть третє число:");

number1 = parseFloat(number1);
number2 = parseFloat(number2);
number3 = parseFloat(number3);

const average = (number1 + number2 + number3) / 3;

alert("Середнє арифметичне: " + average);