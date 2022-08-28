import { Grid, Typography } from "@mui/material";
import React, { useEffect, useId, useState } from "react";
import { FetchPopularProduct, FetchProductByCatologe } from "../../api";
import { HomeSlider, ListProduct } from "../../components";
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
      {state.DataList1.length > 0 &&
        state.DataList1.map((item: any, idx: any) => {
          return (
            <>
              <ListProduct
                tittle={item.title}
                Data={item.products}
                isTittleCenter
              />
            </>
          );
        })}
      <section>
        <Grid container>
          <Grid item>
            <Typography component={"p"}>
                Đăng ký để nhận ưu đãi
            </Typography>
          </Grid>
          <Grid item>List</Grid>
          <Grid item>List</Grid>
        </Grid>
      </section>
    </>
  );
}

export default Home;
