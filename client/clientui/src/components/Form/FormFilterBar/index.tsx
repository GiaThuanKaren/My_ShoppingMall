import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import { FC, memo } from "react";
import style from "./filterlistbar.module.css";
const FilterForm = function ({
  properties,
  SetChoose,
  Choose,
  HandleChoose,
}: any) {
  const HandleChangeChoose = function (
    kind: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(e.target.value, kind);
    SetChoose({
      ...Choose,
      [kind]: e.target.value,
    });
  };
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
  // console.log("Value Of Filter ",Choose[`${}`])
  return (
    <>
      <FormControl>
        {properties.attributeGroups.length >= 0 &&
          properties.attributeGroups.map((item: any, idx: number) => {
            // console.log("Value Of Filter ", Choose[item[0]]);

            return (
              <>
                <Typography
                  fontWeight={"600"}
                  fontSize={"1rem"}
                  component={"p"}
                >
                  {item[1].info.display_name}
                </Typography>
                <div className={clsx([style.List_choice])}>
                  {/* <Stack>
                  
                </Stack> */}
                  <RadioGroup
                    value={Choose[item[0]]}
                    key={`${idx}${Math.random() * 100}`}
                    onChange={(e) => {
                      console.log("Click ");
                      HandleChangeChoose(item[0], e);
                      //   HandleChoose(item[0], e);
                    }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    {RenderChooseForm(item[1].children)}
                  </RadioGroup>
                </div>
              </>
            );
          })}
      </FormControl>
    </>
  );
};
export default memo(FilterForm);
