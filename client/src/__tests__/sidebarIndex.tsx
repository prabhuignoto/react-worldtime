import * as React from "react";
import { Provider } from "unstated";
import FavoriteState from "../components/favorite/favoriteState";
import SidebarState from "../components/sidebar/sidebarState";
import RegionState from "../components/regions/regionsState";
import TimezoneState from "../components/timezone/timezoneState";
import SidebarContainer from "../components/sidebar";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

const sidebarState = new SidebarState();
sidebarState.setState({
  isOpen: true
})

const { container } = render(
  <Provider
    inject={[
      new FavoriteState(),
      sidebarState,
      new RegionState(),
      new TimezoneState()
    ]}
  >
    <SidebarContainer />
  </Provider>
);

it("Check if the container renders properly", () => {
  expect(container).not.toBeNull();
})