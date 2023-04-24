import axios from "axios";
import react, { useContext } from "react";
import CountryContext from "../../context/CountryContext";
import { countries } from "../../assets/data";

export const weatherReq = async (currentCountry, setWeather) => {
  const city = countries.filter((e) => e.title === currentCountry)[0]
    .textContent.enUS.mainCities[0];

  const weatherResults = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=379a6d1f4ea4019dad587ca076cc6a99`
  );

  const { id } = weatherResults.data.weather[0];
  let icon = "";
  if (id <= 232) {
    icon = "11d";
  } else if (300 <= id && id <= 321) {
    icon = "09d";
  } else if (500 <= id && id <= 504) {
    icon = "10d";
  } else if (id === 511) {
    icon = "13d";
  } else if (520 <= id && id <= 531) {
    icon = "09d";
  } else if (600 <= id && id <= 622) {
    icon = "13d";
  } else if (701 <= id && id <= 781) {
    icon = "50d";
  } else if (701 <= id && id <= 781) {
    icon = "50d";
  } else if (id === 800) {
    icon = "01d";
  } else if (id === 801) {
    icon = "02d";
  } else if (id === 802) {
    icon = "03d";
  } else if (id === 803) {
    icon = "04d";
  } else if (id === 804) {
    icon = "04d";
  }

  console.log(icon);
  return setWeather(icon);
};
