import React from "react";
import Ale from "./Ale";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AleList(props){
  const aleIntro = {
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
    marginBottom: "20px"
  }
  const introStyles = {
    backgroundImage: "url('Polis.jpg')",
    height: "500px",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    marginBottom: "32px",
    margin: "5%",
    textAlign: "center",
    fontFamily: "fantasy",
    color: "#e65c00",
    fontSize:"35px"
  }
  const navButtons = {
    height: "25px",
    marginLeft: "10px",
    color: "#ff8533",
    padding: "5px;",
    textDecoration: 'none'
  }
  return (
       <div>
       <div className="intro" style={introStyles}>
         <h1>SPARTAN ALE</h1>
       </div>
         <p style={aleIntro}>Greetings! Welcome to Spartan Ale, one of the world's top rated Hellenic alcohol distrubutors. We sell all kinds of luxurious beverages. Whether you're out to try something new, or have an event to cater, we got you covered! Below is a list of some of our most featured items. Pick your poison!</p>
         {props.aleTotal.map((ale) =>
           <Ale name={ale.name}
             type={ale.type}
             process={ale.process}
             serving_size={ale.size}
             cost={ale.cost}
             alcohol_content={ale.content}
             quote={ale.quote}
             keg={ale.keg}
             key={ale.id}/>
         )}
         <div style={aleIntro}>
         <p>Returning customer? Feel free to leave a<Link to="/reviewadd" style={navButtons}>review.</Link> Your experience matters to us.</p>
         </div>
       </div>
     );
}

AleList.propTypes = {
  aleTotal: PropTypes.array
};

export default AleList;
