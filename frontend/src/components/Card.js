import React from "react";

function Card({ imageUrl, dateFound, description }) {
  return (
    <div>
      <p>{imageUrl}</p>
      <p>{dateFound}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
