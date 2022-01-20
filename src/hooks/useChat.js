import { useContext, useEffect } from "react";
import ChatContext from "../context/ChatContext";

function useChat() {
  const { chatData, setChat } = useContext(ChatContext);
  return { chatData, setChat };
}

export default useChat;
