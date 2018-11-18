import * as React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import Details from "../components/detail/details";

const date = new Date();

const { getByTestId, container } = render(
  <Details
    datetime={date.toISOString()}
    timezone="Asia/Calcutta"
    unixtime={date.getTime()}
    day_of_week={2}
    week_number={3}
    day_of_year={323}
    utc_offset={"-100"}
    dst={"dst"}
  />
);

const timezoneDetails = getByTestId("timezone-details");

it("Check if the Details is rendered", () => {
  expect(container).toBeInTheDocument();
  expect(timezoneDetails).not.toBeNull();
});

it("Check if all the children are rendered correctly", () => {
  expect(
    timezoneDetails.querySelectorAll(".datetime-details-fact").length
  ).toEqual(5);
});

it("Check if week-number is rendered correctly", () => {
  const weekNumber = timezoneDetails.querySelector(".week-number");
  if(weekNumber) {
    expect(weekNumber).toBeInTheDocument();
    expect(weekNumber.querySelector("span")).toHaveTextContent(/week of this year/);
  }
});

it("Check if day-of-year is rendered correctly", () => {
  const dayYear = timezoneDetails.querySelector(".day-of-year");
  if(dayYear) {
    expect(dayYear).toBeInTheDocument();
    expect(dayYear.querySelector("span")).toHaveTextContent(/day of this year/);
  }
});

it("Check if day-of-week is rendered correctly", () => {
  const dayWeek = timezoneDetails.querySelector(".day-of-week");
  if(dayWeek) {
    expect(dayWeek).toBeInTheDocument();
    expect(dayWeek.querySelector("span")).toHaveTextContent(/day of this week/);
  }
});

it("Check if unixtime is rendered correctly", () => {
  const unixTime = timezoneDetails.querySelector(".unixtime");
  if(unixTime) {
    expect(unixTime).toBeInTheDocument();
    expect(unixTime.querySelector("span")).toHaveTextContent(/UNIX time for Nerds/);
  }
});

it("Check if utc offset is rendered correctly", () => {
  const unixTime = timezoneDetails.querySelector(".utc-offset");
  if(unixTime) {
    expect(unixTime).toBeInTheDocument();
    expect(unixTime.querySelector("span")).toHaveTextContent(/UTC Offset -100/);
  }
});
