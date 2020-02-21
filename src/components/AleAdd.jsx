import React from 'react';
import { Link } from 'react-router-dom';

function AleAdd(){
  const aleFormStyles = {
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
    <div style={aleFormStyles}>
    <form>
    <input
    type='text'
    id='name'
    placeholder='Beverage Name'/>
    <input
    type='text'
    id='type'
    placeholder='Beverage Type'/>
    <input
    type='text'
    id='process'
    placeholder='Beverage Process'/>
    <input
    type='text'
    id='serving_size'
    placeholder='Recommended Serving Size'/>
    <input
    type='text'
    id='cost'
    placeholder='Beverage Cost'/>
    <input
    type='text'
    id='alcohol_content'
    placeholder='Beverage Alcohol Content'/>
    <input
    type='text'
    id='quote'
    placeholder='Beverage Description'/>
    <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default AleAdd;
