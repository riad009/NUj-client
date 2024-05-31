import { useState } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { Form } from "antd";

function SearchLocationInput({
  placeName,
  setPlaceName,
  setSelectedLocation,
  setAddress,
}) {
  const [searchResult, setSearchResult] = useState("Result: none");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_map_key,
    libraries: ["places"],
  });

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    // console.log({ searchResult });
    if (searchResult != null && searchResult) {
      const place = searchResult.getPlace();
      const name = place.name;
      console.log({ place });

      const latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setAddress(name + " " + place?.formatted_address);
      setSelectedLocation(latLng);
      setPlaceName(name);
    } else {
      alert("Please enter text");
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
      <Form.Item
        className="text-center"
        name="location"
        initialValue={{
          location: placeName,
        }}
        rules={[
          {
            required: true,
            message: "Provide a location",
          },
        ]}
      >
        <label
          className="w-full mx-auto md:w-[500px] mt-20 relative bg-white  flex flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300 mb-2"
          htmlFor="search-bar"
        >
          <img src="/google-maps.png" alt="" className="w-8 h-8" />

          <input
            name="location"
            id="search-bar"
            placeholder="Search your location"
            className=" py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
        </label>
      </Form.Item>
    </Autocomplete>
  );
}

export default SearchLocationInput;
