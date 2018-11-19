import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Header from "../components/header/header";

const handleHome = jest.fn();
const handleBurger = jest.fn();

const { getByTestId } = render(
  <Header handleHome={handleHome} handleBurger={handleBurger} />
);

const container = getByTestId("header-test");
const home = container.querySelector(".home-link");
const burger = container.querySelector(".burger");

it("Check if the component is rendered", () => {
  expect(container).toBeInTheDocument();
  expect(container).not.toBeNull();
});

it("check if handlers are invoker", () => {
  if(home && burger) {
    fireEvent.click(home);
    fireEvent.click(burger);
  }
  expect(handleHome).toBeCalled();
  expect(handleBurger).toBeCalled();
})
