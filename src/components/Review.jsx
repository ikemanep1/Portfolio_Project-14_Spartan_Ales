import React from "react";
import PropTypes from "prop-types";

function Review(props){
  const review = {
    height: "500px",
      backgroundAttachment: "fixed",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      padding: "32px 0px",
      marginBottom: "32px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      color: "#ffdb4d",
      textAlign: "center"
  }
  return (
    <div style={review}>
      <p>{props.name} had this to say:</p>
      <ul>
      <li>rating: {props.rating}</li>
      <li>{props.content}</li>
      </ul>
    </div>
  );
}

Review.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.string,
  content: PropTypes.string,
};


export default Review;
