// import { Form, Input } from "antd";
// import { useEffect, useRef, useState } from "react";

// let autoComplete;

// const loadScript = (url, callback) => {
//   let script = document.createElement("script");
//   script.type = "text/javascript";

//   if (script.readyState) {
//     script.onreadystatechange = function () {
//       if (script.readyState === "loaded" || script.readyState === "complete") {
//         script.onreadystatechange = null;
//         callback();
//       }
//     };
//   } else {
//     script.onload = () => callback();
//   }

//   script.src = url;
//   document.getElementsByTagName("head")[0].appendChild(script);
// };

// const SearchLocationInput = ({ setSelectedLocation }) => {
//   const [query, setQuery] = useState("");
//   const autoCompleteRef = useRef(null);

//   const handleScriptLoad = (updateQuery, autoCompleteRef) => {
//     autoComplete = new window.google.maps.places.Autocomplete(
//       autoCompleteRef.current.input
//       // {
//       //   // types: ["(cities)"],
//       //   componentRestrictions: { country: "BD" },
//       // }
//     );

//     autoComplete.addListener("place_changed", () => {
//       handlePlaceSelect(updateQuery);
//     });
//   };

//   const handlePlaceSelect = async (updateQuery) => {
//     const addressObject = await autoComplete.getPlace();

//     const query = addressObject.formatted_address;
//     updateQuery(query);
//     console.log({ query });

//     const latLng = {
//       lat: addressObject?.geometry?.location?.lat(),
//       lng: addressObject?.geometry?.location?.lng(),
//     };

//     setSelectedLocation(latLng);
//   };

//   useEffect(() => {
//     loadScript(
//       `https://maps.googleapis.com/maps/api/js?key=${
//         import.meta.env.VITE_map_key
//       }&libraries=places`,
//       () => handleScriptLoad(setQuery, autoCompleteRef)
//     );
//   }, []);

//   console.log(autoCompleteRef.current);

//   return (
//     <Form.Item
//       className="mb-1"
//       name="location"
//       rules={[
//         {
//           required: true,
//           message: "Provide a location",
//         },
//       ]}
//     >
//       <Input
//         size="middle"
//         ref={autoCompleteRef}
//         itemRef={autoCompleteRef}
//         className=""
//         onChange={(event) => setQuery(event.target.value)}
//         placeholder="Search..."
//         value={query}
//       />
//     </Form.Item>
//   );
// };

// export default SearchLocationInput;
import { useState } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { Form, Input } from "antd";

function SearchLocationInput({ placeName, setPlaceName, setSelectedLocation }) {
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

      const latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
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
    <div className="SearchLocationInput">
      <div id="searchColumn">
        <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
          <Form.Item
            className="mb-1"
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
            <Input
              size="middle"
              className=""
              placeholder="Search..."
              name="location"
            />
          </Form.Item>
        </Autocomplete>
      </div>
    </div>
  );
}

export default SearchLocationInput;
