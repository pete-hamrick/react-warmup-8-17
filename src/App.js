import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header.js';
import Cats from './Cats.js';
import Dogs from './Dogs.js';
import Home from './Home.js';
import './App.css'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/dogs' component={Dogs} />
          <Route path='/cats' component={Cats} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;
