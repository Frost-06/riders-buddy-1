import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Link,
  Divider,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Header() {
  const loginID = 1;
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Container style={{ marginTop: 40 }}>
      <Box style={{display: "flex", gap: "32px", alignItems: "center"}}>
      <img src={"/img/user-icon.png"} style={{ width: "25%"}}alt="prof" />
        <Box style={{display: "flex",flexDirection: "column"}}>
        <Typography variant="h1" style={{ fontSize: 28}}>
          Username
        </Typography >
        <Link  style={{fontWeight: "bold !important", color: "#1AA3E9" }}>View Account</Link>
        </Box>

      </Box>
        <Box>
          {/* Navigation */}          
          <nav>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  style={{ marginBottom: "24px", padding: "22px" }}
                >
                  <ListItemIcon>
                    <img src={"/img/my-order.png"} alt="prof" />
                  </ListItemIcon>
                  <Typography style={{ fontWeight: "bold" }}>
                    My Orders
                  </Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  style={{ marginBottom: "24px", padding: "22px" }}
                >
                  <ListItemIcon>
                    <img src={"/img/my-favourites.png"} alt="prof" />
                  </ListItemIcon>
                  <Typography style={{ fontWeight: "bold" }}>
                    My Favourites
                  </Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  style={{ marginBottom: "24px", padding: "22px" }}
                >
                  <ListItemIcon>
                    <img src={"/img/vouchers.png"} alt="prof" />
                  </ListItemIcon>
                  <Typography style={{ fontWeight: "bold" }}>
                    Vouchers
                  </Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  style={{ marginBottom: "24px", padding: "22px" }}
                >
                  <ListItemIcon>
                    <img src={"/img/log-out.png"} alt="prof" />
                  </ListItemIcon>
                  <Link style={{ fontWeight: "bold" }} href={"/"}>
                    Log-out
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
        </Box>
        <List>
          {["About us", "Seller Center", "Help Center"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );

  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <img src="/img/logo.png" width="249" height="40" />
            </Link>
          </Typography>
          <Link
            style={{ marginRight: 40, width:"-25%"}}
          >
            <img src="/img/message.png" height="40" />
          </Link>
          <Link
            style={{ marginRight: 24, width:"-25%"}}
          >
            <img src="/img/cart.png" height="40" />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
