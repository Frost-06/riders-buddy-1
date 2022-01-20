import {
    Box,
    Container,
    Grid,
    Typography,
    CardHeader,
    Button,
    Avatar,
  } from "@mui/material";
  
  import React from "react";
  import { useTheme } from "@emotion/react";
  
  function ServiceDetails(props) {
    const theme = useTheme();
  
    return (
      <div>
        <Typography
              variant="h2"
              style={{
                fontSize: 20,
                padding: "0px 0px 8px 0px",
              }}
            >
              Full name for the product or service of the shop goes here. Lorem
              ipsum dolor sit amet, consectetur elit.Mauris rutrum massa ante,
              vel cursus ante sodales eu
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              className="productRatingReview"
            >
              ⭐⭐⭐⭐⭐ &nbsp;&nbsp;
              <span variant>5.0 | </span>&nbsp;&nbsp;
              <span>1k review | </span> &nbsp;&nbsp;
              <span>500 sold</span>
            </Typography>

            <Grid className="priceRange" container columns={2}>
              <Typography
                style={{
                  color: "#1AA3E9",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                ₱ 1,500 -₱ 3,500
              </Typography>

              <CardHeader
                style={{ width: "60%" }}
                avatar={
                  <Box
                    bgcolor={theme.palette.primary.main}
                    color="#ffffff"
                    width={100}
                    style={{ padding: "5px 9px" }}
                  >
                    25% off
                  </Box>
                }
                title=""
                subheader=""
              />
            </Grid>

            <Grid
              style={{
                width: "100%",
                display: "inline-flex",
                marginBottom: "32px",
                marginTop: "32px",
              }}
            >
              <Container>
                <Typography
                  variant="label"
                  style={{ display: "inline-flex", gap: "76px" }}
                >
                  Status:
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#008A00",
                    }}
                  >
                    Available
                  </span>
                </Typography>
              </Container>

              <Container>
                <Typography
                  variant="label"
                  style={{ display: "inline-flex", gap: "48px" }}
                >
                  Categories:
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#1AA3E9",
                      marginLeft: "-6px",
                    }}
                  >
                    Bicycle Service
                  </span>
                </Typography>
              </Container>
            </Grid>

            <Grid
              style={{
                width: "100%",
                display: "inline-flex",
                marginBottom: "32px",
              }}
            >
              <Container>
                <Typography
                  variant="label"
                  style={{ display: "inline-flex", gap: "56px" }}
                >
                  Service Type:
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#14142B",
                      marginLeft: "-28px",
                    }}
                  >
                    Tire Installation
                  </span>
                </Typography>
              </Container>
              <Container>
                <Typography
                  variant="label"
                  style={{ display: "inline-flex", gap: "79px" }}
                >
                  Availability:
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#14142B",
                      marginLeft: "-36px",
                    }}
                  >
                    Mon - Fri
                  </span>
                </Typography>
              </Container>
            </Grid>

            <Grid
              style={{
                width: "100%",
                display: "inline-flex",
                marginBottom: "32px",
              }}
            >
              <Container>
                <Typography
                  variant="label"
                  style={{ display: "inline-flex", gap: "42px" }}
                >
                  Labor type:
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#14142B",
                    }}
                  >
                    per service
                  </span>
                </Typography>
              </Container>
              <Container>
                <Typography
                  variant="label"
                  style={{ display: "inline-flex", gap: "90px" }}
                >
                  Time:
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#14142B",
                    }}
                  >
                    08:00 A.M. - 05:00 P.M.
                  </span>
                </Typography>
              </Container>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Get Price
            </Button>
            <Grid
              style={{
                marginLeft: "24px",
                marginRight: "24px",
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "22px",
              }}
            >
              <Avatar alt="Favourite" src="/img/Favorite.png" />

              <Typography variant="h3">Add to Favourites</Typography>
              <img src={"/img/vertical-line.png"} alt="vertical" />

              <img src={"/img/Share.png"} alt="vertical" />

              <Typography variant="h3">Share</Typography>
              <img src={"/img/vertical-line.png"} alt="vertical" />

              <img src={"/img/Compare.png"} alt="vertical" />
              <Typography variant="h3">Compare</Typography>
            </Grid>
      </div>
    );
  }
  
  export default ServiceDetails;
  