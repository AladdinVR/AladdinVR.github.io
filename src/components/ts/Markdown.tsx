import * as React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { MarkdownProps } from "../../utils/Props";

const Markdown = (props: MarkdownProps) => {
  const [textDisplayed, setTextDisplayed] = React.useState("");
  React.useEffect(() => {
    fetch(props.fileName)
      .then((res: { text: () => any }) => res.text())
      .then((text: string) => setTextDisplayed(text));
  }, []);
  return <ReactMarkdown children={textDisplayed} />;
};
export default Markdown;
