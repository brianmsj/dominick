import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import './nav.css';
import './grid.css';
import './mainTitle.css';
import ProgramInfo from './components/programinfo';
import Nav from './components/nav';
import Program from './components/program';

ReactDOM.render(
  <BrowserRouter>
   <div>
    <Nav />
    <Switch>
     <Route path='/program' component={Program}/>
     <Route path='/' component={App}/>
    </Switch>
   </div>
   </BrowserRouter>,
  document.getElementById('root')
);
