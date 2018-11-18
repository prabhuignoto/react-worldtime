import * as React from "react";
import FavoriteState from "../favorite/favoriteState";
import SidebarState from "../sidebar/sidebarState";
import RegionState from "../regions/regionsState";
import TimezoneState from "../timezone/timezoneState";
import { Subscribe } from "unstated";
import Sidebar from "./sidebar";

const Root: React.SFC<{}> = () => (
  <Subscribe to={[FavoriteState, SidebarState, RegionState, TimezoneState]}>
    {(
      favState: FavoriteState,
      sidebarState: SidebarState,
      regionState: RegionState,
      timezoneState: TimezoneState
    ) => {
      let view = null;
      if (sidebarState.state.isOpen) {
        view = (
          <Sidebar
            favorites={favState.state.favorites}
            handleClose={() => {
              sidebarState.toggleSidebar();
            }}
            handleFavSelection={
              (timezone: string) => {
                sidebarState.setFavorite(timezone);
                sidebarState.toggleSidebar();
                regionState.selectRegion(timezone.split("/").shift() || "");
                timezoneState.setActiveTimezone(timezone);
              }
            }
          />
        );
      }
      return view;
    }}
  </Subscribe>
);

export default Root;
