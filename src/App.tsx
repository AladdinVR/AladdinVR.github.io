import React, { useEffect, useState } from "react";
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
  const [page, setPage] = useState("home");
  const pageRenderer = (page: string) => {
    switch (page) {
      case "history":
        return <History {...markdowns.history} setPage={setPage} />;
      case "join":
        return <Join {...markdowns.join} setPage={setPage} />;
      case "song":
        return <Song {...markdowns.song} setPage={setPage} />;
      case "ranking":
        return <Records setPage={setPage} />;
      default:
        return <Home {...markdowns.home} setPage={setPage} />;
    }
  };
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

  return <div className="App">{pageRenderer(page)}</div>;
};

export default App;
