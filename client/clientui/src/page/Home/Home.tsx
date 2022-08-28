import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import React, { useEffect, useId, useState } from "react";
import { FetchPopularProduct, FetchProductByCatologe } from "../../api";
import { HomeSlider, ListProduct } from "../../components";
import { FontAwesomeIcon, IconBrand } from "../../util/FontAwesom";
import style from "./Home.module.css";
interface State {
  DataList1: [];
}
function Home() {
  const [state, SetState] = useState<State>({
    DataList1: [],
  });
  useEffect(() => {
    async function FetchApi() {
      let data = await FetchProductByCatologe();
      SetState({
        ...state,
        DataList1: data.data,
      });
      // console.log(data.result);
    }
    FetchApi();
  }, []);

  return (
    <>
      <HomeSlider />
      <Container>
        {state.DataList1.length > 0 &&
          state.DataList1.map((item: any, idx: any) => {
            return (
              <>
                <ListProduct
                  slug={item.slug}
                  tittle={item.title}
                  Data={item.products}
                  isTittleCenter
                />
              </>
            );
          })}

        <section className={clsx([style.Home_ContactSection])}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <Typography fontWeight={"500"} component={"p"}>
                Đăng ký để nhận ưu đãi
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  id="outlined-basic"
                  label="Outlined Email"
                  variant="outlined"
                />
                <Button sx={{ height: "100%" }} variant="contained">
                  Contained
                </Button>
              </Box>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <FontAwesomeIcon icon={IconBrand.faInstagram} />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon icon={IconBrand.faFacebook} />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon icon={IconBrand.faTwitter} />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon icon={IconBrand.faPinterest} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
}

export default Home;
