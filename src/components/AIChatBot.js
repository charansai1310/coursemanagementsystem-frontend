import React, { useState } from "react";

const AIChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <button class="chatbot-toggler" onClick={toggleChat}>
        <span class="material-symbols-outlined">mode_comment</span>
        <span class="material-symbols-outlined">close</span>
      </button>

      {isChatOpen && (
        <div>
          <iframe
            style={{
              position: "absolute",
              height: "60vh",
              width: "25vw",
              right: "40px",
              bottom: "180px",
              border: "1px solid black",
            }}
            src="https://widget.writesonic.com/CDN/index.html?service-base-url=https://api.botsonic.ai&token=90f469a2-db8b-4be0-9d46-f4fddffd763d&base-origin=https://bot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https://bot.writesonic.com/d39f716f-6ea8-467f-bcb4-3e9694068192?t=share&workspace_id=d4a31c5f-6183-4a24-bcb5-a7f487b8f8ac"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default AIChatBot;
