import { Grid } from "@mui/material";
import React from "react";
import { LeftSideBar, RightSideBar } from "../../layouts";

function ProductList() {
  return (
    <>
      <Grid container spacing={2}>
        <LeftSideBar />
        <RightSideBar />
      </Grid>
    </>
  );
}

export default ProductList;
