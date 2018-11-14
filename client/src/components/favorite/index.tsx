import * as React from "react";
import { Toggle } from "react-powerplug";
import { Subscribe } from "unstated";
import FavoriteState from "./favoriteState";
import TimezoneState from "../timezone/timezoneState";
import { includes } from "lodash";
import styled from "styled-components";
import { ReactComponent as PlainHeart } from "../../assets/heart-plain.svg";
import { ReactComponent as RedHeart } from "../../assets/heart.svg";
import { FavWrapper, Icon} from "./favorite-styles";

interface IFavorite {
  isFavorite: boolean;
  handleSelection: (state: boolean) => void;
}

const Favorite: React.SFC<IFavorite> = ({ isFavorite, handleSelection }) => (
  <Toggle initial={isFavorite}>
    {({ on, toggle }) => {
      return (
        <FavWrapper
          onClick={() => {
            toggle();
            setTimeout(() => {
              handleSelection(!on);
            }, 50);
          }}
        >
          <Icon>{isFavorite ? <RedHeart /> : <PlainHeart />}</Icon>
          {isFavorite ? (
            <span>Remove from your Favorites</span>
          ) : (
            <span>Add this to your Favorites</span>
          )}
        </FavWrapper>
      );
    }}
  </Toggle>
);

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
