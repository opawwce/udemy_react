import React from "react";
import "./App.css";

function App() {
  const numberOfFilms = +prompt("How many films did you watch?", "");
  const lastSeeingFilm = prompt("Last seeing film?", "");
  const lastFilmRating = +prompt("Rate it!", "");
  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

  personalMovieDB.movies[lastSeeingFilm] = lastFilmRating;
  console.log(personalMovieDB);
  return (
    <div className="App-header">
      <h1> All watched - {personalMovieDB.count}</h1>
      {/* <h3> Last - {personalMovieDB}</h3> */}
    </div>
  );
}

export default App;
