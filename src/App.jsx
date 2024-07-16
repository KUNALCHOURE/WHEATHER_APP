import Search from './searchbox.jsx';
import Information from './information.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState({
    city: "NAGPUR",
    temp: 30.1,
    maxtemp: 35,
    mintemp: 29,
    humidity: 80,
    weather: "haze",
    feels_like: 40.1,
    cloud: 75,
  });

  const update = (newWeather) => {
    setWeather(newWeather);
  };

  return (
    <div>
      <Search update={update} />
      <Information weather={weather} />
    </div>
  );
}

export default App;
