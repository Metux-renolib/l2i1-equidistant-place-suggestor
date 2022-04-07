import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "@react-google-maps/api";
import{useEffect, useState} from "react";
import axios from "axios";

const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh",
  width: "50vw",
};

const center = {
  lat: 48.8588897,
  lng: 2.320041,
};
const point={
    lat:48.858093,
    lng:	2.294694,
}

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  
  const [markers, setMarkers] = React.useState([]);
  
  const [directions, setDirections] = React.useState([]);
  const getAdr = async () => {
    try {
      const res = await axios.get("http://localhost:5000/algo");
      setMarkers(res.data);
      
    } catch (e) {
      console.log(e);
    }
  };

  async function calculateRoute(adresse,point) {
    
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: adresse,
      destination: point,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirections(results)
    /*setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)*/
  }

  for(let j = 0; j<markers.length -1 ; j++){
       calculateRoute(markers[i],markers[markers.length -1]);
    }


  const mapRef = React.useRef();
 /* const fetchDirections = (marker) => {
    if (!point ) return;
   //eslint-disable-next-line no-undef
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: marker,
        destination: point,
        //eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };*/

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);



  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        onLoad={onMapLoad}
        onClick={getAdr}    
      >
        {directions.map((direction) => (
          
            <DirectionsRenderer
              directions={direction}
              options={{
                polylineOptions: {
                  zIndex: 50,
                  strokeColor: "#1976D2",
                  strokeWeight: 5,
                },
              }}
            />
            ) )} 
        
        {markers.map((marker) => (
          
          
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
          
          />
          
        ))
      }
        
      </GoogleMap>
    </div>
  );
}




export default Map;