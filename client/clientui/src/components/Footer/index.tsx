import React from "react";

import style from "./footer.module.css";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import clsx from "clsx";

function MainFooter() {
  return (
    <>
      <Grid container className={clsx(style.Footer_MainContainer)}>
        <div>MainFooter</div>
      </Grid>
    </>
  );
}

export default MainFooter;
