import React, {useState} from "react";

function TractorCard({tractorToRender}) {
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={tractorToRender.image}
          alt={tractorToRender.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{tractorToRender.name}</div> 
        </div>
      </div>
    </li>
  );
}

export default TractorCard;