import React from "react";
import Review from "./Review"

const reviewList = [
 {
   name: "Clarissa",
   rating: "4",
   content: "I tried the Frozen Gladius, and it was a blast!",
 },
 {
   name: "Steve",
   rating: "5",
   content: "The wine is quite stellar!",
 },
 {
   name: "Sandra",
   rating: "2",
   content: "The Aegean Everclear was not to my liking.",
 }
];

function ReviewList(){
  return (
       <div>
         {reviewList.map((review, index) =>
           <Review name={review.name}
             rating={review.rating}
             content={review.content}
             key={index}/>
         )}
       </div>
     );
}

export default ReviewList;
