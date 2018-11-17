/* eslint react/jsx-filename-extension:0 */
/* global document:true */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('app')
);