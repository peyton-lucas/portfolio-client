import React from "react";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import "./styles.scss";

function App(props) {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;