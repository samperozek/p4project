import React from "react";

import CarCard from "./CarCard";


function CarList({carListToRender}) {

  return (
  <ul className="cards">
      {
        carListToRender.map((eachCar) => {
          return(
            <CarCard
              key ={eachCar.id}
              tractorToRender={eachCar}
            /> )}
        )
      }
    </ul>

    
  );
}

export default CarList;

