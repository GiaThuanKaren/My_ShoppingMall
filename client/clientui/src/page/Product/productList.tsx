import { Grid } from "@mui/material";
import React from "react";
import { ListFilterBar } from "../../components";
import { LeftSideBar, RightSideBar } from "../../layouts";

function ProductList() {
  return (
    <>
      <Grid className="margin_top_body body_page" container spacing={2}>
        <LeftSideBar component={<ListFilterBar />} />
        <RightSideBar />
      </Grid>
    </>
  );
}

export default ProductList;
