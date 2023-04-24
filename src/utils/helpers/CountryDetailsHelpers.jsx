import axios from "axios";

export const weatherReq = async (setWeather) => {
  const weatherResults = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=379a6d1f4ea4019dad587ca076cc6a99"
  );
  console.log(weatherResults.data.weather[0]);
  setWeather(weatherResults.data.weather[0]);
};
