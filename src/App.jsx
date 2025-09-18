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
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [now, setNow] = useState(DateTime());
  const [background, setBackground] = useState("");

  function getBackground(weather) {
    if (!weather) return "/src/assets/background/default.jpg";

    if (weather.includes("Cloud")) return "/src/assets/background/cloudy.jpg";
    if (weather.includes("Rain")) return "/src/assets/background/rainy.jpg";
    if (weather.includes("Snow")) return "/src/assets/background/snowy.jpg";
    if (weather.includes("Sunny") || weather.includes("Clear"))
      return "/src/assets/background/sunny.jpg";
    if (weather.includes("Wind")) return "/src/assets/background/windy.jpg";

    return "/src/assets/background/default.jpg";
  }
  function DateTime() {
    const now = new Date();

    const formattedData = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const formattedTime = now.toLocaleTimeString("en-UK", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return [formattedData, formattedTime];
  }

  useEffect(() => {
    if (!query) return;

    async function FetchWeather() {
      try {
        //*----------------Location data----------------
        const geoRes = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`
        );

        if (!geoRes.ok) throw new Error("Could not fetch location data");

        const geoData = await geoRes.json();
        const { lat, lon } = geoData[0];

        //*----------------Weather data-----------------

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        if (!res.ok) throw new Error("Could not fetch weather data");

        const weatherData = await res.json();
        const cityName = weatherData.city.name;

        const filteredHourlyArray = weatherData.list.slice(0, 6).map((data) => {
          return {
            temp: data.main.temp,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max,
            iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            time: data.dt_txt.split(" ")[1],
            date: data.dt_txt.split(" ")[0],
            cityName: cityName,
            description: data.weather[0].description,
            weather: data.weather[0].main,
          };
        });

        setHourlyForecast(filteredHourlyArray);

        // * Group the arrays by dates
        const groupedDailyForecast = weatherData.list.reduce((acc, data) => {
          const date = data.dt_txt.split(" ")[0];
          if (!acc[date]) acc[date] = [];
          acc[date].push(data);

          return acc;
        }, {});

        // * return the objects with the time "12:00"
        const filteredDailyForecast = [];
        for (const [key, value] of Object.entries(groupedDailyForecast)) {
          const midday = value.find((entry) =>
            entry.dt_txt.includes("12:00:00")
          );

          const temps = value.map((entry) => entry.main.temp);
          const min_temp = Math.min(...temps);
          const max_temp = Math.max(...temps);

          const date = new Date(key);

          if (midday)
            filteredDailyForecast.push({
              iconUrl: `http://openweathermap.org/img/wn/${value[4].weather[0].icon}@2x.png`,
              weekday: String(date).split(" ")[0],
              min_temp: min_temp,
              max_temp: max_temp,
            });
        }

        setDailyForecast(filteredDailyForecast);
      } catch (error) {
        console.log(error);
      }
    }

    FetchWeather();
  }, [query]);

  useEffect(() => {
    const intervalID = setInterval(() => setNow(DateTime()), 60 * 1000);
    return () => clearInterval(intervalID);
  }, []);

  //* useEffect for backgrounds
  useEffect(() => {
    const bg = getBackground(hourlyForecast[0]?.weather);
    console.log(bg);

    document.body.style.background = `url(${bg})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    setBackground(bg);
  }, [hourlyForecast]);

  return (
    <div className="app">
      <Background background={background} />
      <Main>
        <Header setQuery={setQuery} query={query} now={now} />
        <WeatherContents>
          <CurrentWeather hourlyForecast={hourlyForecast} />
          <Forcast
            hourlyForecast={hourlyForecast}
            dailyForecast={dailyForecast}
          />
        </WeatherContents>
      </Main>
    </div>
  );
}

export default App;
