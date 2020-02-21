import React from 'react';
import { Link } from 'react-router-dom';

function ReviewAdd(){
  const reviewFormStyles = {
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
    alignItems: "center"
  }
  return (
    <div style={reviewFormStyles}>
    <form>
    <input
    type='text'
    id='name'
    placeholder='Your Name'/>
    <input
    type='text'
    id='type'
    placeholder='Beverage Rating'/>
    <input
    type='text'
    id='process'
    placeholder='Review content'/>
    <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default ReviewAdd;
