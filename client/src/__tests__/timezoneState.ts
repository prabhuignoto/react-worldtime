import TimezoneState from "../components/timezone/timezoneState";

const StateContainer = new TimezoneState();

it("Check if timezone state initiates properly", () => {
  const {activeTimezone, isLoadingData} = StateContainer.state;
  expect(activeTimezone).toEqual("");
  expect(isLoadingData).toBeFalsy();
});

it("check if setActiveTimezone updates properly", () => {
  StateContainer.setActiveTimezone("Asia/Singapore", () => {
    expect(StateContainer.state.activeTimezone).toEqual("Asia/Singapore")
  })
});

it("Check if loading status is true", () => {
  StateContainer.updateLoadingStatus(true, () => {
    expect(StateContainer.state.isLoadingData).toBeTruthy();
  })
})