import { Box, Grid, Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../Card/cart";

import style from "./listproduct.module.css";
interface Prop1 {
  tittle?: string;
  Data?: [];
  isTittleCenter?: Boolean;
  slug?: string;
}
function ListProduct({
  tittle = "Default Tittle",
  Data = [],
  isTittleCenter = false,
  slug,
}: Prop1) {
  console.log(Data);
  return (
    <>
      <Box className={clsx([style.ListProduct_MainContainer])}>
        {isTittleCenter == true && (
          <Link to={`/product?TagSlug=${slug}`}>
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
                  price={item.price}
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
