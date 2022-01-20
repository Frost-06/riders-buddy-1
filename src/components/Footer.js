import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

function Footer(props) {
  return (
    <div>
      <Box
        style={{
          height: "140px",
          backgroundColor: "#F7F7FC",
          maximumWidth: 1600,
          marginTop: "88px",
          backgroundSize: "cover",
          padding: "42px 170px 42px 170px",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
          width: "1920px!important",
          borderBottom: "1px solid #D9DBE9",
        }}
      >
        <Container style={{ marginLeft: "-20px" }}>
          <Typography
            variant="h1"
            style={{ fontWeight: "bold", color: "#1AA3E9" }}
          >
            Why Riders Buddy?
          </Typography>
        </Container>
      </Box>
      <Box
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "128px",
          marginLeft: "180px",
          marginTop: "36px",
          height: "140px",
          borderBottom: "1px solid #D9DBE9",
        }}
      >
        <Box>
          <Box style={{ display: "inline-flex", alignItems: "center" }}>
            <img src={"/img/prof-mechanic.png"} alt="prof" />
            <Container>
              <Typography variant="h2" style={{ color: "#0D5275" }}>
                Professional Mechanics
              </Typography>
              <Typography variant="normal">
                Cheap with excellent jobs
              </Typography>
            </Container>
          </Box>
        </Box>

        <Box>
          <Box style={{ display: "inline-flex", alignItems: "center" }}>
            <img src={"/img/security.png"} alt="prof" />
            <Container>
              <Typography variant="h2" style={{ color: "#0D5275" }}>
                Reliable products
              </Typography>
              <Typography variant="normal">
                Proven and tested product quality
              </Typography>
            </Container>
          </Box>
        </Box>

        <Box>
          <Box style={{ display: "inline-flex", alignItems: "center" }}>
            <img src={"/img/support.png"} alt="prof" />
            <Container>
              <Typography variant="h2" style={{ color: "#0D5275" }}>
                Customer Support
              </Typography>
              <Typography variant="normal">Friendly 24/7 Support</Typography>
            </Container>
          </Box>
        </Box>
      </Box>

      
    </div>
  );
}

export default Footer;
