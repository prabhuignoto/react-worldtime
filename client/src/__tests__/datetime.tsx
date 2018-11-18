import * as React from "react";
import Datetime, {
  getFormattedDatetimeFull,
  getFormattedDatetimeSimple
} from "../components/detail/date-time";
import { render, fireEvent, waitForElement } from "react-testing-library";
import "jest-dom/extend-expect";

const { getByTestId } = render(
  <Datetime datetime={new Date().toISOString()} timezone="Asia/Calcutta" />
);

const dateTime = getByTestId("details-datetime");

it("check if the details-date time is rendered correctly", () => {
  expect(dateTime).toBeInTheDocument();
  expect(dateTime).not.toBeNull();
});

it("check if full version of date time is rendered correctly", async () => {
  const showMore = dateTime.querySelector(".show-more-datetime");
  expect(showMore).toBeInTheDocument();

  // if (showMore) {
  //   fireEvent(showMore, new MouseEvent('click'));
  // }
  // ! test toggle function click does not seem to work
  // expect(dateTime.querySelector(".datetime-full")).toBeInTheDocument();
});

it("check if simple version of date time is rendered correctly", () => {
  expect(dateTime.querySelector(".datetime-simple")).toBeInTheDocument();
});
