import { useState } from 'react';
import config from './config.js';

export default function Search({ update }) {
  const [city, setCity] = useState("");
  const API_URL = config.APIURL;
  const API_KEY = config.APIKEY;

  const handleChange = (event) => {
    setCity(event.target.value);
  };

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
    <div className="flex flex-col items-center mt-10 p-6">
      <h1
        className="text-4xl mb-6 font-bold text-gray-800 drop-shadow"
        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.3)" }}
      >
        Weather Search
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full max-w-md bg-white shadow-lg rounded-lg p-6"
      >
        <input
          id="city"
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          type="submit"
          className="w-full mt-2 py-3 rounded-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-lg shadow hover:from-blue-600 hover:to-cyan-500 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}