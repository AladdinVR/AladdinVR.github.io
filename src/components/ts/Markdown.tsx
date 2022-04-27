import React, { useState, useEffect } from "react";
import MuiMarkdown from "mui-markdown";
import { MarkdownProps } from "../../utils/Props";

const Markdown = (props: MarkdownProps) => {
  const [textDisplayed, setTextDisplayed] = useState("");
  return <MuiMarkdown children={textDisplayed} />;
};
export default Markdown;
