import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import './nav.css';
import './grid.css';
import './mainTitle.css';
import reducer from './reducers/reducers';
import ProgramInfo from './components/programinfo';
import Nav from './components/nav';
import Program from './components/program';
import About from './components/about';
import Comments from './components/comments'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
   <div>
    <Nav />
    <Switch>
     <Route path='/about' component={About}/>
     <Route path='/program' component={Program}/>
     <Route path='/' component={App}/>
    </Switch>
   </div>
   </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);
