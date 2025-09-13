// import { useState } from "react";
import Background from "./components/background";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <Background />
      <Main>
        <Header />
      </Main>
    </div>
  );
}

export default App;
