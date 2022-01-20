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
  Avatar
} from "@mui/material";

import React from "react";
import Header from "../components/Header";
import CarouselContainer from "../components/Carousel/CarouselContainer"
import { useTheme } from "@emotion/react";

function Product(props) {
  const theme = useTheme();

  return (
    <div>
      <Header />
      <Container style={{ maxWidth: 1600,}} className="productDesc">
        <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/img/image.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          
          
        />
            <Grid item  md={5}  elevation={6} >
            <Typography variant="h2" style={{ 
              fontSize: 20,
              padding: "0px 0px 8px 0px"      
              }}>
              Full name for the product or service of the shop goes here. Lorem ipsum dolor sit amet, consectetur elit.Mauris rutrum massa ante, vel cursus ante sodales eu
            </Typography>

   
            <Typography variant="body2" color="text.secondary" className="productRatingReview">
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

                      <CardHeader style={{width: "60%",}}
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
                  action={<img src="/img/product-category-label-icon.png" />}
                  title=""
                  subheader=""
                />
                
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Get Price
                </Button>
                <Grid style={{
                  marginLeft: "24px",
                  marginRight: "24px",
                  display: "inline-flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "22px"
                }}>
                  
                <Avatar alt="Favourite" src="/img/Favorite.png" />

                <Typography variant="h3" >Add to Favourites</Typography>
                <img src={"/img/vertical-line.png"} alt="Logo" />

                <Avatar alt="Share" src="/img/Share.png" />

                <Typography variant="h3" >Share</Typography>
                <img src={"/img/vertical-line.png"} alt="Logo" />

                <Avatar alt="Share" src="/img/Compare.png" />

                <Typography variant="h3" >Compare</Typography>
                </Grid>
                

            </Grid>
          </Grid>
        <Typography variant="h2" style={{ marginBottom: "32px"}}>Similar Product</Typography>
      <CarouselContainer/>
      </Container>
    </div>
    
    
  );
}

export default Product;
