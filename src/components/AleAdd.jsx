import React from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

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
    <form onSubmit={handleNewAleSubmission}>
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

// import React from 'react';
// import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
//
// function NewTicketForm(props) {
//   let _names = null;
//   let _location = null;
//   let _issue = null;
//
//   function handleNewTicketFormSubmission(event) {
//     event.preventDefault();
//     props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4()});
//     _names.value = '';
//     _location.value = '';
//     _issue.value = '';
//   }

//   return (
//     <div>
//       <form onSubmit={handleNewTicketFormSubmission}>
//         <input
//         type='text'
//         id='names'
//         placeholder='Pair Names'
//         ref={(input) => {_names = input;}}/>
//         <input
//         type='text'
//         id='location'
//         placeholder='Location'
//         ref={(input) => {_location = input;}}/>
//         <textarea
//         id='issue'
//         placeholder='Describe your issue.'
//         ref={(textarea) => {_issue = textarea;}}/>
//         <button type='submit'>Help!</button>
//       </form>
//     </div>
//   );
// }
//
// NewTicketForm.propTypes = {
//   onNewTicketCreation: PropTypes.func
// };
//
// export default NewTicketForm;
