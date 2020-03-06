import React from "react";

function YelpStars(props) {
  const size = `regular`;
  const wholeNum = Math.floor(props.rating);
  const half = (props.rating * 10) % 10 !== 0 ? true : false;

  return (
    <>
      <img
        alt="nothing to show"
        src={
          process.env.PUBLIC_URL +
          `/yelp_stars/web_and_ios/${size}/${size}_${wholeNum}${half ? "_half" : ""}.png`
        }
      />
      &nbsp;
    </>
  );
}

export default YelpStars;
