var length = parseInt(prompt("Введіть довжину масиву:"));
var array = [];

for (var i = 0; i < length; i++) {
    var element = parseInt(prompt("Введіть елемент масиву номер " + (i + 1) + ":"));
    array.push(element);
}

console.log("Початковий масив: " + array.join(", "));

array.sort(function(a, b) {
    return a - b;
});

console.log("Відсортований масив: " + array.join(", "));

array.splice(1, 3);

console.log("Масив після видалення елементів з 2 по 4: " + array.join(", "));
