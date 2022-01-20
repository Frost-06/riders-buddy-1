import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import Header from "../components/Header";
import CarouselContainer from "../components/Carousel/CarouselContainer"

function Product(props) {
  return (
    <div>
      <Header />
      <Container style={{ maxWidth: 1600 }}>
      <CarouselContainer/>
      </Container>
      
    </div>
    
    
  );
}

export default Product;
