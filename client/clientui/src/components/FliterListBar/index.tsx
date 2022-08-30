import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import style from "./filterlistbar.module.css";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { FetchFilter } from "../../api";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

interface Data {
  products?: {};
  aggregate?: {};
  attributeGroups?: any;
}

function ListFilterBar() {
  const [Params, SetParams] = useSearchParams();
  const [properties, Setproperties] = useState<Data>({
    aggregate: {},
    products: {},
    attributeGroups: [],
  });
  const HandleChangeChoose = function (
    kind: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(e.target.value, kind);
  };
  async function FetchApi() {
    let data = await FetchFilter({});
    console.log(Object.entries(data.attributeGroups));
    Setproperties({
      ...properties,
      attributeGroups: Object.entries(data.attributeGroups),
    });
  }
  useEffect(() => {
    FetchApi();
  }, []);
  const RenderChooseForm = function (item: any) {
    let arr = item.map((item1: any, index: number) => {
      return (
        <>
          <FormControlLabel
            value={item1.slug}
            control={<Radio />}
            label={item1.display_name}
          />
        </>
      );
    });
    return arr;
  };

  return (
    <>
      <div>ProductListBar</div>
      <Button disabled variant="contained">
        Filter
      </Button>
      <Divider></Divider>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      {properties.attributeGroups.length >= 0 &&
        properties.attributeGroups.map((item: any, idx: number) => {
          return (
            <>
              <div className={clsx([style.List_choice])}>
                <Stack>
                  <Typography component={"p"}>{item[0]}</Typography>
                  <FormControl>
                    <RadioGroup
                      key={`${idx}${Math.random() * 100}`}
                      onChange={(e) => {
                        HandleChangeChoose("Gender 2", e);
                      }}
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      {RenderChooseForm(item[1].children)}
                      {/* {Test()} */}
                    </RadioGroup>
                  </FormControl>
                </Stack>
              </div>
            </>
          );
        })}
    </>
  );
}

export default ListFilterBar;
