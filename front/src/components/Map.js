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



function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  
  const [markers, setMarkers] = React.useState([]);
  const [routes]=React.useState([]);
  const [times]=React.useState([]);
  const [distances]=React.useState([]);
  const getAdr = async () => {
    try {
      const res = await axios.get("http://localhost:5000/algo");
      //Affichage des PINs des adresses des participants et bowlings
      // let adresses = res.data;
      // let bowling = adresses.pop(); //je récupère l'adresse du bowling dans la data
      setMarkers(res.data);
      
      for(var i=0;i<res.data.length -1;i++){
          calculateRoute(res.data[i],res.data[res.data.length -1]);
      }
      
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
    routes.push(results);
    distances.push(results.routes[0].legs[0].distance.text);
    times.push(results.routes[0].legs[0].duration.text);
  }



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
        zoom={11}
        center={center}
        onLoad={onMapLoad}
        onClick={getAdr}    
      >
        {routes.map((mark ) => (
            <DirectionsRenderer
              directions={mark}
              options={{
                polylineOptions: {
                  zIndex: 50,
                  strokeColor: "#1976D2",
                  strokeWeight: 5,
                },
              }}
            />
            ))
          }
           
           
        {markers.map((marker) => {
        
           <Marker
           key={`${marker.lat}-${marker.lng}`}
           position={{ lat: marker.lat, lng: marker.lng }}
     
         />
         if(marker==markers[markers.length -1]){
          
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            
          />
      
           }
           
          })
      }
      
     
      </GoogleMap>
    </div>
  );
}




export default Map;