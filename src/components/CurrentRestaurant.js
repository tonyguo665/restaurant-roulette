import React from "react";
import YelpStars from "./YelpStars.js";

function CurrentRestaurant(props) {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-128x128">
          <img
            src={props.currentRest ? props.currentRest.image_url : null}
            alt="nothing to show"
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.currentRest ? props.currentRest.name : null}</strong>
            <br />
            <YelpStars rating={props.currentRest ? props.currentRest.rating : null} />|
            &nbsp;
            <small>
              {props.currentRest ? props.currentRest.review_count : null} Reviews
            </small>
            <br />
            <small>
              {props.currentRest ? props.currentRest.price : null} | &nbsp;
              {props.currentRest
                ? props.currentRest.categories.map((category, i) => {
                    if (i === props.currentRest.categories.length - 1) {
                      return `${category.title} `;
                    } else {
                      return `${category.title}, `;
                    }
                  })
                : null}
              <br />
            </small>
            {props.currentRest
              ? `${props.currentRest.location.display_address.join()} - ${
                  props.currentRest.display_phone
                }`
              : null}
            <br />
            About{" "}
            {props.currentRest
              ? Math.round(props.currentRest.distance / 160.9) / 10
              : null}{" "}
            miles away!
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left"></div>
        </nav>
      </div>
      <div className="media-right">
        <button
          className="button is-medium is-danger is-outlined is-rounded"
          onClick={props.randomizeRestaurant}
        >
          Pick A Random Place!
        </button>
      </div>
    </article>
  );
}

export default CurrentRestaurant;
