
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import config from './config.js';

export default function Search({ update }) {
  const [city, setCity] = useState("");
  const API_URL = config.APIURL;
  const API_KEY = config.APIKEY;

  const handleChange = (event) => setCity(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonresponse = await response.json();

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

    if (jsonresponse.main.humidity > 75) {
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
    <div className="flex flex-col items-center justify-center mt-10 p-5">
      <h1 className="text-4xl mb-6 font-bold text-gray-800" style={{textShadow: "2px 2px 6px rgba(0,0,0,0.3)"}}>
        Weather Search
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          onChange={handleChange}
          sx={{ bgcolor: "white", borderRadius: 2, width: "320px" }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)'
          }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}