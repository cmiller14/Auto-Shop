import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import NavBar from "./Components/Navbar";
import "./index.css";
import "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

// See tutorial at https://reactrouter.com/en/main/start/tutorial

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Router></Router>
    </BrowserRouter>
  </React.StrictMode>
);
