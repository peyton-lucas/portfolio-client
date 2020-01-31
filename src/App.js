import React from "react";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import "./styles.scss";
import {Nav, Navbar} from "react-bootstrap";
import NavLinks from "./components/NavLinks";

function App(props) {
  return (
    <div className="App container">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;