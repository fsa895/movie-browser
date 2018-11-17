/* eslint react/jsx-filename-extension:0 */
/* react/forbid-prop-types:0 */


// import ReactDOM from "react-dom";
// import {Component} from 'react';
import React from 'react';
//import PropTypes from 'prop-types';
import { Link,NavLink } from 'react-router-dom'; 
//import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Home';
import '../styles/appbar.scss';
// const styles = {
//   root: {
//     color: 'inherit',
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -18,
//     marginRight: 10,
//   },
// };

function MyAppBar() {
  //const { classes } = props;
  return (
    <div className="root">
     <NavLink to="/MyCart">My Collections</NavLink> &nbsp;&nbsp;
     <NavLink to="/CreateComponent">Create Collections</NavLink>
      
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className="menuButton" color="inherit" aria-label="Menu">
          <Link to={`/`}>
            <MenuIcon />
          </Link>  
          </IconButton>
          <Typography variant="title" color="textSecondary">
            Movies Mania
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    // </div>
 );
}

// MyAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default MyAppBar;
