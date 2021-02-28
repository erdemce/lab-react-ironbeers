import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import "./App.css"
import Beer from './components/Beer';

 class App extends Component {
  render() {
    return (
      <div className="App">

<Switch>
            <Route exact path="/" render={() => {
                return  <Home/>
            }} />
            <Route  exact path="/beers" render={() => {
                return <Beers/>
            }} />
            <Route  path="/new-beer" render={() => {
                return <NewBeer/>
            }} />
            <Route  path="/beers/:beerId" render={(routeProps) => {
                return <Beer {...routeProps}/>
            }} />

       </Switch>
       
      </div>
    );
  }
}
export default withRouter(App)
