import { useEffect, useState } from "react";

let api_key = "8128d77e107efedbdefaef0578b2cc88";

export const useGeoLocation = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [geolocation, setGeolocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position?.coords?.latitude);
      setLon(position?.coords?.longitude);
    });
    fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${api_key}`
      // `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={hourly,daily}&appid=${api_key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGeolocation(data[0]);
      });
  }, [lat, lon]);

  return geolocation;
};
// https://api.idify.org
