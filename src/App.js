import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Ale from './components/Ale';
import AleAdd from './components/AleAdd';
import AleList from './components/AleList';
import AleEdit from './components/AleEdit';
import ReviewAdd from './components/ReviewAdd';
import ReviewList from './components/ReviewList';
import ReviewEdit from './components/ReviewEdit';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
  <Header />
  <Nav />
  <Switch>
    <Route exact path='/' component={Ale} />
    <Route path='/aleadd' component={AleAdd} />
    <Route path='/alelist' component={AleList} />
    <Route path='/aleedit' component={AleEdit} />
    <Route path='/reviewadd' component={ReviewAdd} />
    <Route path='/reviewlist' component={ReviewList} />
    <Route path='/reviewedit' component={ReviewEdit} />
  </Switch>
  </div>
  );
}

export default App;
