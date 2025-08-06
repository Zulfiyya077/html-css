//task1

//saitlerden ibaret string yazib mene verilen stringdeki herfler saitler stringimde olduqca countu artirdim 
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript"));


// ve ya stringdeki herfleri tek tek sait olub olmadigini yoxladim
function countVowels2(string) {
    let count2 = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
            count2++;
        }
    }
    return count2;
}
console.log(countVowels2("javascript is fun"));


//task2 
// eded 2ye qaliqsiz bolunurse cut ededddir
function printEvens(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvens(10);


//task3
// verilen ededi stringe cevirdim, sonra split edib arrayin elementleri seklinde oldu ['1', '2', '3'], 
// ve her bir elemet yeniden Numbere cevirerek dovr daxilinde topladim netice aldim
function sumDigits(num) {
    let sum = 0;

    let array = num.toString().split('');
    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }
    return sum;
}
console.log(sumDigits(123));

//task4
// template literal ile verilen reqemi 10a qeder olan reqemlerle hasilini consolede misal seklinde cixartdim 
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(3);

//task5
// 3den 15e qeder olan reqemleri yoxladim, 3e bolunenler ucun "Fizz", 5e bolunenler ucun "Buzz",
// 3e ve 5e bolunenler ucun "FizzBuzz" yazdim, digerleri ise reqemlerin ozu qaldi console-da
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15);