import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./Search-Box.css";

export default function SearchBox({ updateWeatherInfo }) {
  const URL = "https://api.weatherapi.com/v1/current.json?key=";
  const key = "452697dce26c9c63b9645c6b4bde3d97";
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  let updateCity = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let response = await fetch(`${URL}${key}&q=${city}`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        name: jsonResponse.location.name,
        humidity: jsonResponse.current.humidity,
        temp: jsonResponse.current.temp_c,
        feels_like: jsonResponse.current.feelslike_c,
        weather: jsonResponse.current.condition.text,
        speed: jsonResponse.current.wind_kph,
        pressure: jsonResponse.current.pressure_in,
      };
      console.log(result);
      updateWeatherInfo(result);
    } catch (err) {
      setError(true);
    }
    setCity("");
  };

  return (
    <div className="Search-Box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          onChange={updateCity}
          value={city}
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained" endIcon={<SearchIcon />}>
          Search
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such place exist!</p>}
    </div>
  );
}
