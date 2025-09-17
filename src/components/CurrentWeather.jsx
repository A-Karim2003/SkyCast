function CurrentWeather({ hourlyForecast }) {
  if (!hourlyForecast.length) return;

  const { temp, minTemp, maxTemp, cityName, iconUrl } = hourlyForecast[0];
  return (
    <div className="current-weather">
      <div>
        <h1>
          {Math.round(Number(temp))}°C <img src={iconUrl} />
        </h1>
        <h2>{cityName}</h2>
        <p>
          <span>H:{Math.round(Number(maxTemp))}°</span>|
          <span>L:{Math.round(Number(minTemp))}°</span>
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
