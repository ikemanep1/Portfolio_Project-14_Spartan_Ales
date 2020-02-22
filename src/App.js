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
import {Button} from 'react-bootstrap';
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
        size: "12 oz",
        cost: "$7.50",
        content: "5 proof",
        quote: "Brewed in the peaks of mount Othrys, this pale lager is perfect for hot summer days.",
        keg: 100
      },
      {
        name: "Moraitis Chenin blanc",
        type: "Wine",
        process: "Undistilled",
        size: "5 oz",
        cost: "$9.00",
        content: "11 proof",
        quote: "Vinified at the legendary Moraitis Winery in Greece, this luxurious wine represents the very essence of satisfaction.",
        keg: 100
      },
      {
        name: "Cyclops in a Cup",
        type: "Cocktail (Arrack base, with some surprises)",
        process: "Distilled",
        size: "9 oz",
        cost: "$11.50",
        content: "42 proof",
        quote: "Somewhat vindictively named, this angry brew is akin to drinking a punch in the face.",
        keg: 100
      },
      {
        name: "Aegean Everclear",
        type: "Spirit",
        process: "Distilled",
        size: "5 oz",
        cost: "$8.50",
        content: "120 proof",
        quote: "Strong enough to send Poseidon himself into a stupor, you'll probably be wasted on the first swig.",
        keg: 100
      },
      {
        name: "Kraken's lament",
        type: "Literally pure alcohol",
        process: "distilled",
        size: "12 oz",
        cost: "$6.50",
        content: "200 proof",
        quote: "Used primarily for treating wounds in battle, to even stand after downing this sickly brew is to withstand the fury of the gods themselves.",
        keg: 100
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

  componentDidMount() {
    this.sinceBirthUpdateTimer = setInterval(() => this.updateBirthElapsedTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.sinceBirthUpdateTimer);
  }

  updateBirthElapsedTime() {
    let newMasterAleList = this.state.masterAleList.slice();
    newMasterAleList.forEach((ale) => ale.keg += 10);
    this.setState({masterAleList: newMasterAleList});
  }
  purchase() {
    let newMasterAleList = this.state.masterAleList.slice();
    newMasterAleList.forEach((ale) => ale.keg -= 200);
    this.setState({masterAleList: newMasterAleList});
  }
  render() {
    const headerStyle = {
      textAlign: "center",
      width: "60%",
      backgroundColor: "#4e504d",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      marginLeft: "20%",
      marginRight: "20%",
      marginTop: "20px",
      border: "3px solid #ff751a",
    }
    const buttonStyle = {
      border: "3px solid #ff751a",
      color: "white",
      backgroundColor: "#cc0000",
      marginLeft: "10px"
    }
  return (
    <div className="App">
    <header style={headerStyle} className="App-header">
    <Nav/>
    <Button style={buttonStyle} onClick={() => this.purchase()}>Buy our collection!</Button>
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
