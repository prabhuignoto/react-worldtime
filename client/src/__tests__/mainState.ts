import MainState from "../components/common/mainState";

const StateContainer = new MainState();

it("Check if state is initialized properly", () => {
  const { defaultRegion, defaultTimezone } = StateContainer.state;
  expect(defaultRegion).not.toBeNull();
  expect(defaultTimezone).not.toBeNull();
});

it("Check if reset works as expected", () => {
  StateContainer.reset(() => {
    const { defaultRegion, defaultTimezone } = StateContainer.state;
    expect(defaultRegion).toBeEmpty();
    expect(defaultTimezone).toBeEmpty();
  });
});

it("Check if clear zone is working", () => {
  StateContainer.clearZone(() => {
    const { defaultTimezone } = StateContainer.state;
    expect(defaultTimezone).toBeEmpty();
  })
})
