import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductItem from "../ProductItem";

function CarouselItems(props) {
  return (
    <Box width="100%" spacing={2}>
      <Grid container columns={4}  spacing={2}>
        {new Array(4).fill(0).map((a, i) => (
          <Grid key={i} item xs={1}>
            <ProductItem />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CarouselItems;
