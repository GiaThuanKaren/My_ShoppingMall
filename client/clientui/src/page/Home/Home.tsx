import { Grid } from "@mui/material";
import React, { useEffect, useId, useState } from "react";
import { FetchPopularProduct, FetchProductByCatologe } from "../../api";
import { HomeSlider, ListProduct } from "../../components";
interface State {
  DataList1: [];
  DataList2?: [];
  DataList3?: [];
  DataList4?: [];
  DataList5?: [];
  DataList6?: [];
  DataList7?: [];
  DataList8?: [];
  DataList9?: [];
  DataList10?: [];
}
function Home() {
  const [state, SetState] = useState<State>({
    DataList1: [],
    DataList2: [],
    DataList3: [],
    DataList4: [],
    DataList5: [],
    DataList6: [],
    DataList7: [],
    DataList8: [],
    DataList9: [],
    DataList10: [],
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
              <ListProduct tittle={item.title} Data={item.products} />
            </>
          );
        })}
      <Grid container></Grid>
    </>
  );
}

export default Home;
