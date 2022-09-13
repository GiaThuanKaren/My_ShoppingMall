import { Box, Grid, Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../Card/cart";
import { GetSkeleton } from "../ListSkeletonData";

import style from "./listproduct.module.css";
interface Prop1 {
  tittle?: string;
  Data?: any;
  isTittleCenter?: Boolean;
  slug?: string;
  
}
function ListProduct({
  tittle ,
  Data = [],
  isTittleCenter = false,
  slug,
}: Prop1):JSX.Element {
  console.log(Data);
  // if(Data.length ){
  //   return <>
  //     <GetSkeleton />
  //   </>
  // }
  return (
    <>
      <Box className={clsx([style.ListProduct_MainContainer])}>
        {isTittleCenter == true && (
          <Link to={`/product/${slug}`}>
            <Typography
              sx={{ margin: "5px 0" }}
              component={"h3"}
              fontSize={"1.2rem"}
              fontWeight={500}
              textAlign={isTittleCenter && "center"}
            >
              {tittle}
            </Typography>
          </Link>
        )}

        {isTittleCenter == false && (
          <>
            <Box className={clsx([style.ListProduct_Wrapp_Heading_Text])}>
              <Typography
                component={"h3"}
                fontSize={"1.2rem"}
                fontWeight={500}
                textAlign={isTittleCenter && "center"}
              >
                {tittle}
              </Typography>
              <Link to={`/product?TagSlug=${slug}`}>
                <Typography
                  component={"h3"}
                  fontSize={"1.2rem"}
                  fontWeight={500}
                  textAlign={isTittleCenter && "center"}
                ></Typography>
              </Link>
            </Box>
          </>
        )}

        <Grid
          className={clsx([style.ListProduct_Container_Product])}
          container
          spacing={3}
        >
          {/* <CardProduct /> */}
          {Data.map((item: any, index: any) => {
            return (
              <>
                <CardProduct
                  imageUrl={item.imageM}
                  tittle={item.title}
                  price={item.priceShow}
                  salePercent={item.discountRate}
                />
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default ListProduct;
