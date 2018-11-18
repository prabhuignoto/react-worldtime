import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Favorites from "../components/sidebar/favorites";

const favorites = ["Asia/Calcutta", "Europe/Lisbon"];
const handleSelection = jest.fn();
const { getByTestId } = render(<Favorites favorites={favorites} handleSelection={handleSelection} />)
const container = getByTestId("sidbar-favorites-test");

it("check if favorites render correctly", () => {
  expect(container).toBeInTheDocument();
  expect(container).not.toBeNull();
});

it("check if children are rendered correctly", () => {
  const children = container.querySelectorAll("li");
  expect(children.length).toEqual(2);
});

it("check if handler is called", () => {
  const item = container.querySelectorAll("li")[0];
  if(item) {
    fireEvent.click(item);
  }
  expect(handleSelection).toBeCalled();
})