import { useWeather } from "../context/WeatherContext";
import cities from "./cities_of_turkey.json";

export default function Dropdown() {
  const { city, setCity } = useWeather();
  const changeCity = (e) => {
    setCity(e.target.value);
  };
 

  return (
    <div className="card-body" style={{textAlign:"center"}}>
      <select name="city" onChange={changeCity}>
        {cities.map((city) => {
          return <option key={city.id} value={city.name}>{city.name}</option>;
        })}
      </select>
    </div>
  );
}
