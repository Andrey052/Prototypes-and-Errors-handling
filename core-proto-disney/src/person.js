/**
 * Человек.
 * @param {string} name
 */
function Person(name) {
  // Код тут.
  this.name = name;
  this.watchedMovies = [];
}

Person.prototype.watchMovie = function (movie) {
  // Код тут.
  if (!this.watchedMovies.includes(movie)) {
    this.watchedMovies.push(movie);
    console.log(movie.play());
  } else {
    console.log(`${this.name} has already watched ${movie.title}`);
  }
};

module.exports = { Person };
