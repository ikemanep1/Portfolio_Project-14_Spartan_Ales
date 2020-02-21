import React from 'react';
import Nav from './components/Nav';
import Ale from './components/Ale';
import AleAdd from './components/AleAdd';
import AleList from './components/AleList';
import Review from './components/Review';
import ReviewAdd from './components/ReviewAdd';
import ReviewList from './components/ReviewList';
import NewAleControl from './components/NewAleControl';
import NewReviewControl from './components/NewReviewControl';
import Error404 from './components/Error404';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'moment';
import {Link} from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterAleList: [{
        name: "Frozen Gladius",
        type: "Beer",
        process: "Undistilled",
        serving_size: "12 oz",
        cost: "$7.50",
        alcohol_content: "5 proof",
        quote: "Brewed in the peaks of mount Othrys, this pale lager is perfect for hot summer days."
      },
      {
        name: "Moraitis Chenin blanc",
        type: "Wine",
        process: "Undistilled",
        serving_size: "5 oz",
        cost: "$9.00",
        alcohol_content: "11 proof",
        quote: "Vinified at the legendary Moraitis Winery in Greece, this luxurious wine represents the very essence of satisfaction."
      },
      {
        name: "Cyclops in a Cup",
        type: "Cocktail (Arrack base, with some surprises)",
        process: "Distilled",
        serving_size: "9 oz",
        cost: "$11.50",
        alcohol_content: "42 proof",
        quote: "Somewhat vindictively named, this angry brew is akin to drinking a punch in the face."
      },
      {
        name: "Aegean Everclear",
        type: "Spirit",
        process: "Distilled",
        serving_size: "5 oz",
        cost: "$8.50",
        alcohol_content: "120 proof",
        quote: "Strong enough to send Poseidon himself into a stupor, you'll probably be wasted on the first swig."
      },
      {
        name: "Kraken's lament",
        type: "Literally pure alcohol",
        process: "distilled",
        serving_size: "12 oz",
        cost: "$6.50",
        alcohol_content: "200 proof",
        quote: "Used primarily for treating wounds in battle, to even stand after downing this sickly brew is to withstand the fury of the gods themselves."
      }],
      masterReviewList: [{
         name: "Clarissa",
         rating: "4",
         content: "I tried the Frozen Gladius, and it was a blast!",
       },
       {
         name: "Steve",
         rating: "5",
         content: "The wine is quite stellar!",
       },
       {
         name: "Sandra",
         rating: "2",
         content: "The Aegean Everclear was not to my liking.",
       }]
    };
    this.handleAddingNewAleToList = this.handleAddingNewAleToList.bind(this);
    this.handleAddingNewReviewToList = this.handleAddingNewReviewToList.bind(this);
  }

  handleAddingNewAleToList(newAle) {
    let newMasterAleList = this.state.masterAleList.slice();
    newMasterAleList.push(newAle);
    this.setState({masterAleList: newMasterAleList});
    console.log(this.masterAleList);
  }

  handleAddingNewReviewToList(newReview) {
    let newMasterReviewList = this.state.masterReviewList.slice();
    newMasterReviewList.push(newReview);
    this.setState({masterReviewList: newMasterReviewList});
    console.log(this.masterReviewList);
  }

  render() {
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
  return (<div style={routeStyles} className="App">
    <header className="App-header">
    <Nav/>
    </header>
    <div>
    <Switch>
      <Route exact path='/' render={() =>< AleList aleTotal = {this.state.masterAleList} />}/>
      <Route path='/aleadd' render={()=><NewAleControl onNewAleCreation={this.handleAddingNewAleToList} />} />
      <Route path='/reviewadd' render={()=><NewReviewControl onNewReviewCreation={this.handleAddingNewReviewToList} />} />
      <Route exact path='/reviewlist' render={() =>< ReviewList reviewTotal = {this.state.masterReviewList} />}/>
      <Route component={Error404} />
    </Switch>
    </div>
    </div>
  );
}
}

export default App;
