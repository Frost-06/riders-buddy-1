import { useTheme } from "@emotion/react";
import { Button, Grid, LinearProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Box
            bgcolor={theme.palette.primary.main}
            color="#ffffff"
            width={108}
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
        <Typography variant="h2" style={{ fontSize: 20 }}>
          Limit for two lines, name of the product or services here...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ⭐⭐⭐⭐⭐
          <span>5.0</span>&nbsp;&nbsp;
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
      <CardActions disableSpacing>
        <div style={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={80} />
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
