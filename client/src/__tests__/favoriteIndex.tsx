import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import FavoriteIndex from "../components/favorite";
import { Provider } from "unstated";
import FavoriteState from "../components/favorite/favoriteState";
import TimezoneState from "../components/timezone/timezoneState";

const favState = new FavoriteState();
const tzState = new TimezoneState();
tzState.setActiveTimezone("Asia/Singapore");

const { container } = render(
  <Provider inject={[favState, tzState]}>
    <FavoriteIndex />
  </Provider>
);

it("Check if Favorite Index is rendered correctly", () => {
  expect(container).not.toBeNull();
});
