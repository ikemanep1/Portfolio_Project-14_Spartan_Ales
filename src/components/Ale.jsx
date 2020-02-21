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
    <li>{props.type}</li>
    <li>{props.process}</li>
    <li>{props.serving_size}</li>
    <li>{props.cost}</li>
    <li>{props.alcohol_content}</li>
    <li>{props.quote}</li>
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
  quote: PropTypes.string.isRequired
};


export default Ale;
