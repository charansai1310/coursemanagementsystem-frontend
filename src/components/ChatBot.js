import "./ChatBot.css";
import "material-symbols";
import React, { useEffect, useState } from "react";
function ChatBot() {
  let [htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`index.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default ChatBot;
