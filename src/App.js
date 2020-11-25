import React from "react";
import "./App.css";

function App() {
  let numberOfFilms;

  function start() {
    numberOfFilms = +prompt("How many films did you watch?", "");

    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("How many films did you watch?", "");
    }
  }

  start();

  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
  };
  // if (numberOfFilms) {
  //   numberOfFilms = +prompt("How many films did you watch?", "");
  // }

  function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
      const lastSeeingFilm = prompt("Last seeing film?", "");
      const lastFilmRating = +prompt("Rate it!", "");
      if (
        lastSeeingFilm !== null &&
        lastFilmRating !== null &&
        lastSeeingFilm !== "" &&
        lastFilmRating !== "" &&
        lastSeeingFilm.length < 50
      ) {
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
      // personalMovieDB.movies[lastSeeingFilm] = lastFilmRating;
    }
  }

  // rememberMyFilms();

  function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log("Too little");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Classic watcher");
    } else if (personalMovieDB.count >= 30) {
      console.log("Cinema lover!");
    } else {
      console.log("error");
    }
  }

  // detectPersonalLevel();

  // console.log(personalMovieDB);

  function showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  }

  showMyDB(personalMovieDB.private);

  function writeYourGenres() {
    for (let i = 1; i <= numberOfFilms; i++) {
      personalMovieDB.genres[i - 1] = prompt(
        `Your favorite genre in count of ${i}`
      );
    }
  }
  writeYourGenres();

  return (
    <div className="App-header">
      <h1> All watched - {personalMovieDB.count}</h1>
      {/* <h3> Last - {personalMovieDB}</h3> */}
    </div>
  );
}

export default App;
