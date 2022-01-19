import {
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
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
              marginBottom: 24,
            }}
          >
            Browse for nearby stores
          </Typography>
          <Grid>
            <TextField
              className="searchbox"
              placeholder="Enter your delivery address..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="/img/location-icon.png" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <img src="/img/target-icon.png" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <Button variant="contained">Find Shops</Button>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Banner;
