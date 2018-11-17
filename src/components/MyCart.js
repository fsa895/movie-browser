/* eslint react/jsx-filename-extension:0 */
/* global localStorage:true */
/* eslint camelcase:0 */

import {
  CardActionArea, CardContent, CardMedia,
  Card, Typography
} from '@material-ui/core';
import React from 'react';
import "../styles/singleCard.scss";
//import { Link } from 'react-router-dom';
// import MovieDetail from './MovieDetail';

class MyCart extends React.Component {

  constructor(props) {
    super(props);
    this.keys = JSON.parse(localStorage.getItem('mcart'));
  }

  render() {
    const movieList = this.keys;

    return (
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
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>

                  </CardActions> */}
              </Card>
            )
          })
        }
      </div>
    );
  }
}
export default MyCart;

