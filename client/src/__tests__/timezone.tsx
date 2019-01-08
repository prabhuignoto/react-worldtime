import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Timezone from "../components/timezone/timezone";

const handleSelection = jest.fn();
const handleSelectionNull = undefined;

const {getByTestId, rerender} = render(
  <Timezone
    displayName="Asia/Calcutta"
    value="Asia/Calcutta"
    handleSelection={handleSelection}
  />
);

const container = getByTestId("timezone-test");

it("Check if timezone list item renders as expected", () => {
  expect(container).toBeInTheDocument();
});

it("Check if the value is rendered as expected", () => {
  expect(container.innerHTML).toEqual("Asia/Calcutta");
});

it("Check if handler works as expected", () => {
  fireEvent.click(container);
  expect(handleSelection).toBeCalled();
});

it("Check when handleselection is not passed", () => {
  rerender(<Timezone
    displayName="Asia/Calcutta"
    value="Asia/Calcutta"
    handleSelection={handleSelectionNull}
  />);
  expect(container).not.toBeNull();
  fireEvent.click(container);
});