import LoadingState from "../components/common/loadingState";

const StateContainer = new LoadingState();

it("Check if loading state is created", () => {
  expect(StateContainer.state.isDataLoading).toEqual(false);
  expect(StateContainer.state.isTimezonesLoading).toEqual(false);
});

it("Check if timezones updated properly", () => {
  StateContainer.setTimezonesLoading(true, () => {
    expect(StateContainer.state.isTimezonesLoading).toEqual(true);
  });
})