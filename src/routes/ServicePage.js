import {
  Container,
  Grid,
  Typography,
  CssBaseline,
  Link,
  Breadcrumbs,
} from "@mui/material";

import React from "react";
import Header from "../components/Header";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import ServiceDetails from "../components/Service/ServiceDetails";

function Service(props) {

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

          <Typography color="text.primary">Service Page</Typography>
        </Breadcrumbs>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
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
          <Grid item md={5} elevation={6}>
            <ServiceDetails />
          </Grid>
        </Grid>
        <Typography variant="h2" style={{ marginBottom: "32px" }}>
          Similar Services
        </Typography>
        <CarouselContainer />
      </Container>
    </div>
  );
}

export default Service;
