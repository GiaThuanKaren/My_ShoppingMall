import { Grid } from "@mui/material";
import React from "react";
interface Props {
  component?: React.ReactNode;
}
function RightSideBar({ component }: Props): JSX.Element {
  return (
    <>
      <Grid item lg={9} xl={9} md={10} sm={12} xs={12}>
        {component}
      </Grid>
    </>
  );
}

export default RightSideBar;
