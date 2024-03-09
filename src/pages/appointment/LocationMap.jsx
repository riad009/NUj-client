import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  StandaloneSearchBox,
  useJsApiLoader,
} from "@react-google-maps/api";

const LocationMap = ({ apiKey, onLocationChange }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBSK3Pnsh-wvplEf7bac88yxhwL7EEPORM",
    libraries: ["places"],
  });

  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const handlePlaceSelect = (place) => {
    const selectedLocation = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setLocation(selectedLocation);
    onLocationChange(selectedLocation);
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          center={location}
          zoom={15}
        >
          {/* <Autocomplete
          onLoad={(autocomplete) => console.log(autocomplete)}
          onPlaceChanged={(autocomplete) =>
            handlePlaceSelect(autocomplete.getPlace())
          }
        >
          <input
            type="text"
            placeholder="Enter your location"
            style={{ width: "100%" }}
          />
        </Autocomplete> */}

          <StandaloneSearchBox
            onLoad={(autocomplete) => console.log(autocomplete)}
            onPlaceChanged={(autocomplete) =>
              handlePlaceSelect(autocomplete.getPlace())
            }
          >
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
              }}
            />
          </StandaloneSearchBox>

          {/* <Marker position={location} /> */}
        </GoogleMap>
      )}
    </>
  );
};

export default LocationMap;
