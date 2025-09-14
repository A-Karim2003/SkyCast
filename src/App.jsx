// import { useState } from "react";
import Background from "./components/background";
import Header from "./components/Header";
import Main from "./components/Main";
import CurrentWeather from "./components/CurrentWeather";
import WeatherContents from "./components/WeatherContents";
import Forcast from "./components/forecast/Forecast";

function App() {
  return (
    <div className="app">
      <Background />
      <Main>
        <Header />
        <WeatherContents>
          <CurrentWeather />
          <Forcast />
        </WeatherContents>
      </Main>
    </div>
  );
}

export default App;
