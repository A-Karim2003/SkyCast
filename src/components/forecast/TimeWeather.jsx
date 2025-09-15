function TimeWeather({ weather }) {
  console.log(weather);

  const { temp, time } = weather;
  const formattedTime = time.split(":").slice(0, 2).join(":");

  return (
    <div className="time-weather">
      <p>{formattedTime}</p>
      <p>🌧️</p>
      <p>{Math.round(Number(temp))}°C</p>
    </div>
  );
}
export default TimeWeather;
