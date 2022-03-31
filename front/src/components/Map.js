import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
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


function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  

 
  const [markers, setMarkers] = React.useState([]);
  const getAdr = async () => {
    try {
      const res = await axios.get("http://localhost:5000/map");
      setMarkers(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    window.addEventListener("click", getAdr);
    return () => {
      window.removeEventListener("click", getAdr);
    };
  }, [markers]);

  
  const mapRef = React.useRef();
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
        zoom={8}
        center={center}
        onLoad={onMapLoad}
        
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            
          />
        ))}
        <Marker
        position={{lat: 48.8588897,
          lng: 2.320041,}}
        />
        
      </GoogleMap>
    </div>
  );
}





export default Map;