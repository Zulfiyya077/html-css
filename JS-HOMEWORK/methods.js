// Part 1: String Methods
//1.
let pet = "golden retriever";
console.log(pet.toUpperCase());

//2.
let question = "Can you solve this problem?";
console.log(question.length);

//3.
let activity = "This game is boring";
console.log(activity.replace("boring", "exciting"));

//4.
let headline = "Choose Your Adventure!";
console.log(headline.substring(12, 21));

//Part 2: Array Methods
//1.
let desserts = ["Ice Cream", "Pie", "Pudding"];
let newDesserts = desserts.push("Cake");
console.log(desserts);

//2.
let cities = ["London", "New York", "Tokyo"];
console.log(cities.includes("Paris"));

//3.
let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];
console.log(cars.concat(trucks));

//4.
let dessert = ["Ice Cream", "Pie", "Pudding", "Cake"];
console.log(dessert.indexOf("Pie"));

//Bonus Task

let word = "Technology";
console.log(word.split("").reverse().join(""));