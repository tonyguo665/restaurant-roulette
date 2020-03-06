import React from "react";
import RestaurantListEntry from "./RestaurantListEntry.js";

function RestaurantList(props) {
  return (
    <div className="container" style={{ overflow: "auto", height: "90vh" }}>
      {props.restaurantList.map((restaurant, i) => {
        return (
          <div key={i}>
            <RestaurantListEntry restaurant={restaurant} setCurrentRest={props.setCurrentRest}/>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantList;
