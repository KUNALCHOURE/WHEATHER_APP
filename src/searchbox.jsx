import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import { useState } from 'react';

export default function Search({ update }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "262046f5b2da4f4d377a77daf8de34fc";

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    console.log(jsonResponse);

    let res = {
      city: city,
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      maxtemp: jsonResponse.main.temp_max,
      mintemp: jsonResponse.main.temp_min,
      feels_like: jsonResponse.main.feels_like,
      cloud: jsonResponse.clouds.all,
    };

    update(res);
  };

  return (
    <div className="search">
      <h1>Search here for weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="CITY_NAME" variant="outlined" onChange={handleChange} />
        <br /><br />
        <Button variant="contained" type='submit'>SEARCH</Button>
      </form>
    </div>
  );
}
