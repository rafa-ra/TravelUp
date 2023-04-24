import axios from "axios";
import { useEffect, useState } from "react";

export const getUsersWeather = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const successCallback = (position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setLocation(userLocation);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return location;
};

export const weatherGeoRequest = async (lat, lon) => {
  const weatherGeoRes = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=379a6d1f4ea4019dad587ca076cc6a99`
  );

  return weatherGeoRes;
};
