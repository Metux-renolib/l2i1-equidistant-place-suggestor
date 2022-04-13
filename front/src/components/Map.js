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
import ReactDOM from 'react-dom';


const libraries = ["places"];
const mapContainerStyle = {
  height: "90vh",
  width: "90vw",
};

const center = {
  lat: 48.8588897,
  lng: 2.320041,
};

let infoBowling = undefined;
let jourSortie = undefined;

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const testOpen = () =>{
    if(infoBowling.opening_hours.open_now){
      return "oui"
    }
    else{
      return "non"
    }
  }
  
  const [markers, setMarkers] = React.useState([]);
  const [routes]=React.useState([]);
  const [times]=React.useState([]);
  const [distances]=React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [pings]= React.useState([]);
  const [color]= React.useState([]);
  
      color.push("#1976d2");
      color.push("#b919d2");
      color.push("#d21982");
      color.push("#19d23e");
      color.push("#d2d219");
      color.push("#d24d19");
  const getAdr = async () => {
    try {
      const res = await axios.get("http://localhost:5000/algo");
      let tabAdresses = res.data
      jourSortie = tabAdresses.pop();
      infoBowling = tabAdresses.pop();
      setMarkers(tabAdresses);
      let phrase = <p>C'est décidé ! Vous avez tous rendez-vous {jourSortie} prochain à l'adresse suivante : {infoBowling.name}, {infoBowling.vicinity}</p>;
      ReactDOM.render(phrase, document.getElementById('adresseEtJour'));

      for(var i=0;i<res.data.length -1;i++){
          calculateRoute(res.data[i],res.data[res.data.length -1]);
      }
      ping();
      
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

 function ping()
 {
   for(var j=0;j<markers.length -1;j++){
      pings.push(markers[j]);
   }
   
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
        onClick={function(){
          getAdr() ; 
          
            setSelected(true );
           

        } } 
      >
        {routes.map((mark ,i=0) => (
            <DirectionsRenderer
              directions={mark}
              options={{
                polylineOptions: {
                  zIndex: 50,
                  strokeColor:color[i] ,
                  strokeWeight: 5,
                },
              }
            }              
            />
            
            ))
          }
         
                 
         {selected ?markers.map((marker,i=0) => {
           if(i===markers.length -1){
             return (
                
                    <InfoWindow
                    position={marker}
                    
           onCloseClick={() => {
            setSelected(null);
          }}
          
        >
          <div>
             
            
             <p>Nom :{infoBowling.name }</p>
             <p>Adresse :{infoBowling.vicinity}</p>
             <p>Type : {infoBowling.types[0].split('_')[0]}</p>
             <p> Ouvert : {testOpen()}</p>
              <p>Note :{infoBowling.rating }</p>
              <p>Nombre d'avis :{infoBowling.user_ratings_total}</p>

              
                
             </div>
             
           </InfoWindow>


                
             );
           }
           else {
             return (
           
           <InfoWindow
           position={marker}
          
           onCloseClick={() => {
             setSelected(null);
           }}
           
         >
           <div>
             
           <p>  Distance: {distances[i]} </p>
           <p>Duree: {times[i]} </p>
              
           </div>
           
         </InfoWindow>
             );}
                
          })
          
        :null } 
          
           
        {markers.map((marker) => (
           <Marker
           key={`${marker.lat}-${marker.lng}`}
           position={{ lat: marker.lat, lng: marker.lng }}
          
      />
        
           
        ))
      }
      </GoogleMap><br></br>
      <div id="adresseEtJour"></div>
    </div>
  );
}

export default Map;