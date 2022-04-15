import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/ts/Home";
import History from "./components/ts/History";
import Records from "./components/ts/Records";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/ranking" element={<Records />} />
          <Route path="/song" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
