import Search from './searchbox.jsx'
import Information from './information.jsx'
import { useState } from 'react'
import './App.css'

function App() {

  let [wheather,setwheather]=useState({
    city:"NAGPUR",
    temp:30.1,
    maxtemp:35,
    mintemp:29,
    humidity:80,
    wheather:"haze",
    feels_like:40.1,
    cloud:"",
  })
  let update=(newwheather)=>{
    setwheather(newwheather);
  }
  return (
    <>
     <Search update={update}/>
     <Information wheather={wheather}/>
    </>
  )
}

export default App
