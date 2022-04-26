import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/ts/pages/Home";
import History from "./components/ts/pages/History";
import Records from "./components/ts/pages/Records";
import Song from "./components/ts/pages/Song";
import Join from "./components/ts/pages/Join";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/history" element={<History />} />
          <Route path="/ranking" element={<Records />} />
          <Route path="/song" element={<Song />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
