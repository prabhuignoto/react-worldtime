import * as React from "react";
import { ReactComponent as Globe } from "../assets/globe.svg";
import { ReactComponent as Bars } from "../assets/bars.svg";
import { Subscribe } from "unstated";
import SidebarState from "../sidebar/sidebarState";
import MainState from "../common/mainState";
import TimezoneState from "../timezone/timezoneState";
import RegionState from "../regions/regionsState";
import Header from "./header";

export default () => (
  <Subscribe to={[SidebarState, MainState, TimezoneState, RegionState]}>
    {(
      stateCntr: SidebarState,
      mainState: MainState,
      tzoneState: TimezoneState,
      regState: RegionState
    ) => {
      return (
        <Header
          handleBurger={() => {
            stateCntr.toggleSidebar();
          }}
          handleHome={() => {
            regState.selectRegion("");
            mainState.reset();
            tzoneState.setActiveTimezone("");
          }}
        />
      );
    }}
  </Subscribe>
);
