for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}



const exchangeRate = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const costInHryvnia = dollars * exchangeRate;
    console.log(`${dollars} доларів коштують ${costInHryvnia} гривень`);
}



const N = 100; 
for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N) {
        console.log(i);
    }
}



const num = 17;
let isPrime = true;

if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
} else {
    isPrime = false;
}

console.log(isPrime ? `${num} є простим числом` : `${num} не є простим числом`);



const targetNumber = 81; // ваше число для перевірки
let base = 3;
let exponent = 1;

while (base < targetNumber) {
    base *= 3;
    exponent++;
}

const isPowerOfThree = base === targetNumber;

console.log(isPowerOfThree ? `${targetNumber} можна отримати шляхом зведення числа 3 у ${exponent} ступінь` : `${targetNumber} не можна отримати шляхом зведення числа 3 у деякий ступінь`);