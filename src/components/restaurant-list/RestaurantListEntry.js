import React from 'react';
import YelpStars from "../YelpStars.js";

function RestaurantListEntry(props) {
  const restaurantClick = () =>{
    props.setCurrentRest(props.restaurant);
  }

  return (
    <article className="media" style={{paddingBottom:"10px"}}>
      <figure className="media-left">
        <p className="image is-128x128">
          <img
            src={props.restaurant ? props.restaurant.image_url : null}
            alt="nothing to show"
            onClick={restaurantClick}
            style={{cursor:"grab"}}
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.restaurant ? props.restaurant.name : null}</strong>
            <br />
            <YelpStars rating={props.restaurant ? props.restaurant.rating : null} />|
            &nbsp;
            <small>
              {props.restaurant ? props.restaurant.review_count : null} Reviews
            </small>
            <br />
            <small>
              {props.restaurant ? props.restaurant.price : null} | &nbsp;
              {props.restaurant
                ? props.restaurant.categories.map((category, i) => {
                    if (i === props.restaurant.categories.length - 1) {
                      return `${category.title} `;
                    } else {
                      return `${category.title}, `;
                    }
                  })
                : null}
              <br />
            </small>
            {props.restaurant
              ? `${props.restaurant.location.display_address.join()} - ${
                  props.restaurant.display_phone
                }`
              : null}
            <br />
            About{" "}
            {props.restaurant
              ? Math.round(props.restaurant.distance / 160.9) / 10
              : null}{" "}
            miles away!
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left"></div>
        </nav>
      </div>
    </article>
  );
}

export default RestaurantListEntry;