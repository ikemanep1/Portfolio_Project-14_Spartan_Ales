import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function ReviewAdd(props) {
  let _name = null;
  let _rating = null;
  let _content = null;

  function handleNewReviewSubmission(event) {
    event.preventDefault();
    props.onReviewCreation({name: _name.value, rating: _rating.value, content: _content.value, id: v4()});
    _name.value = '';
    _rating.value = '';
    _content.value = '';
  }
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
    <form onSubmit={handleNewReviewSubmission}>
    <input
    type='text'
    id='name'
    placeholder='Name'
    ref={(input) => {_name = input;}}/>
    <input
    type='text'
    id='rating'
    placeholder='Rating'
    ref={(input) => {_rating = input;}}/>
    <input
    type='text'
    id='content'
    placeholder='Content'
    ref={(input) => {_content = input;}}/>
    <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

ReviewAdd.propTypes = {
  onReviewCreation: PropTypes.func
};

export default ReviewAdd;
