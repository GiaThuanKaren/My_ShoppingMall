import { Grid } from "@mui/material";
import React, { FC } from "react";
import { PropsSize } from "../../models";





const LeftSideBar:FC<PropsSize> = function ({List}) {
  return (
    <>
      <Grid item lg={3} xl={3} md={2} sm={2} >
        <div>LeftSideBar</div>
      </Grid>
    </>
  );
}

export default LeftSideBar;
