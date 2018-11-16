import * as React from "react";
import { ReactComponent as Globe } from "../assets/globe.svg";
import { ReactComponent as Bars } from "../assets/bars.svg";
import { Subscribe } from "unstated";
import SidebarState from "./sidebar/sidebarState";
import MainState from "./common/mainState";
import { Header, Burger, Logo, Icon, Home } from "./header-styles";
import TimezoneState from "./timezone/timezoneState";
import RegionState from "./regions/regionsState";

export default () => (
  <Header>
    <Subscribe to={[SidebarState, MainState, TimezoneState, RegionState]}>
      {(
        stateCntr: SidebarState,
        mainState: MainState,
        tzoneState: TimezoneState,
        regState: RegionState
      ) => {
        return (
          <>
            <Burger
              onClick={() => {
                stateCntr.toggleSidebar();
              }}
            >
              <Bars />
            </Burger>
            <Home
              onClick={() => {
                regState.selectRegion("");
                mainState.reset();
                tzoneState.setActiveTimezone("");
              }}
            >
              Switch to your Timezone
            </Home>
          </>
        );
      }}
    </Subscribe>
    <Logo>
      <span>WorldTime</span>
      <Icon>
        <Globe />
      </Icon>
    </Logo>
  </Header>
);
