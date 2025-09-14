import ForcastTimes from "./ForcastTimes";
import ForcastDays from "./ForcastDays";
import TimeWeather from "./TimeWeather";
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
        <TimeWeatherContainer>
          <TimeWeather />
          <TimeWeather />
          <TimeWeather />
          <TimeWeather />
          <TimeWeather />
          <TimeWeather />
        </TimeWeatherContainer>
      </ForcastTimes>
      <ForcastDays></ForcastDays>
    </div>
  );
}

export default Forcast;
