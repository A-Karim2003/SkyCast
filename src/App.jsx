import { useEffect, useState } from "react";
import Background from "./components/background";
import Header from "./components/Header";
import Main from "./components/Main";
import CurrentWeather from "./components/CurrentWeather";
import WeatherContents from "./components/WeatherContents";
import Forcast from "./components/forecast/Forecast";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [query, setQuery] = useState();
  const [forecast, setForecast] = useState("");

  console.log(forecast);

  useEffect(() => {
    if (!query) return;

    async function FetchWeather() {
      //*----------------Location data----------------
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`
      );
      const geoData = await geoRes.json();
      const { lat, lon } = geoData[0];

      //*----------------Weather data-----------------

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      const weatherData = await res.json();
      const cityName = weatherData.city.name;

      const filteredDataArray = weatherData.list.slice(0, 5).map((data) => {
        return {
          temp: data.main.temp,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          weather: data.weather[0].main,
          time: data.dt_txt.split(" ")[1],
          date: data.dt_txt.split(" ")[0],
          cityName: cityName,
        };
      });

      setForecast(filteredDataArray);
    }

    FetchWeather();
  }, [query]);

  return (
    <div className="app">
      <Background />
      <Main>
        <Header setQuery={setQuery} query={query} forecast={forecast} />
        <WeatherContents>
          <CurrentWeather />
          <Forcast />
        </WeatherContents>
      </Main>
    </div>
  );
}

export default App;
