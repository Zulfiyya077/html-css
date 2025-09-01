// function performOperation(number, callback) {
//   callback(number);
// }

// function logNumber(x) {
//   console.log(x);
// }

// performOperation(10, logNumber); 



// function transformArray(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {

//     result.push(callback(arr[i]));
//   }
//   return result;
// }



// function double(x) {
//   return x * 2;
// }

// console.log(transformArray([2, 4, 6], double)); 


// function filterArray(arr, callback) {

//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// function isEven(x) {
//     return x % 2 === 0;
// }

// console.log(filterArray([1, 2, 3, 4, 5, 6], isEven));




// function divideNumbers(a, b, callback) {

//     return callback(a, b);
// }

// function division(x, y) {

//     if (x % y === 0) {
//         return true;

//     } else {
//         return false;       
//     }
// }



//     console.log(divideNumbers(10, 2, division));
//     console.log(divideNumbers(10, 3, division));




// const numbers = [10, 20, 30, 40, 50];


// const squaresNumbers = numbers.map(function (x) {
//     return x ** 2;
// });

// console.log(squaresNumbers);


// const numbers2 = [5, 15, 25, 35, 45];

// const multiplyBy2 = numbers2.forEach(function (x) {
//     console.log(x * 2);
// });



// const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers3.filter(function (x) {
//     return x % 2 === 0;
// });

// console.log(evenNumbers);




// const numbers4 = [11, 22, 33, 44, 55];


// const sum = numbers4.reduce(function (acc, value) {
//     return acc + value;
// }, 0);

// console.log(sum);


// const numbers4 = [11, -22, 33, 44, -55];


// const negative = numbers4.some(function (x) {
//     return x < 0;
// });

// console.log(negative);


// const allPositive = numbers4.every(function (x) {
//     return x > 0;
// });
// console.log(allPositive);


// {
//     console.log(x);
//     let x = 10; 
// }


// function foo()



function arrayPlusArray(arr1, arr2) {
  let sum = 0;


  for (let i = 0; i < arr1.length; i++) {
    sum += all[i]; {
        for (let j = 0; j < arr2.length; j++) {
            sum += arr2[j];
        }

    }
  }

  return sum;
}


function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum([1, 5.2, 4, 0, -1]));
