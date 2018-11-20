import SidebarState from "../components/sidebar/sidebarState";

const StateContainer = new SidebarState();

it("check if state starts correctly", () => {
  const { isOpen, selectedFavorite } = StateContainer.state;
  expect(isOpen).toBeFalsy();
  expect(selectedFavorite).toEqual("");
});

it("Check if the toggle works as expected", () => {
  StateContainer.toggleSidebar(() => {
    expect(StateContainer.state.isOpen).toBeTruthy();
  });
});

it("check if set favorite works as expected", () => {
  StateContainer.setFavorite("Europe/London", () => {
    expect(StateContainer.state.selectedFavorite).toEqual("Europe/London");
  });
});
