import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const LocationMap = ({ selectedLocation }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_map_key,
    libraries: ["places"],
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "50px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "500px",
        }}
        center={selectedLocation}
        zoom={20}
        onLoad={onMapLoad}
      >
        <MarkerF
          position={selectedLocation}
          options={{
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",

              scaledSize: {
                width: 40,
                height: 40,
              },
            },
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default LocationMap;
