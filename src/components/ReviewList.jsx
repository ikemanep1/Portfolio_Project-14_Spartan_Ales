import React from "react";
import Review from "./Review"
import PropTypes from 'prop-types';

function ReviewList(props){
  const review = {
    width: "60%",
    backgroundColor: "#4e504d",
    padding: "20px",
    justifyContent: "center",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "10px",
    border: "3px solid #ff751a",
    color: "#ffedcc",
  }
  return (
       <div style={review}>
         {props.reviewTotal.map((review) =>
           <Review name={review.name}
             rating={review.rating}
             content={review.content}
             key={review.id}/>
         )}
       </div>
     );
}

ReviewList.propTypes = {
  reviewTotal: PropTypes.array
};


export default ReviewList;
