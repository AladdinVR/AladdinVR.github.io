import React, { useState, useEffect } from "react";
import MuiMarkdown from "mui-markdown";
import { MarkdownProps } from "../../utils/Props";

const Markdown = (props: MarkdownProps) => {
  const [textDisplayed, setTextDisplayed] = useState("");
  console.log(props.fileName);
  useEffect(() => {
    fetch(props.fileName)
      .then((res: { text: () => any }) => res.text())
      .then((text: string) => setTextDisplayed(text))
      .catch((error) => console.log(error));
  }, []);
  return <MuiMarkdown children={textDisplayed} />;
};
export default Markdown;
