import React from "react";
import PropTypes from "prop-types";

function Ale(props){
  const aleSingular = {
    width: "60%",
    backgroundColor: "#4e504d",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "10px",
    border: "3px solid #ff751a",
    color: "#ffedcc",
  }
  return (
    <div style={aleSingular}>
    <p>{props.name}</p>
    <ul>
    <p>Type: {props.type}</p>
    <p>Trait: {props.process}</p>
    <p>Recommended serving size: {props.serving_size}</p>
    <p>Price per unit: {props.cost}</p>
    <p>Alcohol content: {props.alcohol_content}</p>
    <p>"{props.quote}"</p>
    <p>Stock: {props.keg}</p>
    </ul>
  </div>
   );
}

Ale.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  process: PropTypes.string.isRequired,
  serving_size: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  alcohol_content: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  keg: PropTypes.number.isRequired
};


export default Ale;
