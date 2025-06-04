"use strict";

// function showFirstMessage(text){
//     console.log(text);
//     let num = 20;
//     console.log(num);
// }

// showFirstMessage("Hello world!");

// // function calc(a, b){
// //     return(a + b);
// // }

// console.log(calc(4, 3));

// function ret(){
//     let num = 50;

//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){
//     console.log("Hello!");
// };

// logger();

// const calcOne = (a, b) => a + b;
// const calcTwo = (a, b) => { return a + b };


// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr){
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return promotion(curr * amount);
// }

// function promotion(result){
//     console.log(result * discount);
// }
 
// convert(500, usdCurr);


// function test(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//         if(i === 3) return
//     }
//     console.log("Done");
// } 

// test();

// function doNothing(){}
// console.log(doNothing() === undefined);

// function sayHello(name) {
//     let hello = "Hello " + name;
//     console.log(hello);
//     return hello;
// }

// var arr = [3];

// function returnNeighboringNumbers(num) {
//     for(let i = 0; i < 3; i++){
//         arr[i] = num - 1;
//         num ++; 
//     }
//     console.log(arr);
//     return arr;
// }

// returnNeighboringNumbers(53);



// function getMathResult(num, rep) {
//     if(typeof(rep) !== "number" || rep <= 0){
//         return num;
//     } else{
//         for(let i = 1; i <= rep; i++){
//             console.log(num * i + "---");
//         }
//     }
// }

// getMathResult(5, 4);




let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};


function remeberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

remeberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

console.log(personalMovieDB);



function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        // const genre = prompt(`Your favorite genre is numbered ${i}`);
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is numbered ${i}`);
    }
}

writeYourGenres();

 

// function fib(num){
//     let arr = [num];

//     if(num <= 0 || Number.isFloat(num) || typeof(num) == "string"){
//         console.log(" ");
//     }
//     if(num >= 2){
//         arr[0] = 0;
//         arr[1] = 1;

//         for(let i = 1; i < num; i++){

//         }
//     }
//     else{
//         console.log(0);
//     }
// }

// console.log(fib(4));






