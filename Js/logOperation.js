"use strict";

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries){
//     console.log("I'm full!");
// }

// console.log((hamburger && fries));


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'ekjwnfjksnjkn');

// if(hamburger === 3 && cola === 1 && fries){
//     console.log("I'm full!");
// } else{
//     console.log("I'm angry!");
// }


if(hamburger === 3 && cola === 2 || fries === 3 && nuggets){
    console.log("I'm full!");
} else{
    console.log("I'm angry!");
}

console.log(hamburger || cola ||  fries);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);


