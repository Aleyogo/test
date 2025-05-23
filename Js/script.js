"use strict";

const numberOfFilms = +prompt("How many movies have you seen?", "");

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// const nameMovie = prompt("What's your favorite film?"),
//     vuoto = prompt("How was good is it?");

// personalMovieDB.movies[nameMovie] = vuoto;

for (let i = 0; i < 2; i++) {
    const nameMovie = prompt('What was is your last movie?', '');
    const vuoto = prompt('How was good is it?', '');

    if(nameMovie != null && vuoto != null && nameMovie != '' && vuoto != '' && nameMovie.length < 50){
        personalMovieDB.movies[nameMovie] = vuoto;
        console.log('done');
    } else{
        console.log('error');
        i--;
    }
}

if(personalMovieDB.count < 10){
    console.log("You are watched not a lot");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("You're a classic spectator");
} else if(personalMovieDB.count >= 30){
    console.log("You're a movie buff!");
} else{
    console.log("Error!!");
}

console.log(personalMovieDB);




