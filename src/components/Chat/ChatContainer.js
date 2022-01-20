import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Chat from "../Chat/Chat";

function ChatContainer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 464 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Chat />
    </Box>
  );
  useEffect(() => {
    setState({ ...state, right: true });
  }, []);
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
      onOpen={toggleDrawer("right", true)}
    >
      {list("right")}
    </SwipeableDrawer>
  );
}

export default ChatContainer;
