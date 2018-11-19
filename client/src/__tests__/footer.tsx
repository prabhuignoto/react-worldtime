import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Footer from "../components/footer";

const { getByTestId } = render(<Footer />);

const container = getByTestId("footer-test");

it("check if the footer is rendered", () => {
  expect(container).toBeInTheDocument();
  expect(container.querySelector(".footer-social")).toBeInTheDocument();
  expect(container.querySelector(".footer-design")).toBeInTheDocument();
});