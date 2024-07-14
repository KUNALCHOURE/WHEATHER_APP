import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css'
import { useState } from 'react';
import { json } from 'express';

export default function Search({update}){
    let [city,setcity]=useState("");
        let API_URL="https://api.openweathermap.org/data/2.5/weather";
        let API_KEY="262046f5b2da4f4d377a77daf8de34fc";
    let handlechange=(event)=>{
       
        let val=event.target.value;
        
      setcity(val);
  
    }
    let handlesubmit=async(event)=>{
        event.preventDefault();
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse= await response.json();
     
        console.log(jsonresponse);

     let res={
        city:city,
        temp:jsonresponse.main.temp,
        humidity:jsonresponse.main.humidity,
        maxtemp:jsonresponse.main.temp_max,
        mintemp:jsonresponse.main.temp_min,
        feels_like:jsonresponse.main.feels_like,
        cloud:jsonresponse.clouds.all,
     }

     update(res);

    }

    
    return (
        <>  
        <div className="search">
        <h1>Search here for weather</h1>
     <form action="" onSubmit={handlesubmit} >
        <TextField id="city" label="CITY_NAME" variant="outlined"onChange={handlechange} />
        <br /><br />
        <Button variant="contained" type='submit' >SEARCH</Button>
        
        </form>
        </div>
       


        </>

    )
}