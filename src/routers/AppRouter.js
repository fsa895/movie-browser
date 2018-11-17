/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import MovieDetail from '../components/MovieDetail';
import MyAppBar from '../components/AppBar';
import NotFound from '../components/NotFound';
import MyCart from '../components/MyCart';
import CreateComponent from '../components/CreateComponent';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <MyAppBar />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/movies/:title" component={MovieDetail} />
        <Route path="/MyCart" component={MyCart} />
        <Route path="/CreateComponent" component={CreateComponent} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;