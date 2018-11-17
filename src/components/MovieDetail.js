/* eslint react/jsx-filename-extension:0 */
/* global localStorage:true, fetch:true */
/* eslint react/prop-types:0, react/no-unused-state:0*/
/* eslint camelcase:0 */
import {
  CardActionArea, CardContent, CardMedia,
  Card, Typography, Button, CardActions
} from '@material-ui/core';
import React from 'react';
import "../styles/singleCard.scss";
// import { Link } from 'react-router-dom';
// import MyCart from './MyCart.js';

// import CartComponent from './CartComponent.js';

const API_KEY = '709d0cca6e2db4c9359af7e6dcf59673';

let cart_movies = [];

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      title: props.match.params.title,
      cart:[]
    };

    this.fetchTheData = this.fetchTheData.bind(this);
    this.cartData = this.cartData.bind(this);
  
  }

  componentDidMount() {
    this.fetchTheData();
  }

  cartData(){
      localStorage.setItem('mycart',JSON.stringify(this.state.movie[0]))
      cart_movies.push(JSON.parse(localStorage.getItem('mycart')))
     // console.log('cart_movies',cart_movies);
      this.setState({cart : cart_movies })
      localStorage.setItem('mcart',JSON.stringify(cart_movies))
      //console.log('cart ',this.state.cart)
  }
  
  fetchTheData() {
    //const props = this.props;
    //console.log(props.match.params.title,'fa');
    let movies = [];
    for (let i = 1; i <= 6; i += 1) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.title}&page=${i}&include_adult=false`)
        .then(response => response.json())
        .then(moviesData => {
          //console.log('movieData: ', moviesData);
          //console.log('title: ', props.match.params.title);


          moviesData.results.forEach(result => {
            if (result.title === this.state.title) {
              movies.push(result);
            }
          });
          this.setState({ movie: movies })
        });
    }

  }

  render() {
    const movieList = this.state.movie;
//    console.log('fetched movies:', movieList)

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
                  <CardActions>
                    <Button size="small" color="primary" onClick={this.cartData}>
                      Add to List... 
                    </Button>
          
                  </CardActions>
                </Card>
              )
            })
          }
        </div>
        
    );
  }


}

export default MovieDetail;
