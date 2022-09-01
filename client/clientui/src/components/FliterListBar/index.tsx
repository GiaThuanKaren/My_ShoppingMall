import React, { FC, memo, useCallback, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import style from "./filterlistbar.module.css";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { FetchFilter } from "../../api";
import { FilterCondition } from "../../models/index";
import { useParams, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { FormFilterBar } from "../index";
interface Data {
  products?: {};
  aggregate?: {};
  attributeGroups?: any;
}

const List_Choose_Filter: FC = function ({ item1 }: any) {
  return (
    <>
      <FormControlLabel
        className={clsx(style.List_choice_Item)}
        value={item1.slug}
        control={<Radio />}
        label={item1.display_name}
      />
    </>
  );
};

function ListFilterBar() {
  const [Choose, SetChoose] = useState({});
  const { slug } = useParams();
  const HandleChangeChoose = function (
    kind: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    SetChoose({
      ...Choose,
      [kind]: e.target.value,
    });
  };
  const [Params, SetParams] = useSearchParams();
  const [state, setState] = useState<number>(1);
  const [properties, Setproperties] = useState<Data>({
    aggregate: {},
    products: {},
    attributeGroups: [],
  });

  console.log(Choose);
  async function FetchApi() {
    // let QueryParam:string = Params.get("TagSlug");
    let data = await FetchFilter({ slug: slug ?? "giay" });
    console.log(data);
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
    let arr = item.slice(0, 6).map((item1: any, index: number) => {
      return (
        <>
          <FormControlLabel
            className={clsx(style.List_choice_Item)}
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
      <Button
        onClick={() => {
          // setState((prev) => prev + 1);
          SetParams({
            ...Choose,
          });
        }}
        variant="contained"
      >
        Filter
      </Button>
      <Divider></Divider>
      <FormFilterBar
        properties={properties}
        SetChoose={SetChoose}
        Choose={Choose}
        HandleChoose={HandleChangeChoose}
      />
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
    </>
  );
}

export default ListFilterBar;
