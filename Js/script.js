"use strict";

const numberOfFilms = prompt("What's your name?", "");

var personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
}

const nameMovie = prompt("What's your favorite film?"),
      vuoto = prompt("How was good is it?");

personalMovieDB.movies[nameMovie] = vuoto;

console.log(personalMovieDB["movies"]);




