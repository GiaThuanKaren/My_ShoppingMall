import { Grid } from "@mui/material";
import clsx from "clsx";
import React, { FC, ReactNode, useEffect } from "react";
import { PropsSize } from "../../models";
interface Props {
  component?: ReactNode;
}
function LeftSideBar({ component }: Props): JSX.Element {
  useEffect(()=>{
    
  },[])
  return (
    <>
      <Grid className={`hidden-sm hidden-xs`} item lg={3} xl={3} md={2}>
        {component}
      </Grid>
    </>
  );
}

export default LeftSideBar;
