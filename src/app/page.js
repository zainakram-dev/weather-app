

  "use client"
import {useState} from "react"
  export default function w1Function(){
const [city,setCity]=useState("")
const [weather,setWeather]=useState(null)
const [error,setError]=useState("")
const API_KEY="91fd7dd1595c5c50be746228ada1b5ad"
const w2Function=async()=>{
  if(!city) return;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const w3=await fetch(url)
    const w4=await w3.json()
    if(w4.cod != 200){
      setError("city not found")
      setWeather(null)

    }
    else{
      setWeather(w4)
      setError(null)

    }
  } catch (error) {
    setError("something went wrong")
    setWeather(null)
  }
}
    return(
      <div className={"flex flex-col items-center justify-center   p-4 h-screen bg-[url('/w1w2.jpeg')] bg-cover bg-center"}>
        <div>
          <h1 className={"text-3xl text-black font-bold mb-4"}>Weather App</h1>
          <input type="text"  placeholder="write city name"  value={city} onChange={(e)=>setCity(e.target.value)} className={"p-2 text-yellow-500 placeholder-yellow-400 border border-4 border-blue-300 rounded mb-4"}/>
        </div> 
        <div>
          <button onClick={w2Function} className={"text-black border border-4 border-blue-500 rounded px-3 bg-blue-500"}>Enter</button>
        </div>
        <div>
          {error && error}
        </div>
        <div>
          {weather && (
            <div className={"text-black text-lg"}><br/>
              <h1>City Name: <span className={" p-2 rounded bg-green-500"}>      { weather.name}</span></h1><br/>
              <p>Temperature: <span className={" p-2 rounded bg-green-400"}> 🌡️ {weather.main.temp}</span></p><br/>
              <p>Humidity:    <span className={" p-2 rounded bg-green-300"}>  📃 {weather.main.humidity}</span></p><br/>
              <p>Weather:     <span className={" p-2 rounded bg-green-200"}>  🌥️ {weather.weather[0].main}</span></p><br/>
              <p>Wind Speed:  <span className={" p-2 rounded bg-green-100"}>  💨 {weather.wind.speed}</span></p><br/>
            </div>
          )}
        </div>
         </div>
    )}