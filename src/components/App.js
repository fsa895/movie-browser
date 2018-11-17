/* eslint react/jsx-filename-extension:0 */
/* global fetch:true */
/* eslint react/destructuring-assignment:0 */

import React from 'react';

import SearchMovie from './SearchMovie';
import Movies from './Movies';
import PopularMovies from './PopularMovies';


const API_KEY = '709d0cca6e2db4c9359af7e6dcf59673';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      //query: ''
    }

    this.handleSearchMovie = this.handleSearchMovie.bind(this);
  }

  handleSearchMovie (movieName) {
    // this.setState({
    //   query: movieName
    // });

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(movies => this.setState(() => ({ movies })));
  }

  render() {
   // const { query } = this.state;

    return (
      <div>
        <SearchMovie 
          handleSearchMovie={this.handleSearchMovie}
        />
        <Movies movies={this.state.movies.results}/>
        <PopularMovies  />
      </div>
    );
  }
}

export default App;