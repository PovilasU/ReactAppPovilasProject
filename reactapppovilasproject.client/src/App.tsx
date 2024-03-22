import { useEffect, useState } from "react";
// import "./App.css";
//import * as React from "react";
//import Index from './pages/Index';
// import Index from "./onepirate/Home.tsx";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Home from "./components/Home";
//import Index from "./onepirate/Home";

function App() {
  //const [forecasts, setForecasts] = useState<Forecast[]>();

  useEffect(() => {
    //  populateWeatherData();
  }, []);

  return (
    // <div>
    //   <h1 id="tabelLabel">Povilas Apps</h1>
    //   <p>Here are my projects </p>

    <Home></Home>

    // </div>
  );
}

export default App;
