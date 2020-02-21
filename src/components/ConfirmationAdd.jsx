import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationAdd(props){
  return (
    <div>
      <p>Are you sure about adding this?</p>
      <button onClick={props.onAddConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationAdd.propTypes = {
  onAddConfirmation: PropTypes.func
};

export default ConfirmationAdd;
