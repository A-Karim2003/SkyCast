import ForcastTimes from "./ForcastTimes";
import ForcastDays from "./ForcastDays";
import TimeWeather from "./TimeWeather";
import ForecastWeather from "./ForecastWeather";
import ForecastTitle from "./ForecastTitle";
import TimeWeatherContainer from "./TimeWeatherContainer";
import "./forcast.css";
function Forcast() {
  return (
    <div className="forecast">
      <ForcastTimes>
        <ForecastTitle>
          <h3>Thunderstorms expected around 00:00</h3>
        </ForecastTitle>
        <TimeWeatherContainer className={"time-weather-container"}>
          <TimeWeather />
          <TimeWeather />
          <TimeWeather />
          <TimeWeather />
          <TimeWeather />
          <TimeWeather />
        </TimeWeatherContainer>
      </ForcastTimes>
      <ForcastDays>
        <ForecastTitle>
          <h3>5-Day Forecast</h3>
        </ForecastTitle>

        <TimeWeatherContainer className={"forecast-weather-container"}>
          <ForecastWeather />
          <ForecastWeather />
          <ForecastWeather />
        </TimeWeatherContainer>
      </ForcastDays>
    </div>
  );
}

export default Forcast;
