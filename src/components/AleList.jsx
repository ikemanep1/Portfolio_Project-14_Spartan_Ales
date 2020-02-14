import React from "react";
import Ale from "./Ale"

const aleTotal = [
 {
   name: "Frozen Gladius",
   type: "Beer",
   process: "Undistilled",
   serving_size: "12 oz",
   cost: "$7.50",
   alcohol_content: "5 proof",
   quote: "Brewed in the peaks of mount Othrys, this pale lager is perfect for hot summer days."
 },
 {
   name: "Moraitis Chenin blanc",
   type: "Wine",
   process: "Undistilled",
   serving_size: "5 oz",
   cost: "$9.00",
   alcohol_content: "11 proof",
   quote: "Vinified at the legendary Moraitis Winery in Greece, this luxurious wine represents the very essence of satisfaction."
 },
 {
   name: "Cyclops in a Cup",
   type: "Cocktail (Arrack base, with some surprises)",
   process: "Distilled",
   serving_size: "9 oz",
   cost: "$11.50",
   alcohol_content: "42 proof",
   quote: "Somewhat vindictively named, this angry brew is akin to drinking a punch in the face."
 },
 {
   name: "Aegean Everclear",
   type: "Spirit",
   process: "Distilled",
   serving_size: "5 oz",
   cost: "$8.50",
   alcohol_content: "120 proof",
   quote: "Strong enough to send Poseidon himself into a stupor, you'll probably be wasted on the first swig."
 },
 {
   name: "Kraken's lament",
   type: "Literally pure alcohol",
   process: "distilled",
   serving_size: "12 oz",
   cost: "$6.50",
   alcohol_content: "200 proof",
   quote: "Used primarily for treating wounds in battle, to even stand after downing this sickly brew is to withstand the fury of the gods themselves."
 }
];

function AleList(){
  const aleIntro = {
    width: "80%",
    backgroundColor: "#660000",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginLeft: "10%",
    border: "3px solid #ff751a",
    textAlign: "center",
    color: "#ffedcc",
  }
  const introStyles = {
    backgroundImage: "url('Polis.jpg')",
    height: "500px",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    marginBottom: "32px",
    margin: "5%",
    textAlign: "center",
    fontFamily: "fantasy",
    color: "#e65c00",
    fontSize:"35px"
  }
  return (
       <div>
       <div className="intro" style={introStyles}>
         <h1>SPARTAN ALE</h1>
       </div>
         <p style={aleIntro}>Greetings! Welcome to Spartan Ale, one of the world's top rated Hellenic alcohol distrubutors. We sell all kinds of luxurious beverages. Whether you're out to try something new, or have an event to cater, we got you covered! Below is a list of some of our most featured items. Pick your poison!</p>
         {aleTotal.map((ale, index) =>
           <Ale name={ale.name}
             type={ale.type}
             process={ale.process}
             serving_size={ale.serving_size}
             cost={ale.cost}
             alcohol_content={ale.alcohol_content}
             quote={ale.quote}
             key={index}/>
         )}
          <p style={aleIntro}>Returning customer? Feel free to leave a review! Your experience matters to us.</p>
       </div>
     );
}

export default AleList;
