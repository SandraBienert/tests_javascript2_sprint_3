
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
    
    if (movies.length === 0) return 0; // Per evitar divisió per zero

    const totalScore = movies.reduce((accumulator, movie) => accumulator + movie.score, 0);
    const averageScore = totalScore / movies.length;

    return averageScore.toFixed(2); 
  }


// Exercise 4:  Alphabetic order by title

function orderAlphabetically(movies) {
  
  const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));

  const top20Movies = sortedMovies.slice(0, 20);

  const top20TitleMovies = top20Movies.map(movie => movie.title);

  return top20TitleMovies;
}



// Exercise 5: Order by year, ascending
function orderByYear(movies) {
 
  return movies.sort((a, b) => {
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
console.log(bestFilmOfYear(movies, 1957));


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
