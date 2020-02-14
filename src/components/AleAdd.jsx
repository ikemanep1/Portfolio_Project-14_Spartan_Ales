import React from 'react';

function AleAdd(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Drink Name:'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default AleAdd;
// <li>{props.type}</li>
// <li>{props.process}</li>
// <li>{props.serving_size}</li>
// <li>{props.cost}</li>
// <li>{props.alcohol_content}</li>
// <li>{props.quote}</li>
