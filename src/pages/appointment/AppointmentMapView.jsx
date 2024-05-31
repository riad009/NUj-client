import { useRef, useEffect } from "react";

const AppointmentMapView = ({ lat, lng }) => {
  const mapRef = useRef(null);
  const apiKey = import.meta.env.VITE_map_key;

  const loadMap = () => {
    const script = document.createElement("script");
    // script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.type = "text/javascript";
    script.src = `http://maps.googleapis.com/maps/api/js?libraries=geometry&sensor=false&key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.onload = initializeMap;
    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (lat && lng) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 20,
      });

      new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: "Location Marker",
      });
    }
  };

  useEffect(() => {
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      loadMap();
    }
  }, [apiKey, lat, lng]);

  // useEffect(() => {
  //   loadMap();
  // }, []);

  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: "600px", height: "450px", border: "1px solid #ccc" }}
      ></div>
    </div>
  );
};

export default AppointmentMapView;
