import React from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';


function Nav(){
  const navButtons = {
    marginLeft: "10px",
    marginRight: "20px",
    border: "3px solid #ff751a",
    color: "white",
    backgroundColor: "#cc0000",
    padding: "5px;",
    textDecoration: 'none'
  }
  const social = {
    backgroundColor: "black",
    color: "#ff8533",
  }
  return (
    <div className="nav">
      <table className="nav-links">
           <Link to="/"><Button style={navButtons}>Home</Button></Link>
           <Link to="/aleadd"><Button style={navButtons}>Add Drink</Button></Link>
           <Link to="/reviewlist"><Button style={navButtons}>Client Praise</Button></Link>
      </table>
      <a style={social} href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i style={social} className="fab fa-facebook"></i></a>
    </div>
  );
}

export default Nav;
