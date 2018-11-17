/* eslint react/jsx-filename-extension:0 */
/* global fetch:true  */
/* eslint camelcase:0 */

import React from 'react';

// import {
//   Home as MenuIcon, HomeTwoTone as Homeicon
// } from '@material-ui/icons';

import {
  CardActionArea, CardContent, CardMedia, Card, Typography
} from '@material-ui/core';

import "../styles/searchcard.scss";

class PopularMovies extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        popular_movies : []
      };

      }
  
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c7c2954a02370c3c8e407441cee0a34f&language=en-US&page=1`)
        .then(d => d.json())
        .then(popularMovies => {
            this.setState({
              popular_movies: popularMovies.results
          });
        //  console.log("popular movies array",this.state.popular_movies);
        
        })
    }
  
    render() {
        const movieList = this.state.popular_movies;
        
        return (
          <div>
            <div className="headingPopular">
                <Typography className='heading' variant='headline'>Popular Movies</Typography>    
            </div>
            <div className='searchResults flex-container'>
              {
                movieList.map(movie => {
                  const { id, title, original_language, popularity, poster_path } = movie;
                  return (
                    <Card className='card' key={id}>
                      <CardActionArea>
                        <CardMedia
                          className='media'
                          component='img'
                          width='200'
                          height='300'
                          image={`https://image.tmdb.org/t/p/original/${poster_path}`}
                          title={title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="headline" component="h2">
                            Title : {title}
                          </Typography>
                          <Typography variant='headline' component='h4'>
                            original_language : {original_language}<br></br>
                            popularity : {popularity}
                          </Typography>
                          {/* <Typography component="p">
                            Overview : {overview}
                          </Typography> */}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  )
                })          
              }
    
            </div>
          </div>
    
        );
      }
  }
  
  export default PopularMovies;