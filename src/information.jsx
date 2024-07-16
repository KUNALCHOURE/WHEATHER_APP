import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./information.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Information({ weather }) {
  const rainUrl = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const hotUrl = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const coldUrl = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className='info'>
      <Card sx={{ width: '100%', maxWidth: 450, margin: '20px', height: 450 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image={weather.humidity > 75 ? rainUrl : weather.temp > 30 ? hotUrl : coldUrl}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weather.city} {weather.humidity > 80 ? <ThunderstormIcon /> : weather.temp < 20 ? <AcUnitIcon /> : <WbSunnyIcon />}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              TEMPERATURE: {weather.temp} <br /> <br />
              HUMIDITY: {weather.humidity}<br />
              <br />
              MAX TEMPERATURE: {weather.maxtemp} <br /><br />
              MIN TEMPERATURE: {weather.mintemp} <br />
              {`${weather.city} is currently experiencing ${weather.temp}°C, feeling like ${weather.feels_like}°C, with ${weather.humidity}% humidity and ${weather.cloud}% cloud cover.`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
