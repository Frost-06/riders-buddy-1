import { useTheme } from "@emotion/react";
import { Button, Grid, LinearProgress } from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductItem() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Link to="/product">
      <Card sx={{ maxWidth: 356 }}>
        <CardHeader
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
        <CardMedia
          component="img"
          height="194"
          image="/img/image.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h2" style={{ 
            fontSize: 20,
            padding: "0px 0px 8px 0px"      
            }}>
            Limit for two lines, name of the product or services here...
          </Typography>
          <Typography variant="body2" color="text.secondary"
          >
            ⭐⭐⭐⭐⭐
            <span variant>5.0</span>&nbsp;&nbsp;
            <span>(25k)</span>
          </Typography>
          <Grid container columns={2} alignItems="center">
            <Grid xs={1}>
              <Typography
                style={{
                  color: "#1AA3E9",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                ₱ 1,500
              </Typography>
            </Grid>
            <Grid xs={1}>
              <Button variant="contained">Get Price</Button>
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions disableSpacing>
          <div style={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={80} />
          </div>
        </CardActions> */}
      </Card>
    </Link>
  );
}
