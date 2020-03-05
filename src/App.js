import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(()=>{
    var options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 5000
    };

    navigator.geolocation.getCurrentPosition((results)=>{
      setCurrentLocation(results);
      console.log(results);
    },(err)=>{
      console.log('Current browser does not support geotag!',err)
    },options)
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;


/* example data from yelp
{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
}


*/