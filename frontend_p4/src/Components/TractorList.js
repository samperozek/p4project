import React from "react";

import TractorCard from "./TractorCard";


function TractorList({tractorListToRender}) {

  return (
  <ul className="cards">
      {
        tractorListToRender.map((eachTractor) => {
          return(
            <TractorCard
              key ={eachTractor.id}
              tractorToRender={eachTractor}
            /> )}
        )
      }
    </ul>

    
  );
}

export default TractorList;

