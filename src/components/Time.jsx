function Time({ now }) {
  const [dates, time] = now;

  const [weekday, ...restDate] = dates.split(",");
  const date = restDate.join(",");

  return (
    <div className="time">
      <h4>{time}</h4>
      <p>
        <span className="weekday">{weekday},</span> {date}
      </p>
    </div>
  );
}

export default Time;
