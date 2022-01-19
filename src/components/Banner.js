import { Container, Typography } from "@mui/material";
import React from "react";

function Banner(props) {
  return (
    <>
      <Container className="banner">
        <div>
          <Typography
            variant="h1"
            style={{
              fontWeight: 700,
            }}
          >
            Browse for nearby stores
          </Typography>
        </div>
      </Container>
    </>
  );
}

export default Banner;
