import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

interface Props {
  tittle?: string;
  imageUrl?: string;
}

export default function CardProduct({ imageUrl = "", tittle = "" }: Props) {
  return (
    <>
      <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
        <Card sx={{ width: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                imageUrl
                  ? imageUrl
                  : "https://images.unsplash.com/photo-1657299170237-2d4cd59b5156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom component="p">
                {tittle}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}
