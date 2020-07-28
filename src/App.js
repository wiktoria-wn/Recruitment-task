import React from "react";
import MoviesData from "./components/MoviesData";
import { MainContent } from "./components/styles/MovieDataStyles";
import Logo from "./assets/LOGO.svg";

function App() {
  return (
    <MainContent>
      <img alt="logo" src={Logo} />
      <MoviesData />
    </MainContent>
  );
}

export default App;
