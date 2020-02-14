import React from 'react';
import Nav from './components/Nav';
import Ale from './components/Ale';
import AleAdd from './components/AleAdd';
import AleList from './components/AleList';
import AleEdit from './components/AleEdit';
import Review from './components/Review';
import ReviewAdd from './components/ReviewAdd';
import ReviewList from './components/ReviewList';
import ReviewEdit from './components/ReviewEdit';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  const routeStyles = {
    width: "80%",
    backgroundColor: "#660000",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginLeft: "10%",
    border: "3px solid #ff751a",
    textAlign: "center",
    color: "#ffedcc",
  }
  return (

    <div className="App">
    <header className="App-header">
    <Nav/>
    </header>
    <div>
    <Switch>
    <Route exact path='/' component={AleList} />
    <Route path='/aleadd' component={AleAdd} />
    <Route path='/aleedit' component={AleEdit} />
    <Route path='/reviewadd' component={ReviewAdd} />
    <Route path='/reviewedit' component={ReviewEdit} />
    <Route path='/reviewlist' component={ReviewList} />
    <Route component={Error404} />
    </Switch>
    </div>
    </div>
  );
}

export default App;
