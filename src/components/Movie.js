/* eslint react/jsx-filename-extension:0 */
/* eslint prefer-destructuring:0 */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardActionArea, CardContent, CardMedia, Button, 
  Card, Typography, CardActions
} from '@material-ui/core';

import "../styles/searchcard.scss";

class Movie extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() { 
    const props = this.props;

    return (
      <Card className='card' key={props.movie.id}>
        <CardActionArea>
          <CardMedia
            className='media'
            component='img'
            width='200'
            height='300'
            image={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
            title={props.movie.title}
          />
          <CardContent>
            <Typography gutterBottom 
              variant="headline" 
              component="h2">
              Title : {props.movie.title}
            </Typography>
            <Typography variant='headline' 
              component='h4'>
              original_language : {props.movie.original_language}<br></br>
              popularity : {props.movie.popularity}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>                         
          <Button size="small" color="primary">
            <Link to={`movies/${props.movie.title}?query=${props.query}`}>Click to see more...</Link>
          </Button>           
        </CardActions>
      </Card>
    );
  }
};

export default Movie;