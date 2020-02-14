import React from "react";
import Review from "./Review"

const reviewList = [
 {
   name: "Agafya Battleborn",
   rating: "4",
   content: "I tried the Frozen Gladius, and it was a blast!",
 },
 {
   name: "Cadmus Falconhearted",
   rating: "5",
   content: "The wine is quite stellar!",
 },
 {
   name: "Callidora Nyx-walker",
   rating: "3",
   content: "The Aegean Everclear wasn't to my liking.",
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
