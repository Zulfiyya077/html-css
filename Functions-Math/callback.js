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


function filterArray(arr, callback) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(x) {
    return x % 2 === 0;
}

console.log(filterArray([1, 2, 3, 4, 5, 6], isEven));




function divideNumbers(a, b, callback) {

    return callback(a, b);
}

function division(x, y) {

    if (x % y === 0) {
        return true;

    } else {
        return false;       
    }
}



    console.log(divideNumbers(10, 2, division));
    console.log(divideNumbers(10, 3, division));