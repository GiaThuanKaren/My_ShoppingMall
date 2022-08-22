import { Grid } from "@mui/material";
import React, { FC } from "react";


interface Props{
    Arr:[
        lg:Number,
        xl:Number,
        md:Number,
        sm:Number,
        xs:Number,
    ]
}


const LeftSideBar:FC<Props> = function ({Arr}) {
  return (
    <>
      <Grid item lg={3} xl={3} >
        <div>LeftSideBar</div>
      </Grid>
    </>
  );
}

export default LeftSideBar;
