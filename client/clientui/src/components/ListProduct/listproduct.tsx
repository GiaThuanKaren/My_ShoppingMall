import { Box, Grid, Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../Card/cart";

import style from "./listproduct.module.css";
interface Prop1 {
  tittle?: String;
  Data?: [];
  isTittleCenter?: Boolean;
}
function ListProduct({
  tittle = "Default Tittle",
  Data = [],
  isTittleCenter = false,
}: Prop1) {
  console.log(Data);
  return (
    <>
      <Box sx={{ margin: "5px 0" }}>
        <Box className={clsx([style.ListProduct_Wrapp_Heading_Text])}>
          <Typography
            component={"h3"}
            fontSize={"1.2rem"}
            fontWeight={500}
            textAlign={isTittleCenter && "center"}
          >
            {tittle}
          </Typography>
          <Typography
            component={"h3"}
            fontSize={"1.2rem"}
            fontWeight={500}
            textAlign={isTittleCenter && "center"}
          >
            <Link to={"/product"}>See All</Link>
          </Typography>
        </Box>

        <Grid container spacing={3}>
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
