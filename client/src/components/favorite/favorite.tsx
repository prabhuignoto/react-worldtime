import * as React from "react";
import { ReactComponent as PlainHeart } from "../../assets/heart-plain.svg";
import { ReactComponent as RedHeart } from "../../assets/heart.svg";
import { FavWrapper, Icon } from "./favorite-styles";
import { Toggle } from "react-powerplug";

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

export default Favorite;
