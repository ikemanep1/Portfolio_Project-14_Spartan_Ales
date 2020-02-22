import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

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
  const navButtons = {
    marginLeft: "10px",
    marginRight: "20px",
    border: "3px solid #ff751a",
    color: "white",
    backgroundColor: "#cc0000",
    padding: "5px;",
    textDecoration: 'none'
  }
  return (
    <div style={confirm}>
      <p>Are you sure about adding this?</p>
      <Button style={navButtons} onClick={props.onAddConfirmation}>Yes</Button>
    </div>
  );
}

ConfirmationAdd.propTypes = {
  onAddConfirmation: PropTypes.func
};

export default ConfirmationAdd;
