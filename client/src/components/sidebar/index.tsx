import * as React from "react";
import FavoriteState from "../favorite/favoriteState";
import SidebarState from "../sidebar/sidebarState";
import RegionState from "../regions/regionsState";
import TimezoneState from "../timezone/timezoneState";
import { Subscribe } from "unstated";
import { ReactComponent as CloseSVG } from "../../assets/times-circle.svg";
import {
  PosedEntry,
  CloseIcon,
  PosedSidebar,
  FavoriteWrapper
} from "./sidebar-styles";

interface IFavoriteEntry {
  name: string;
  handleSelection: (timezone: string) => void;
}

interface IFavorites {
  favorites: string[];
  handleSelection: (timezone: string) => void;
}

const FavoriteEntry: React.SFC<IFavoriteEntry> = ({
  name,
  handleSelection
}) => <PosedEntry onClick={() => handleSelection(name)}>{name}</PosedEntry>;

const Favorites: React.SFC<IFavorites> = ({ favorites, handleSelection }) => {
  return (
    <FavoriteWrapper>
      {favorites.map((favorite: string) => (
        <FavoriteEntry name={favorite} handleSelection={handleSelection} />
      ))}
    </FavoriteWrapper>
  );
};

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
          <PosedSidebar pose={"open"} initialPose={"closed"}>
            <CloseIcon
              onClick={() => {
                sidebarState.toggleSidebar();
              }}
            >
              <CloseSVG />
            </CloseIcon>
            <h1>Favorites</h1>
            <Favorites
              favorites={favState.state.favorites}
              handleSelection={(timezone: string) => {
                sidebarState.setFavorite(timezone);
                sidebarState.toggleSidebar();
                regionState.selectRegion(timezone.split("/").shift() || "");
                timezoneState.setActiveTimezone(timezone);
              }}
            />
          </PosedSidebar>
        );
      }
      return view;
    }}
  </Subscribe>
);

export default Root;
