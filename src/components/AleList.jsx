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
   quote: "Vinified at the legendary Moraitis Winery in Greece, this luxurious wine is the very essence of satisfaction."
 },
 {
   name: "Cyclops in a Cup",
   type: "Cocktail (Arrack base, with some surprises)",
   process: "Distilled",
   serving_size: "9 oz",
   cost: "$11.50",
   alcohol_content: "42 proof",
   quote: "Somewhat vindictively named, this angry brew is akin to drinking a punch to the face."
 },
 {
   name: "Aegean Everclear",
   type: "Spirit",
   process: "distilled",
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
  return (
       <div>
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
       </div>
     );
}

export default AleList;
