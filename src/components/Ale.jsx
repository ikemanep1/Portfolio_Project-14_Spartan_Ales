import React from "react";
import PropTypes from "prop-types";

function Ale(props){
  return (
    <div className="AleSingular">
    <p>{props.name}</p>
    <p>{props.type}</p>
    <p>{props.process}</p>
    <p>{props.alcohol_content}</p>
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
