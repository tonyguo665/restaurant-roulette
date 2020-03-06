import React, { useState, useEffect } from "react";
import NavBar from "./components/nav-bar/NavBar.js";
import RestaurantList from "./components/restaurant-list/RestaurantList.js";
import Map from "./components/Map.js";
import CurrentRestaurant from "./components/CurrentRestaurant.js";
import initialData from "./init.js"
import axios from "axios";
import "./App.css";

function App() {

  const [restaurantList, setRestaurantList] = useState([]);
  const [currentRest, setCurrentRest] = useState(initialData.initCurrRest);
  const [currentLocation, setCurrentLocation] = useState(initialData.initCoords);

  useEffect(() => {
    var options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 5000
    };
    navigator.geolocation.getCurrentPosition(
      (results) => {
        setCurrentLocation(results);
      },
      (err) => {
        console.log("Current browser does not support geotaging!", err);
      },
      options
    );
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://${process.env.REACT_APP_SERVER_IP}:3001`,
        {
          params: {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            categories: "food,restaurants",
          }
        }
      )
      .then((results) => {
        setRestaurantList(results.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }, [currentLocation]);
  useEffect(() => {
    setCurrentRest(restaurantList[0]);
  }, [restaurantList]);

  const randomizeRestaurant = () =>{
    let randomNum = Math.floor(Math.random() * (restaurantList.length));
    setCurrentRest(restaurantList[randomNum]);
  }
  return (
    <div className="App">
      <NavBar setRestaurantList={setRestaurantList} currentLocation={currentLocation} />
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-three-fifths">
            <CurrentRestaurant currentRest={currentRest} randomizeRestaurant={randomizeRestaurant}/>
            <Map currentRest={currentRest} currentLocation={currentLocation}/>
          </div>
          <div className="column is-two-fifths">
            <RestaurantList restaurantList={restaurantList} setCurrentRest={setCurrentRest}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;