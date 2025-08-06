

function sumArray(numbers) {

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

sumArray([1, 2, 3, 4]);



function findFacrtorial(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}   


findFacrtorial(5); 


function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

findMax([3, 5, 7, 2, 8]); 
console.log(findMax([3, 5, 7, 2, 8]));



function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

reverseString("hello");
console.log(reverseString("hello"));





function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));