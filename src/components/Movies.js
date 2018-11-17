/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types:0 */
import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {
    //const { query } = this.props;

    return (
      <div className='searchResults flex-container'>
        {
          this.props.movies ? this.props.movies.map((movie, index) => <Movie key={index} movie={movie}/>) : ""
        }
      </div>
    );
  }
  
}

export default Movies;

