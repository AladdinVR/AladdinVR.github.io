import React, { useEffect, useState } from "react";
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

interface MarkdownDocument {
  history: {
    en: string;
    fr: string;
  };
  home: {
    en: string;
    fr: string;
  };
  join: {
    en: string;
    fr: string;
  };
  song: {
    en: string;
    fr: string;
  };
}

const App = () => {
  const [markdowns, setMarkdowns] = useState<MarkdownDocument>({
    history: { en: "", fr: "" },
    home: { en: "", fr: "" },
    join: { en: "", fr: "" },
    song: { en: "", fr: "" },
  });

  useEffect(() => {
    const keys = ["history", "home", "join", "song"];
    keys.forEach((document) => {
      fetch(`/markdown/en/${document}.md`)
        .then((res: { text: () => any }) => res.text())
        .then((text: string) =>
          setMarkdowns((prevState) => ({
            ...prevState,
            [document]: {
              en: text,
              fr: prevState[document as keyof MarkdownDocument].fr,
            },
          }))
        )
        .catch((error) => console.log(error));
    });
    keys.forEach((document) => {
      fetch(`/markdown/fr/${document}.md`)
        .then((res: { text: () => any }) => res.text())
        .then((text: string) =>
          setMarkdowns((prevState) => ({
            ...prevState,
            [document]: {
              en: prevState[document as keyof MarkdownDocument].en,
              fr: text,
            },
          }))
        )
        .catch((error) => console.log(error));
    });
  }, []);
  console.log("coucou");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home {...markdowns.home} />} />
          <Route path="/join" element={<Join {...markdowns.join} />} />
          <Route path="/history" element={<History {...markdowns.history} />} />
          <Route path="/ranking" element={<Records />} />
          <Route path="/song" element={<Song {...markdowns.song} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
