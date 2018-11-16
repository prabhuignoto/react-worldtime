import Regions from ".";
import RegionsStateContainer from "./regionsState";
import SidebarState from "../sidebar/sidebarState";
import TimezoneState from "../timezone/timezoneState";
import MainState from "../common/mainState";
import { Subscribe } from "unstated";
import * as React from "react";

interface IRegion {
  name: string;
  selected: boolean;
}

interface IRegionContainer {
  defaultRegion: string;
}

const regions: IRegion[] = [
  { name: "asia", selected: false },
  { name: "africa", selected: false },
  { name: "america", selected: false },
  { name: "europe", selected: false },
  { name: "australia", selected: false }
];

export default ({ defaultRegion}: IRegionContainer) => (
  <Subscribe to={[RegionsStateContainer, SidebarState, TimezoneState, MainState]}>
    {(
      stateContainer: RegionsStateContainer,
      sidebarState: SidebarState,
      timezoneState: TimezoneState,
      mainState: MainState
    ) => {
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
      } else if (selectedRegionInComp) {
        _regions = regions.map((region: IRegion) =>
          Object.assign({}, region, {
            selected: selectedRegionInComp === region.name ? true : false
          })
        );
      } else {
        _regions = regions.map(region => Object.assign({}, region, {
          selected: (defaultRegion.toLowerCase() === region.name.toLowerCase())
        }));
      }
      return (
        <Regions
          onSelection={(name: string) => {
            sidebarState.setFavorite("");
            timezoneState.setActiveTimezone("");
            mainState.clearZone();
            stateContainer.selectRegion(name);
          }}
          defaultRegion={defaultRegion}
          regions={_regions}
        />
      );
    }}
  </Subscribe>
);
