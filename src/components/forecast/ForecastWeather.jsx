function ForecastWeather() {
  return (
    <div className="forecast-weather">
      <div>
        <p className="">Today</p>
        <p className="cloud">☁️</p>
      </div>
      <div>
        <span>20°c </span>
        <div className="range"></div>
        <span>28°c</span>
      </div>
    </div>
  );
}

export default ForecastWeather;
