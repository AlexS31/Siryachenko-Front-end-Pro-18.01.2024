function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else {
        return num * pow(num, degree - 1);
    }
}

var base = prompt("Введіть число:");
var exponent = prompt("Введіть ступінь:");

base = parseFloat(base);
exponent = parseInt(exponent);

var result = pow(base, exponent);
alert(`${base}   в ступені   ${exponent} дорівнює   ${result}`);
