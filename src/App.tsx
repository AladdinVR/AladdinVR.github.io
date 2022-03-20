import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/ts/Home";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='*' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/> } />
          </Routes>

      </div>
    </Router>
  );
}

export default App;
