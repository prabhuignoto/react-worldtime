import Regions from ".";
import RegionsStateContainer from "./regionsState";
import SidebarState from "../sidebar/sidebarState";
import TimezoneState from "../timezone/timezoneState";
import { Subscribe } from "unstated";
import * as React from "react";

interface IRegion {
  name: string;
  selected: boolean;
}

const regions: IRegion[] = [
  { name: "asia", selected: false },
  { name: "africa", selected: false },
  { name: "america", selected: false },
  { name: "europe", selected: false },
  { name: "australia", selected: false }
];

export default () => (
  <Subscribe to={[RegionsStateContainer, SidebarState,TimezoneState]}>
    {(stateContainer: RegionsStateContainer, sidebarState: SidebarState, timezoneState: TimezoneState) => {
      let isFavoriteSelected = sidebarState.state.selectedFavorite;
      let selectedRegionInComp = stateContainer.state.selectedRegion;

      let regionSelected: string = (isFavoriteSelected
        .split("/")
        .shift() as string).toLowerCase();
      let _regions = [];

      if (isFavoriteSelected) {
        _regions = regions.map((region: IRegion) =>
          Object.assign({}, region, {
            selected: regionSelected === region.name ? true : false
          })
        );
      } else if(selectedRegionInComp) {
        _regions = regions.map((region: IRegion) =>
          Object.assign({}, region, {
            selected: selectedRegionInComp === region.name ? true : false
          })
        );
      }
      else {
        _regions = regions;
      }

      return (
        <Regions
          onSelection={(name: string) => {
            sidebarState.setFavorite("");
            timezoneState.setActiveTimezone("");
            stateContainer.selectRegion(name);
          }}
          regions={_regions}
        />
      );
    }}
  </Subscribe>
);
