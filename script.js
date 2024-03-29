

// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) 
// print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
// For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. 
// You need to refactor this code to meet the requirements above.



// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
   
//     if(currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//         console.log("chicken Monkey");
//     }
//  else  if (currentNumber % 5 === 0) {
//         console.log("chicken") ;
//     }
//   else if(currentNumber % 7 === 0) {
//         console.log("monkey");
//     }
//  else {
//      console.log(currentNumber);
//  }
// }


    // Practice : Battle of the Bands


// let bandNumber = 1

// const takeNumber = function (bandName) {
//     const num = bandNumber; 
//     bandNumber++; 
//     return `${num}, ${bandName}`;
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console    

// const really = takeNumber("ReallyBadMusic bad")
// console.log(really);
    

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];


function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < foods.length; i++) {
    if (foods[i].cooked === false) {
       grill(foods[i]);
    }
}



console.log(cookedFood);