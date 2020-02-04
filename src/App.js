import React from "react";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import { Nav, Navbar } from "react-bootstrap";
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