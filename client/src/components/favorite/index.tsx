import * as React from "react";
import { Toggle } from "react-powerplug";
import { Subscribe } from "unstated";
import FavoriteState from "./favoriteState";
import TimezoneState from "../timezone/timezoneState";
import { includes } from "lodash";
import styled from "styled-components";
import { ReactComponent as PlainHeart } from "../../assets/heart-plain.svg";
import { ReactComponent as RedHeart } from "../../assets/heart.svg";

const FavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 0.5rem;
  margin-left: 1.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 3px;
  user-select: none;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Icon = styled.i`
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  margin-right: 0.5rem;
`;

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
