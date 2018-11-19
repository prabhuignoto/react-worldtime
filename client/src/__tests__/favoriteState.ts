import FavoriteState from "../components/favorite/favoriteState";

const StateContainer = new FavoriteState();

it("Favorite State container starts as expected", () => {
  const { favorites } = StateContainer.state;
  expect(favorites.length).toEqual(0);
});

it("Check add favorite works as expected", () => {
  StateContainer.addFavorite("Asia/Calcutta", () => {
    const {favorites} = StateContainer.state;
    expect(favorites.length).toEqual(1);
  })
});

it("Check remove favorite works as expected", () => {
  StateContainer.removeFavorite("Asia/Calcutta", () => {
    const {favorites} = StateContainer.state;
    expect(favorites.length).toEqual(0);
  })
});
