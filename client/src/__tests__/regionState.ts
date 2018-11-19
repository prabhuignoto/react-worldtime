import RegionState from "../components/regions/regionsState";

const StateContainer = new RegionState();

it("Check if region state is initiated", () => {
  expect(StateContainer.state.selectedRegion).toEqual("");
});

it("Check if selected region is working", () => {
  StateContainer.selectRegion("Asia", () => {
    expect(StateContainer.state).toEqual("Asia");
  });
});
  