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
    console.log(PathQuery)
    let data = await FetchFilter({slug,querySearch:PathQuery});
    console.log(data, "Result Filter ")
    SetProductData(data.products.data)
  }
  useEffect(() => {
    let QueryStringURL= window.location.href.replaceAll(window.location.origin,"");
    console.log()
    let StringPath =QueryStringURL.substring(QueryStringURL.indexOf('?')+1) 
    console.log(StringPath , " query String");
    FetchApi(StringPath)
  }, [ window.location.href]);
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
