import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Region from "../components/regions/region";

const handleSelection = jest.fn();
const { getByTestId } = render(
  <Region name="asia" handleSelection={handleSelection} selected />
);
const container = getByTestId("region-test");

it("Check if region is rendered properly", () => {
  expect(container).toBeInTheDocument();
  expect(container).not.toBeNull();
});

it("Check if region name is rendered", () => {
  expect(container.querySelector(".region-name")).toHaveTextContent("asia");
});

it("check if icon image is rendered", () => {
  expect(container.querySelector(".region-icon img")).toBeInTheDocument();
});

it("Check if the handler is called", () => {
  fireEvent.click(container);
  expect(handleSelection).toBeCalled();
})