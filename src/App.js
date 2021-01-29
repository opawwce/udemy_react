import React from "react";
import "./App.css";
// import styled from "styled-components";

function App() {
  const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
      personalMovieDB.count = +prompt("How many films did you watch?", "");

      while (
        personalMovieDB.count === "" ||
        personalMovieDB.count == null ||
        isNaN(personalMovieDB.count)
      ) {
        personalMovieDB.count = +prompt("How many films did you watch?", "");
      }
    },
    remeberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
        const a = prompt("Last seeing film?", ""),
          b = prompt("Rate it", "");

        if (a != null && b != null && a !== "" && b !== "" && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log("done");
        } else {
          console.log("error");
          i--;
        }
      }
    },
    detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
        console.log("Seeing few movies");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("you are classic viewer");
      } else if (personalMovieDB.count >= 30) {
        console.log("u r movie lover");
      } else {
        console.log("error!");
      }
    },
    showMyDb: function (hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDb: function () {
      if (personalMovieDB.private) {
        personalMovieDB.private = false;
      } else {
        personalMovieDB.private = true;
      }
    },
    writeYourGenres: function () {
      for (let i = 1; i <= 3; i++) {
        let genre = prompt(`your favourite genre on number ${i}`);

        if (genre === "" || genre == null) {
          console.log("incorrect data or null");
          i--;
        } else {
          personalMovieDB.genres[i - 1] = genre;
        }
      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`favourite genre ${i + 1} is ${item}`);
      });
    },
  };
  console.log(personalMovieDB);
  personalMovieDB.start();

  return (
    <div className="App-header">
      <h1> All watched - {personalMovieDB.count}</h1>
      {/* <h3> Last - {personalMovieDB}</h3> */}
    </div>
  );
}

export default App;
