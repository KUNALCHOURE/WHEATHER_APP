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
    let jsonresponse = await response.json();
  
    console.log(jsonresponse);

    let res = {
        city: city,
        temp: jsonresponse.main.temp,
        humidity: jsonresponse.main.humidity,
        maxtemp: jsonresponse.main.temp_max,
        mintemp: jsonresponse.main.temp_min,
        feels_like: jsonresponse.main.feels_like,
        cloud: jsonresponse.clouds.all,
      };
      console.log(jsonresponse.main.humidity)
    update(res);
    if (jsonresponse.main.humidity> 75) {
      document.body.className = 'rain';
  } else if (jsonresponse.main.temp > 30) {
      document.body.className = 'sunny';
  } else if (jsonresponse.main.temp < 20) {
      document.body.className = 'cold';
  } else {
      document.body.className = 'nice';
  }
  };

  return (
    <div className="search">
      <h1>Search here for weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="city"  variant="outlined" placeholder="ENTER CITY NAME" onChange={handleChange} />
        <br /><br />
        <Button variant="contained" type='submit'>SEARCH</Button>
      </form>
    </div>
  );
}
