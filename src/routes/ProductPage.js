import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  CardHeader,
  CssBaseline,
  Button,
  Avatar,
  Link,
  Breadcrumbs,
} from "@mui/material";

import React from "react";
import Header from "../components/Header";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import { useTheme } from "@emotion/react";
import ProductDetails from "../components/Product/ProductDetails";

function ProductPage(props) {
  const theme = useTheme();

  return (
    <div>
      <Header />
      <Container
        style={{ maxWidth: 1600, marginTop: "48px" }}
        className="productDesc"
      >
        <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: "24px" }}>
          <Link underline="hover" color="inherit" href="/" variant="h3" st>
            Home
          </Link>

          <Typography color="text.primary">Product Page</Typography>
        </Breadcrumbs>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />

          {/* Product Images */}
          <Grid
            item
            xs={false}
            sm={4}
            md={6.7}
            sx={{
              backgroundImage: "url(/img/image.png)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginRight: "35px",
            }}
          />

          {/* Product Details */}
          <Grid item md={5} elevation={6}>
            <ProductDetails />
          </Grid>
        </Grid>

        <Typography variant="h2" style={{ marginBottom: "32px" }}>
          Similar Product
        </Typography>
        <CarouselContainer />
      </Container>
    </div>
  );
}

export default ProductPage;
