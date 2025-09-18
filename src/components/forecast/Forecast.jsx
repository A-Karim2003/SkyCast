import ForcastTimes from "./ForcastTimes";
import ForcastDays from "./ForcastDays";
import TimeWeather from "./TimeWeather";
import ForecastWeather from "./ForecastWeather";
import ForecastTitle from "./ForecastTitle";
import TimeWeatherContainer from "./TimeWeatherContainer";
import "./forcast.css";
function Forcast({ hourlyForecast, dailyForecast }) {
  return (
    <div className="forecast">
      <ForcastTimes>
        <ForecastTitle>
          {hourlyForecast.length ? (
            <h3>{hourlyForecast[0]?.description} expected</h3>
          ) : (
            <h3>Next 24 Hour forecast</h3>
          )}
        </ForecastTitle>
        <TimeWeatherContainer className={"time-weather-container"}>
          {hourlyForecast.map((weather) => (
            <TimeWeather key={weather.time} weather={weather} />
          ))}
        </TimeWeatherContainer>
      </ForcastTimes>
      <ForcastDays>
        <ForecastTitle>
          <h3>5-Day Forecast</h3>
        </ForecastTitle>

        <TimeWeatherContainer className={"forecast-weather-container"}>
          {dailyForecast.map((data) => (
            <ForecastWeather key={data.weekday} data={data} />
          ))}
        </TimeWeatherContainer>
      </ForcastDays>
    </div>
  );
}

export default Forcast;
