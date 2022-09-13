import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { FetchFilter } from "../../api";
import { DisplayProduct, ListFilterBar, ListProduct } from "../../components";
import { LeftSideBar, RightSideBar } from "../../layouts";
// import {} from "@com"
function ProductList() {
  const [Params, SetParams] = useSearchParams();
  const [Curlink, SetCurLink] = useState<string>("");
  const [ProductData ,SetProductData]=useState([]);
  const {slug} =useParams();
  
  // console.log()
  const FetchApi =async function(PathQuery:string){
    let data = await FetchFilter({slug,PathQuery});
    console.log(data, "Result Filter ")
  }
  useEffect(() => {
    let QueryStringURL= window.location.href.replaceAll(window.location.origin,"");
    console.log()
    let StringPath =QueryStringURL.substring(QueryStringURL.indexOf('?')+1) 
    FetchApi(StringPath)
  }, []);
  return (
    <>
      <Grid className="margin_top_body body_page" container spacing={2}>
        <LeftSideBar component={<ListFilterBar />} />
        <RightSideBar component={<DisplayProduct component={<ListProduct Data={ProductData} />} />} />
      </Grid>
    </>
  );
}

export default ProductList;
