import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import Sidebar from "../components/sidebar/sidebar";
import "jest-dom/extend-expect";

const favorites = ["Asia/Calcutta", "Europe/Lisbon"];
const handleClose = jest.fn();
const handefavSelection = jest.fn();

const { getByTestId } = render(
  <Sidebar
    favorites={favorites}
    handleClose={handleClose}
    handleFavSelection={handefavSelection}
  />
);

const container = getByTestId("sidebar-wrapper-test");

it("Check if sidebar is rendered correctly", () => {
  expect(container).toBeInTheDocument();
  expect(container).not.toBeNull();
});

it("Check if handlers are called", () => {
  const closeBtn = container.querySelector(".close-sidebar");
  if(closeBtn) {
    fireEvent.click(closeBtn);
  }
  expect(handleClose).toBeCalledTimes(1);
})