import Regions from ".";
import RegionsStateContainer from "./regionsState";
import { Subscribe } from "unstated";
import * as React from "react";

const regions = [
  { name: "asia" },
  { name: "africa" },
  { name: "america" },
  { name: "europe" },
  { name: "australia" }
];

export default () => (
  <Subscribe to={[RegionsStateContainer]}>
    {(stateContainer: RegionsStateContainer) => <Regions onSelection={(name: string) => {
      stateContainer.selectRegion(name);
    }} regions={regions} />}
  </Subscribe>
);
