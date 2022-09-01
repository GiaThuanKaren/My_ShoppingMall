import { Button, Grid } from "@mui/material";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { DisplayProduct, ListFilterBar, ListProduct } from "../../components";
import { LeftSideBar, RightSideBar } from "../../layouts";

function ProductList() {
  // const [Params, SetParams] = useSearchParams();
  // console.log(Params.get("TagSlug"));
  // let page = Params.get("page") || "1";
  // console.log(page);
  return (
    <>
      <Grid className="margin_top_body body_page" container spacing={2}>
        <LeftSideBar component={<ListFilterBar />} />
        <RightSideBar component={<DisplayProduct  />} />
      </Grid>
    </>
  );
}

export default ProductList;
