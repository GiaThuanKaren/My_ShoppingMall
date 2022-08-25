import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CardProduct from "../Card/cart";

import style from "./listproduct.module.css";
interface Prop1 {
  tittle: String;
  Data: [];
  isTittleCenter?:Boolean
}
function ListProduct({ tittle = "Default Tittle", Data = [],isTittleCenter=false }: Prop1) {
  return (
    <>
      <Box>
        <Typography component={"p"} textAlign={isTittleCenter &&"center"}>{tittle}</Typography>
        <Grid container spacing={3}>
          <CardProduct />
        </Grid>
      </Box>
    </>
  );
}

export default ListProduct;
