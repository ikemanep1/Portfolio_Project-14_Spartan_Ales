import React from "react";

function Nav(){
  const navStyles = {
    width: "60%",
    backgroundColor: "#4e504d",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "20px",
    border: "3px solid #ff751a",
  }
  const navSearchStyles = {
    marginLeft: "50px",
    height: "15px"
  }
  const navButtons = {
    height: "25px",
    borderRadius: "5px",
    marginLeft: "10px",
    backgroundColor: "black",
    color: "#ff8533"
  }
  return (
    <div className="nav" style={navStyles}>
      <table className="nav-links">
          <button style={navButtons}>Add a drink!</button>
          <button style={navButtons}>About us!</button>
          <button style={navButtons}>Upcoming Events!</button>
          <button style={navButtons}>Add a review!</button>
      </table>
      <p> </p>
      <input style={navSearchStyles} type='text' placeholder='Search' />
      <button style={navButtons}>Go!</button>
    </div>
  );
}

export default Nav;
