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
  name: PropTypes.string,
  type: PropTypes.string,
  process: PropTypes.string,
  serving_size: PropTypes.string,
  cost: PropTypes.string,
  alcohol_content: PropTypes.string,
  quote: PropTypes.string
};


export default Ale;
