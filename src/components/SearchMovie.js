/* eslint react/jsx-filename-extension:0, react/destructuring-assignment:0 */
/* "react/jsx-no-bind":0 */
/* eslint react/prop-types:0 */
/* eslint react/jsx-no-bind:0 */
/* eslint camelcase:0 */
import React from 'react';
import '../styles/searchbar.scss';
import { TextField,Button } from '@material-ui/core';

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const searchTerm = event.target.value;
    this.setState(() => ({ searchTerm }));
  }

  render() {
    return (
      <div className="navBar" >
        <TextField className="fancy1" placeholder="Type movie name"
                   onChange={this.handleOnChange} /> 
                   &nbsp;&nbsp;&nbsp;
        <Button variant="extendedFab"
                   onClick={this.props.handleSearchMovie.bind(null, this.state.searchTerm)}>
          Search
        </Button>
      </div> 
    );
  }
}

export default SearchMovie;