import { PosedEntry, FavoriteWrapper } from "./sidebar-styles";
import * as React from "react";

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
    <FavoriteWrapper data-testid="sidbar-favorites-test">
      {favorites.map((favorite: string) => (
        <FavoriteEntry
          name={favorite}
          handleSelection={handleSelection}
          key={favorite}
        />
      ))}
    </FavoriteWrapper>
  );
};

export default Favorites;
