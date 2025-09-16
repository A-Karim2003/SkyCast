function ForecastWeather({ data }) {
  console.log(data);

  return (
    <div className="forecast-weather">
      <div>
        <p className="">{data.weekday}</p>
        <p className="cloud">
          <img className="icon" src={data.iconUrl} />
        </p>
      </div>
      <div>
        <span>{Math.round(data.min_temp)}°c </span>
        <div className="range"></div>
        <span>{Math.round(data.max_temp)}°c</span>
      </div>
    </div>
  );
}

export default ForecastWeather;
