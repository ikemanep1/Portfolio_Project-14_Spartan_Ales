import React from 'react';
import Nav from './components/Nav';
import Ale from './components/Ale';
import AleAdd from './components/AleAdd';
import AleList from './components/AleList';
import NewAleControl from './components/NewAleControl';
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
      masterAleList: []
    };
    this.handleAddingNewAleToList = this.handleAddingNewAleToList.bind(this);
  }

  handleAddingNewAleToList(newAle) {
    let newMasterAleList = this.state.masterAleList.slice();
    newAle.formattedSinceBirth = (newAle.sinceBirth).fromNow(true);

    newMasterAleList.push(newAle);
    this.setState({masterAleList: newMasterAleList});
  }

  componentDidMount() {
    this.sinceBirthUpdateTimer = setInterval(() => this.updateBirthElapsedTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.sinceBirthUpdateTimer);
  }

  // updateHealthByAging() {
  //   console.log('hi');
  // }
  updateBirthElapsedTime() {
    console.log('yo');
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
      <Route exact path='/' render={() =>< AleList aleList = {this.state.masterAleList} />}/>
      <Route path='/aleadd' render={()=><NewAleControl onNewAleCreation={this.handleAddingNewAleToList} />} />
      <Route component={Error404} />
    </Switch>
    </div>
    </div>
  );
}
}

export default App;
