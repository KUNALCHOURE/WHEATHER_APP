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
        temp: jsonresponse.main.temp,
        humidity: jsonresponse.main.humidity,
        maxtemp: jsonresponse.main.temp_max,
        mintemp: jsonresponse.main.temp_min,
        feels_like: jsonresponse.main.feels_like,
        cloud: jsonresponse.clouds.all,
      };
    update(res);
    document.body.className = jsonResponse.humidity> 75 ? 'rain' : jsonResponse.main.temp > 30 ? 'sunny' : jsonResponse.main.temp < 20 ? 'cold' : 'nice';
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
