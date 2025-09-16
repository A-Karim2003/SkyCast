function TimeWeather({ weather }) {
  const { temp, time, iconUrl } = weather;

  const formattedTime = time.split(":").slice(0, 2).join(":");

  return (
    <div className="time-weather">
      <p>
        <img className="icon" src={iconUrl} alt="" />
      </p>
      <p>{formattedTime}</p>
      <p>{Math.round(Number(temp))}°C</p>
    </div>
  );
}
export default TimeWeather;
