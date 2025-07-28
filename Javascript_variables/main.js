// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

let kids = 2;
let partner = "Banu";
let city = "Milan";
let job = "Software Engineer";
let fortune = "You will be a " + job + " in " + city + ", and married to " + partner + " with " + kids + " kids.";
console.log(fortune);

// Want to find out how old you'll be? Calculate it!
// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

var birthYear = 1988;
var future = 2026;
var age1 = future - birthYear - 1;
var age2 = future - birthYear;
console.log("I will be either " + age1 + " or " + age2 + " in " + future);

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var now = 25;
var max = 85;
var daily = 2;
var years = max - now;
var days = years * 365;
var total = days * daily;

console.log("You will need " + total + " chocolates to last you until the ripe old age of " + max);