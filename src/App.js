import React from 'react';
import Nav from './components/Nav';
import Ale from './components/Ale';
import AleAdd from './components/AleAdd';
import AleList from './components/AleList';
import Review from './components/Review';
import ReviewAdd from './components/ReviewAdd';
import ReviewList from './components/ReviewList';
import Error404 from './components/Error404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'moment';
import {Link, withRouter} from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterAleList: [],
      masterReviewList: []
    };
    this.handleAddingNewAleToList = this.handleAddingNewAleToList.bind(this);
    this.handleAddingNewReviewToList = this.handleAddingNewReviewToList.bind(this);

  }

  handleAddingNewAleToList(newAle) {
    let newMasterAleList = this.state.masterAleList.slice();
    newAle.formattedSinceBirth = (newAle.sinceBirth).fromNow(true);

    newMasterAleList.push(newAle);
    this.setState({masterAleList: newMasterAleList});
  }

  handleAddingNewReviewToList(newReview) {
    let newMasterReviewList = this.state.masterReviewList.slice();
    newReview.formattedSinceBirth = (newReview.sinceBirth).fromNow(true);

    newMasterReviewList.push(newReview);
    this.setState({masterReviewList: newMasterReviewList});
  }

  // onTamaEat = (a,b,c,d) => {
  //   let newMasterTamaList = this.state.masterTamaList.slice();
  //   newMasterTamaList.forEach((tama) => tama.overallHealth += a);
  //   newMasterTamaList.forEach((tama) => tama.physPain += b);
  //   newMasterTamaList.forEach((tama) => tama.mess += c);
  //   newMasterTamaList.forEach((tama) => tama.emoPain += d);
  //   this.setState({masterTamaList: newMasterTamaList});
  // }
  componentDidMount() {
    this.sinceBirthUpdateTimer = setInterval(() => this.updateBirthElapsedTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.sinceBirthUpdateTimer);
  }

  // updateHealthByAging() {
  //   console.log('hi');
  // }
  // updateBirthElapsedTime() {
  //   this.gameOver();
  //   console.log('yo');
  //   let newMasterTamaList = this.state.masterTamaList.slice();
  //   newMasterTamaList.forEach((tama) => tama.formattedSinceBirth = (tama.sinceBirth).fromNow(true));
  //   newMasterTamaList.forEach((tama) => tama.overallHealth -= 5);
  //   newMasterTamaList.forEach((tama) => tama.emoPain += 5);
  //   newMasterTamaList.forEach((tama) => tama.physPain += 10);
  //   newMasterTamaList.forEach((tama) => tama.mess += 10);
  //   this.setState({masterTamaList: newMasterTamaList});
  // }

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
    <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() =>< AleList aleList = {
          this.state.masterAleList
        } />}/>
      <Route path='/aleadd' render={() =>< AleAdd onAleCreation = {
          this.handleAddingNewAleToList
        } />}/>
      <Route path='/reviewadd' render={() =>< ReviewAdd onReviewCreation = {
          this.handleAddingNewReviewToList
        } />}/>
      <Route path='/reviewlist' render={() =>< ReviewList reviewList = {
          this.state.masterReviewList
        } />}/>
      <Route component={Error404} />
    </Switch>
    </BrowserRouter>
    </div>
    </div>
  );
}
}

export default App;
