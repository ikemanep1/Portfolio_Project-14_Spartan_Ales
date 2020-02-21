import React from "react";
import { Link } from 'react-router-dom';


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
    marginLeft: "10px",
    backgroundColor: "black",
    color: "#ff8533",
    padding: "5px;",
    textDecoration: 'none'
  }
  const social = {
    backgroundColor: "black",
    color: "#ff8533",
  }
  return (
    <div className="nav" style={navStyles}>
      <table className="nav-links">
           <Link to="/" style={navButtons}>Home</Link>
           <Link to="/aleadd" style={navButtons}>Add a drink!</Link>
           <Link to="/reviewlist" style={navButtons}>About us!</Link>
      </table>
      <a style={social} href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i style={social} className="fab fa-facebook"></i></a>
      <input style={navSearchStyles} type='text' placeholder='Search' />
      <button style={navButtons}>Go!</button>
    </div>
  );
}

export default Nav;
