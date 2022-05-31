// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
import cars from "./practice";

//const [cat, dog] = animals;
//const { name: catName, sound: catSound } = cat;

//const { name: dogName, sound: dogSound } = dog;

//console.log(dogName);

const [honda, tesla] = cars;
console.log(cars);
const {
  model: hondaModel,
  coloursByPopularity: {hondaColour1="black", hondaColour2="silver"},
  
  speedStats: { topSpeed: hondaSpeed, zeroToSixty: hondaZero }
} = honda;

const {
  model: teslaModel,
  coloursByPopularity: {teslaColour1="red", teslaColour2="white"},
  speedStats: { topSpeed: teslaSpeed, zeroToSixty: teslaZero }
} = tesla;


 ReactDOM.render(
   <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
     </tr>
     <tr>
       <td>{teslaModel}</td>
       <td>{teslaSpeed}</td>
       <td>{teslaColour1}</td>
     </tr>
     <tr>
       <td>{hondaModel}</td>
       <td>{hondaSpeed}</td>
       <td>{hondaColour1}</td>
     </tr>
   </table>,
   document.getElementById("root")
 );
