import React, { useState } from "react";
import Preferences from "./Preferences.js";
import axios from "axios";

function NavBar(props) {
  const initPref = {
    radius: "3212",
    category: "food,restaurants",
    price: [1, 2, 3, 4],
    open_now: true,
    sort_by: "rating"
  };
  const [searchterm, setSearchterm] = useState("");
  const [preferences, setPreferences] = useState(initPref);

  const searchChangeHandle = (e) => {
    setSearchterm(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    axios.get(
      `http://${process.env.REACT_APP_SERVER_IP}:3001`,
      {
        params: {
          latitude: props.currentLocation.coords.latitude,
          longitude: props.currentLocation.coords.longitude,
          radius: preferences.radius,
          categories: preferences.category,
          price: preferences.price.join(),
          open_now: preferences.openNow,
          sort_by: preferences.sortby,
          term:searchterm
        }
      }
    )
    .then((results)=>{
      props.setRestaurantList(results.data)
    })
    .catch((err)=>{
      console.log(err)
    });
    setSearchterm("");
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img
            src="https://st3.depositphotos.com/1915171/12894/v/950/depositphotos_128941160-stock-illustration-burger-food-symbol.jpg"
            alt="no symbol"
          />
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <Preferences preferences={preferences} setPreferences={setPreferences} />
          <form className="navbar-item" onSubmit={submitHandle}>
            <label>
              Search:
              <input type="text" value={searchterm} onChange={searchChangeHandle} />
            </label>
            <input type="submit" value="Find Me Food" />
          </form>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <p>USERNAME</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
