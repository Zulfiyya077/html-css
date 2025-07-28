let language = "az";
// let language = "es";
// let language = "de"; 
// let language = "tr";

// if (language == "en") {
//    console.log("Hello, World!");
// } else if (language == "es") {
//    console.log("¡Hola, Mundo!");
// } else if (language == "de") {
//    console.log("Hallo, Welt!");
// } else if (language == "tr") {
//    console.log("Merhaba, Dünya!");
// } else if (language == "az") {
//    console.log("Salam, Dünya!");
// } else {
//    console.log("Hello, World!");
// }

// let score = 77;

// if (score >= 91) {
//    console.log("A");
// } else if (score >= 81) {
//    console.log("B");
// } else if (score >= 71) {
//    console.log("C");
// } else if (score >= 61) {
//    console.log("D");
// } else {
//    console.log("F");
// }

// let number = 7;
// let noun = "dog";

// if (number == 1) {
//    console.log(number + " " + noun);
// } else {
//    console.log(number + " " + noun + "s");
// }


// let number2 = 5;
// let noun2 = "child";

// if (number2 == 1) {
//    console.log(number2 + " " + noun2);
// } else if (noun2 == "child") {
//     console.log(number2 + " " + noun2 + "ren");
// } else {
//    console.log(number2 + " " + noun2 + "s");
// }


let user = prompt("Who's there?");

if (user == "cancel") {
    console.log("cancelled.");
} else if (user == "Admin") {
    let password = prompt("Password?");

    if (password == "cancel") {
        console.log("cancelled.");
    } else if (password == "1234") {
        console.log("welcome Admin.");
    } else {
        console.log("wrong password.");
    }
} else {
    console.log("I don't know you.");
}

const array = [1, 2, 3, 4, 5];
console.log(typeof(array)); // 1