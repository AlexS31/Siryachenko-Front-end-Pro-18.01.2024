function calculateAverage(arr) {
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    
    if (count === 0) {
        return 0;
    } else {
        return sum / count;
    }
}

const array = [1, 2, 'a', 'b', 3, 4, 'c'];
const average = calculateAverage(array);
console.log("Середнє арифметичне числових елементів масиву:", average);
