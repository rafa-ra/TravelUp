import axios from "axios";
import { useEffect, useState } from "react";

export const weatherReq = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function fetchData() {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const data = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=379a6d1f4ea4019dad587ca076cc6a99`
        );
      });
    }
    fetchData();
  }, []);

  return null;

  // FUNCIONANDO
  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       console.log(position);
  //       const lat = position.coords.latitude;
  //       const long = position.coords.longitude;

  //       const weatherResults = axios
  //         .get(
  //           `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=379a6d1f4ea4019dad587ca076cc6a99`
  //         )
  //         .then((response) => {
  //           // Handle response
  //           console.log(response.data);
  //         })
  //         .catch((err) => {
  //           // Handle errors
  //           console.error(err);
  //         });
  //     });
  //   };
  //   fetchData();
  // }, []);

  // return data;
};

//QUEBRADO
// useEffect(() => {
//   const getLocation = async () =>
//     navigator.geolocation.getCurrentPosition(function (position) {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });

//   const fetchData = async () => {
//     await getLocation();

//     const weatherResults = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=379a6d1f4ea4019dad587ca076cc6a99`
//     );

//     setData(weatherResults);
//     console.log(data);
//   };

//   fetchData();
// }, [lat, long]);
