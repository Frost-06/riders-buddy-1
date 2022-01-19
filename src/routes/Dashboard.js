import {
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import Categories from "../components/Categories";
import Header from "../components/Header";

function Dashboard(props) {
  return (
    <div>
      <Header />
      <Banner />
      <Container style={{ maxWidth: 1600 }}>
        <div style={{ marginBottom: 56 }}>
          <Typography variant="h2">Explore by Category</Typography>
          <Typography variant="body2" style={{ marginBottom: 49 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu
            justo, finibus ac nunc nec, dapibus vehicula massa. Vivamus nibh
            tellus, molestie quis tellus id, rhoncus mattis magna
          </Typography>
          <Categories />
        </div>
        <TextField
          style={{ width: 560, marginBottom: 56 }}
          className="searchbox noshadow"
          placeholder="Search product, or services..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/img/search-icon.png" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <CarouselContainer />
      </Container>
    </div>
  );
}

export default Dashboard;
