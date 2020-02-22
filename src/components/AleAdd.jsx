import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function AleAdd(props) {
  let _name = null;
  let _type = null;
  let _process = null;
  let _size = null;
  let _cost = null;
  let _content = null;
  let _quote = null;
  let _keg = null;


  function handleNewAleSubmission(event) {
    event.preventDefault();
    props.onNewAleCreation({name: _name.value, type: _type.value, process: _process.value, size: _size.value, cost: _cost.value, content: _content.value, quote: _quote.value, keg: _keg.value, id: v4()});
    _name.value = '';
    _type.value = '';
    _process.value = '';
    _size.value = '';
    _cost.value = '';
    _content.value = '';
    _quote.value = '';
    _keg.value = '';
  }
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
    <form onSubmit={handleNewAleSubmission}>
    <input
    type='text'
    id='name'
    placeholder='Beverage Name'
    ref={(input) => {_name = input;}}/>
    <input
    type='text'
    id='type'
    placeholder='Beverage Type'
    ref={(input) => {_type = input;}}/>
    <input
    type='text'
    id='process'
    placeholder='Beverage Process'
    ref={(input) => {_process = input;}}/>
    <input
    type='text'
    id='serving size'
    placeholder='Recommended Serving Size'
    ref={(input) => {_size = input;}}/>
    <input
    type='text'
    id='cost'
    placeholder='Beverage Cost'
    ref={(input) => {_cost = input;}}/>
    <input
    type='text'
    id='alcohol_content'
    placeholder='Beverage Alcohol Content'
    ref={(input) => {_content = input;}}/>
    <input
    type='text'
    id='quote'
    placeholder='Beverage Description'
    ref={(input) => {_quote = input;}}/>
    <input
    type='text'
    id='keg'
    placeholder='Total Units'
    ref={(input) => {_keg = input;}}/>
    <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

AleAdd.propTypes = {
  onNewAleCreation: PropTypes.func
};

export default AleAdd;
