import React from "react";
import { Outlet } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router";
import Nav from "./components/Nav";

function App() {
  const location = useLocation()
  console.log(location.pathname)
    if (location.pathname == '/login') {
      return (
        <div className="App">
          <h1>Instrument Swap</h1>
          <Outlet />
        </div>
      );
    } else if (location.pathname == '/register') {
      return (
        <div className="App">
          <h1>Instrument Swap</h1>
          <Outlet />
        </div>
      );
    } else if (location.pathname == '/first_login') {
      return (
        <div className="App">
          <h1>Instrument Swap</h1>
          <Outlet />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav />
          <Outlet />
        </div>
      );
    }
    
    
}

export default App;
