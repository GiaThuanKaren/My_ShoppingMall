import React, { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import style from "./filterlistbar.module.css";
import { Typography } from "@mui/material";
import { FetchFilter } from "../../api";
function ListFilterBar() {
  useEffect(()=>{
    async function FetchApi(){
      let data = await FetchFilter();
    }
  },[])
  return (
    <>
      <div>ProductListBar</div>
      <FormControl>
        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
        <Typography component={"p"}>Gender</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default ListFilterBar;
