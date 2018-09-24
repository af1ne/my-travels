import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <div><img src={photo} alt="photo" /></div>
    <figcaption>
      <h2>{destination}</h2>
      <h3>{country}</h3>
      <p>{distance}</p>
    </figcaption>
  </figure>
);

export default Travel;