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
import './footer.css';
import ProgramInfo from './components/programinfo';
import Nav from './components/nav';
import Program from './components/program';
import About from './components/about';
import Footer from './components/footer'

ReactDOM.render(
  <BrowserRouter>
   <div>
    <Nav />
    <Switch>
     <Route path='/about' component={About}/>
     <Route path='/program' component={Program}/>
     <Route path='/' component={App}/>
    </Switch>
    <Footer />
   </div>
   </BrowserRouter>,
  document.getElementById('root')
);
