import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import Favorites from "../components/favorite/favorite";
import "jest-dom/extend-expect";

const spy = jest.fn();
const { getByTestId } = render(
  <Favorites isFavorite={true} handleSelection={spy} />
);
const container = getByTestId("favorite-test");

it("Favorite renders correctly", () => {
  expect(container).toBeInTheDocument();
});

it("Check if remove favorites is visible", () => {
  expect(container.querySelector(".remove-fav-msg")).toBeInTheDocument();
});
