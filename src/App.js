import React from "react";
import { Outlet } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Instrument Swap</h1>
      <Outlet />
    </div>
  );
}

export default App;
