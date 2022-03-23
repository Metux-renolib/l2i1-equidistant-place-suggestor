import React from 'react'
import {
  GoogleMap, LoadScript, Marker, InfoWindow,
} from '@react-google-maps/api';


const  Map = () => {

    const taille_carte = {
        width: '100%',
        height: '400px'
      };

    const coordonnes_notre_dame = {
        lat: 48.852968,
        lng: 2.349902
      };

    const centre_carte = coordonnes_notre_dame
    return (        
        <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        >
      <GoogleMap
        mapContainerStyle={taille_carte}
        center={centre_carte}
        zoom={8}
      >
        <Marker
          position={{ lat: 48.852968, lng: 2.349902 }}
        >
          <InfoWindow><div>Bonjour</div></InfoWindow>
        </Marker>
        <Marker
          position={{ lat: 48, lng: 2.349902 }}
        >
          <InfoWindow><div>Hello!</div></InfoWindow>

        </Marker>


        <></>
      </GoogleMap>
    </LoadScript>
  )
}


export default Map;