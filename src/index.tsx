import { Router, View } from 'react-navi';
import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header/header.component';
import { Navigation } from './navigation/navigation.component';
import {routes} from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router routes={routes}>
      <Navigation />
      <View />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
