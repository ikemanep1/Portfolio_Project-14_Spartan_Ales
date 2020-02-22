import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationAdd(props){
  const confirm = {
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
    <div style={confirm}>
      <p>Are you sure about adding this?</p>
      <button onClick={props.onAddConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationAdd.propTypes = {
  onAddConfirmation: PropTypes.func
};

export default ConfirmationAdd;
