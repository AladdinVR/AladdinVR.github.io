import React, { FunctionComponent } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SelectButtonProps } from "../../utils/Props";

const SelectButton: FunctionComponent<SelectButtonProps> = (
  props: SelectButtonProps
) => {
  return (
    <div {...props.div} className="SelectButton" style={{ overflow: "auto" }}>
      <FormControl
        style={{ background: "default" }}
        variant="standard"
        color="secondary"
        sx={{ m: 1, minWidth: 140 }}
      >
        <InputLabel id="input-label">
          {props.selectItems.inputLabel.text}
        </InputLabel>
        <Select
          defaultValue=""
          onChange={(e) => (props.onChange ? props.onChange(e) : null)}
          onClick={(e) => (props.onClick ? props.onClick(e) : null)}
        >
          {props.selectItems.menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              value={menuItem.text ? menuItem.text : ""}
            >
              {menuItem.text.slice(0, 1).toUpperCase() + menuItem.text.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectButton;
