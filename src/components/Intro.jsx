import React from "react";

function Intro(){
  const introStyles = {
    backgroundImage: "url('Polis.jpg')",
    height: "500px",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    marginBottom: "32px",
    margin: "10%",
    textAlign: "center",
    border: "3px solid #ff751a",
    fontFamily: "fantasy",
    color: "#e65c00",
    fontSize:"35px"
  }
  return (
    <div className="intro" style={introStyles}>
      <h1>SPARTAN ALE</h1>
    </div>
  );
}

export default Intro;
