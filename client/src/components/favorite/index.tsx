import * as React from "react";
import { Subscribe } from "unstated";
import FavoriteState from "./favoriteState";
import TimezoneState from "../timezone/timezoneState";
import { includes } from "lodash";
import Favorite from "./favorite";

const Root: React.SFC<{}> = () => (
  <Subscribe to={[FavoriteState, TimezoneState]}>
    {(stateContainer: FavoriteState, timeState: TimezoneState) => {
      let view = null;
      const timeZone = timeState.state.activeTimezone;
      if (timeZone !== "") {
        const isFavorite = includes(stateContainer.state.favorites, timeZone);
        view = (
          <Favorite
            isFavorite={isFavorite}
            handleSelection={(state: boolean) => {
              if (state) {
                stateContainer.addFavorite(timeZone);
              } else {
                stateContainer.removeFavorite(timeZone);
              }
            }}
          />
        );
      }
      return view;
    }}
  </Subscribe>
);

export default Root;
