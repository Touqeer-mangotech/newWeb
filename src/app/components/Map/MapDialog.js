import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, Polyline, DirectionsRenderer, } from '@react-google-maps/api';
import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material';


const googleApi = "AIzaSyCk9wRPeLZuSkgyBsJVAqQSUz59VAj-CYg";

const containerStyle = {
  width: '500px',
  height: '480px',
};

const center = {
  lat: 24.9098747,
  lng: 67.0770988
};
const marker = {
  lat: 24.9098747,
  lng: 67.0770988
};
const mapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
}

function MapDialog() {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  return (
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Box>
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={14}
            center={center}
            options={mapOptions}
            onLoad={(map) => setMap(map)}
          // defaultCenter={coords[0]}
          >
            <MarkerF
              position={marker}
            />;
          </GoogleMap>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default MapDialog