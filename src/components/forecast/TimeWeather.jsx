function TimeWeather({ weather }) {
  const { temp, time, weather: weatherType } = weather;

  const formattedTime = time.split(":").slice(0, 2).join(":");

  const weatherMap = {
    Clouds: "☁️",
    Clear: "🌤️",
    Rain: "🌧️",
    Snow: "🌨️",
    Wind: "🌬️",
    Storm: "⛈️",
  };

  return (
    <div className="time-weather">
      <p>{weatherMap[weatherType] || "⛅︎"}</p>
      <p>{formattedTime}</p>
      <p>{Math.round(Number(temp))}°C</p>
    </div>
  );
}
export default TimeWeather;
