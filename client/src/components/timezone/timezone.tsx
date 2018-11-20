import * as React from "react";
import { ITimezoneUI } from "./ITimezone";
import { ListItem } from "./timezone-styles";

const Timezone: React.SFC<ITimezoneUI> = ({
  displayName,
  value,
  handleSelection
}) => (
  <ListItem
    data-testid="timezone-test"
    onClick={() => {
      if(handleSelection) {
        handleSelection(value);
      }
    }}
  >{displayName}</ListItem>
);

export default Timezone;