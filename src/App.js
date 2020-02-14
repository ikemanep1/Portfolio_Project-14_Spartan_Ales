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
  var appStyle = {
        
      }
  return (

    <div className="App" style={appStyle}>
    <header className="App-header">
    <Nav />
    </header>
    <div>
    <AleList/>
    </div>
    <div>
    <ReviewList/>
    </div>
    <Switch>
    <Route exact path='/' component={Ale} />
    <Route path='/aleadd' component={AleAdd} />
    <Route path='/aleedit' component={AleEdit} />
    <Route path='/reviewadd' component={ReviewAdd} />
    <Route path='/reviewedit' component={ReviewEdit} />
    <Route component={Error404} />
    </Switch>
    </div>
  );
}

export default App;
