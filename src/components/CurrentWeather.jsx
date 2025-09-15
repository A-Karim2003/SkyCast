function CurrentWeather({ forecast }) {
  if (!forecast.length) return;

  const { temp, minTemp, maxTemp, cityName } = forecast[0];

  return (
    <div className="current-weather">
      <div>
        <h1>{Math.round(Number(temp))}°C 🌧️</h1>
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
