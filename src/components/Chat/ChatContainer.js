import React from "react";
import Chat from "../Chat/Chat";

function ChatContainer(props) {
  return (
    <div className="chat-container">
      <Chat />
      <div className="chat-overlay"></div>
    </div>
  );
}

export default ChatContainer;
