import { Grid } from "@mui/material";
import React, { useId, useState } from "react";
import { HomeSlider } from "../../components";
interface State {
  DataList1: [];
  DataList2: [];
  DataList3: [];
  DataList4: [];
  DataList5: [];
  DataList6: [];
  DataList7: [];
  DataList8: [];
  DataList9: [];
  DataList10: [];
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
  return (
    <>
      <HomeSlider />
      <Grid container></Grid>
    </>
  );
}

export default Home;
