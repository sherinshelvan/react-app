import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './assets/css/index.css';
import Navigation from './components/includes/navigation';
import Home from './components/home';
import Users from './components/users';
import Contact from './components/contact';
import Notfound from './components/notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

