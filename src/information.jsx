import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./information.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function Information({wheather}){

  let rainurl="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let hoturl="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let coldurl="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return (
        <>
        
          <div className='info'>
          
           
           <Card sx={{ width: '100%', maxWidth: 450, margin: '20px', height:450}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={wheather.humidity >75 ? rainurl:wheather.temp>30 ?hoturl:coldurl}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {wheather.city} {wheather.humidity>80 ? <ThunderstormIcon/>:wheather.temp<20?<AcUnitIcon/>:<WbSunnyIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             TEMPERATRE:{wheather.temp} <br /> <br />
             HUMIDITY:{wheather.humidity}<br/>
             <br />
                MAX TEMPERATURE:{wheather.maxtemp} <br /><br />
                MIN TEMPERATURE:{wheather.mintemp} <br />
             
             
                {`${wheather.city} is currently experiencing ${wheather.temp}°C, feeling like ${wheather.feels_like}°C, with ${wheather.humidity}% humidity and ${wheather.clouds}% cloud cover.`}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
        </>
    )
}