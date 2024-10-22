
const movies = require("./data");


// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  
  let result = movies.map(movie => movie.director)
  console.log("EXERCICE 1 ->", result);
  
  return result;
}



// Exercise 2: Get the films of a certain director

let director = "Quentin Tarantino";

function getMoviesFromDirector(movies, director) {

  const arrayDirector = movies.filter((movie) => movie.director === director);  
  
  return arrayDirector;
  
}
  
// Exercise 3: Calculate the average of the films of a given director.

  function moviesAverageOfDirector(movies) {

    const directorMovies = movies.filter(movie => movie.director === director);
    
    if (directorMovies.length === 0) return 0; // Per evitar divisió per zero

    const totalScore = directorMovies.reduce((accumulator, movie) => accumulator + parseFloat(movie.score), 0);
    const averageScore = parseFloat((totalScore / directorMovies.length).toFixed(2));

    return averageScore; 
  }


// Exercise 4:  Alphabetic order by title

function orderAlphabetically(movies) {
  
  const moviesCopy = [ ...movies];
    
  moviesCopy.sort((a, b) => a.title.localeCompare(b.title));

  const top20Titles = moviesCopy.slice(0, 20).map(movie => movie.title);

  return top20Titles;
}



// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  const moviesCopy = [ ...movies];
 
  return moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      
      return a.title.localeCompare(b.title);
    }
    
    return a.year - b.year;
  });
}



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const categoryMovies = movies.filter(movie => movie.category === category);
  
  const totalScore = categoryMovies.reduce((acc, movie) => acc + movie.score, 0);
 
  const averageScore = (categoryMovies.length > 0) ? (totalScore / categoryMovies.length).toFixed(2) : 0;

  
  return parseFloat(averageScore);

}


  
/// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  return movies.map(movie => {
    
    const duration = movie.duration.split(' ');
    let totalMinutes = 0;

    duration.forEach(time => {
      
      if (time.includes('h')) {
        totalMinutes += parseInt(time) * 60;
      
      } else if (time.includes('min')) {
        totalMinutes += parseInt(time);
      }
    }
    );

    return {
      ...movie,
      duration: totalMinutes
    };
  });
};



// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  
  const movieOfYear = movies.filter(movie => movie.year === year);

  if (movieOfYear.length === 0) return 0;

  let bestMovie = movieOfYear[0];

  for (const movie of movieOfYear) {
    if (movie.score > bestMovie.score){
      bestMovie = movie;
    }
  }

  return [bestMovie];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
