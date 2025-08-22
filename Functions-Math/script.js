

// function countChars(string, character) {
//     let lowerCaseString = string.toLowerCase();
//     let lowerCaseCharacter = character.toLowerCase();
//     string = lowerCaseString;
//     character = lowerCaseCharacter;
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === character) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countChars("hellO world", "o"));



// function printReverse(number) {
//   for (let i = number; i >= 1; i--) {
//     console.log(i);
//   }
// }
// printReverse(5);





// function getRandomElement(array) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
// }

// console.log(getRandomElement(["apple", "banana", "orange", "mango"]));



function getSquareRoot(number) {
    if (number < 0) {
        return "Negativ number";
    }
    return Math.sqrt(number);
}   

console.log(getSquareRoot(25));




function power(x, y) {

    return Math.pow(x, y);
}   

console.log(power(2, 3)); 