import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./information.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import nice from "../assets/nice.jpg";

export default function Information({ weather }) {
  const rainUrl = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const hotUrl = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const coldUrl = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className='info'>
      <Card className='weather-card' sx={{ borderRadius: 5, boxShadow: 6, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={weather.humidity > 75 ? rainUrl : weather.temp > 30 ? hotUrl : weather.temp < 15 ? coldUrl : nice}
            alt="Weather Image"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {weather.city}{" "}
              {weather.humidity > 80 ? <ThunderstormIcon sx={{ ml: 1, color: "#2196f3" }} /> :
                weather.temp < 20 ? <AcUnitIcon sx={{ ml: 1, color: "#00bcd4" }} /> :
                <WbSunnyIcon sx={{ ml: 1, color: "#ff9800" }} />}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>
              <strong>Temperature:</strong> {weather.temp}°C<br />
              <strong>Humidity:</strong> {weather.humidity}%<br />
              <strong>Max Temperature:</strong> {weather.maxtemp}°C<br />
              <strong>Min Temperature:</strong> {weather.mintemp}°C<br />
              <br />
              {`${weather.city} is currently experiencing ${weather.temp}°C, feeling like ${weather.feels_like}°C, with ${weather.humidity}% humidity and ${weather.cloud}% cloud cover.`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
