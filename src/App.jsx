import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
  console.log(import.meta.env.VITE_API_KEY);
  console.log("hihi");
  const displayWeather = (e) => {
    if (e.key === "Enter") {
      axios.get(api).then((response) => {
        setData(response.data);
        console.log(response.data);
      });

      setLocation("");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a city"
          onKeyDown={displayWeather}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
      {data.name !== undefined &&
      
       <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()}KMH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>}
       
      </div>
    </div>
  );
}

export default App;
