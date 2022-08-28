import { Grid } from "@mui/material";
import clsx from "clsx";
import React, { FC } from "react";
import { PropsSize } from "../../models";

function LeftSideBar(): JSX.Element {
  return (
    <>
      <Grid
        className={`hidden-sm hidden-xs`}
        item
        lg={3}
        xl={3}
        md={2}
      >
        <div>LeftSideBar</div>
      </Grid>
    </>
  );
}

export default LeftSideBar;
