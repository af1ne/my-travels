import React from "react";
// src/Travels.js
import Travel from "./Travel";

const tableau = [
  {
    destination : "Lilles",
    country : "France", 
    photo : "https://upload.wikimedia.org/wikipedia/commons/f/f8/Lille_vue_gd_place.JPG", 
    distance : "Approximativement 225 bornes"
  },
  {
    destination : "Lyon",
    country : "France", 
    photo : "https://upload.wikimedia.org/wikipedia/commons/5/54/Hotel-dieu_lyon_fourviere.jpg", 
    distance : "Approximativement 500 bornes"
  },
  {
    destination : "Bordeaux",
    country : "France", 
    photo : "https://upload.wikimedia.org/wikipedia/commons/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg", 
    distance : "Approximativement 600 bornes"
  },
  {
    destination : "Berlin",
    country : "Allemagne", 
    photo : "http://www.all-free-photos.com/images/berlin/PI89135-hr.jpg", 
    distance : "Approximativement 1055 bornes"
  },
];

const Travels = () => (
  <div>
    {tableau.map((element, indice) => (

        //<Quote quote={element.quote} image={element.image} character={element.character} />
        <Travel {...element} key={indice} />
    ))}
  </div>
);
export default Travels;