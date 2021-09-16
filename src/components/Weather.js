import { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext";
import "./index.css"


const axios = require("axios");
const apiKey = process.env.REACT_APP_API_KEY;
export default function Weather() {
  const { city } = useWeather("");
  const [weather, setWeather] = useState("");

  const apiCall = async (e) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const req = axios.get(url);
    const res = await req;    
    setWeather({
      descp: res.data.weather[0].description,
      temp: res.data.main.temp,
      temp_max: res.data.main.temp_max,
      temp_min: res.data.main.temp_min,
      city: res.data.name,
      humidity: res.data.main.humidity,
      press: res.data.main.pressure,
    });
  };

  useEffect(() => {
    apiCall();
  }, [city]);

  const WeatherImage = () => (
    <div>
      {weather.descp === "broken clouds" && (
        <img id="image" src="https://media-cdn.tripadvisor.com/media/photo-s/13/61/10/36/broken-clouds-be-prepared.jpg" />
      )}
      {weather.descp === "clear sky" && (
        <img id="image" src="https://img.hoodline.com/uploads/story/image/488482/istock__..featured_image_1..sunny_4.jpg.jpg?h=400&w=930&fit=crop&crop=faces,center" />
      )}
      {weather.descp === "scattered clouds" && (
        <img id="image" src="https://images.squarespace-cdn.com/content/v1/5d4c63022fdc0f0001a31f58/1565863502860-U636YZGVWKQJ47331LG6/cloud+dark+blue.jpg?format=1000w" />
      )}
      {weather.descp === "overcast clouds" && (
        <img id="image" src="https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg?w=876&h=493&crop=1" />
      )}
      {weather.descp === "light rain" && (
        <img id="image" id="image" src="https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_CloudRain.png" />
      )}
      {weather.descp === "few clouds" && (
        <img id="image" src="https://previews.123rf.com/images/gioiak2/gioiak21705/gioiak2170500220/77952925-few-clouds-on-a-blue-sky-background.jpg" />
      )}
      {weather.descp === "moderate rain" && (
        <img id="image" src="https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_CloudRain.png" />
      )}
      {weather.descp === "light intensity shower rain" && (
        <img id="image" src="https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_CloudRain.png" />
      )}
    </div>
  );

  return (
    <>
      <div className="card" style={{ width: "28rem",textAlign:"center" }}>
        <div className="card-body">
          <WeatherImage />
          <img src={""} alt="" />
          <h3 className="card-title">{weather.city}</h3>
          <h5>
            {new Date().toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              weekday: "long",
            })}
          </h5>
          <p>{weather.temp} &#8457;</p>
          <p className="card-text">{weather.descp}</p>
        </div>
      </div>
    </>
  );
}
