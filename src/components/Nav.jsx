import React from "react";

function Nav(){
  return (
    <div className="nav">
      <table className="nav-links">
          <button>Add a drink!</button>
          <button>About us!</button>
          <button>Upcoming Events!</button>
          <button>Add a review!</button>
      </table>
      <p> </p>
      <input type='text' placeholder='Search' />
    </div>
  );
}

export default Nav;
