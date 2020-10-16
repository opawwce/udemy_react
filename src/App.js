import React from "react";
import "./App.css";

function App() {
  const numberOfFilms = +prompt("How many films did you watch?", "");
  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };
  // if (numberOfFilms) {
  //   numberOfFilms = +prompt("How many films did you watch?", "");
  // }

  for (let i = 0; i < 2; i++) {
    const lastSeeingFilm = prompt("Last seeing film?", "");
    const lastFilmRating = +prompt("Rate it!", "");
    if (
      lastSeeingFilm != null &&
      lastFilmRating != null &&
      lastSeeingFilm != "" &&
      lastFilmRating != "" &&
      lastSeeingFilm.length < 50
    ) {
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
    // personalMovieDB.movies[lastSeeingFilm] = lastFilmRating;
  }

  if (personalMovieDB.count < 10) {
    console.log("Too little");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Classic watcher");
  } else if (personalMovieDB.count >= 30) {
    console.log("Cinema lover!");
  } else {
    console.log("error");
  }

  console.log(personalMovieDB);
  return (
    <div className="App-header">
      <h1> All watched - {personalMovieDB.count}</h1>
      {/* <h3> Last - {personalMovieDB}</h3> */}
    </div>
  );
}

export default App;
