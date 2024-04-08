import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    feels_like: 28.8,
    humidity: 22,
    name: "Delhi",
    speed: 6.8,
    temp: 31,
    weather: "Mist",
    pressure: 29.88,
  });

  let updateWeatherInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
