function createSumFunction() {
    let total = 0; 

    function addToSum(value) {
        total += value;
        return total; 
    }

    return addToSum;
}

const sumFunction = createSumFunction();


console.log(sumFunction(3));
console.log(sumFunction(5));
console.log(sumFunction(20));