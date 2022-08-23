import React from "react";

function CarCard({carToRender}) {
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={carToRender.image}
          alt={carToRender.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{carToRender.name}</div> 
        </div>
      </div>
    </li>
  );
}

export default CarCard;