import { State } from "react-powerplug";
import * as React from "react";
import { ListPosed } from "./regions-styles";
import { IRegionsUI, IRegionUI, IRegion } from "./IRegions";
import Region from "./region";
import SidebarState from "../sidebar/sidebarState";
import TimezoneState from "../timezone/timezoneState";
import { Subscribe } from "unstated";

const updateSelection = (items: IRegionUI[], name: string) =>
  items.map((item: IRegionUI) => {
    let selected = false;
    if (item.name === name) {
      selected = true;
    }
    return Object.assign({}, item, {
      selected
    });
  });

const Regions: React.SFC<IRegionsUI> = ({ regions, onSelection }) => {
  return (
    <Subscribe to={[SidebarState, TimezoneState]}>
      {(sidebarState: SidebarState, timezoneState: TimezoneState) => {
        const regionsStart = regions.map(reg => {
          let favRegion: string = sidebarState.state.selectedFavorite
            .split("/")
            .shift() as string;
          let selected = false;
          if (favRegion.toLowerCase() === reg.name.toLowerCase()) {
            selected = true;
          }
          return Object.assign({}, reg, { selected });
        });
        return (
          <State initial={{ items: regionsStart }}>
            {({ state, setState }) => {
              const toggleSelection = (name: string) => {
                setState({
                  items: updateSelection(state.items, name)
                });
                onSelection(name);
                timezoneState.setActiveTimezone('');
              };
              return (
                <ListPosed
                  pose={"open"}
                  initialPose={"close"}
                  className="regions"
                >
                  {state.items.map(region => (
                    <Region
                      name={region.name}
                      handleSelection={toggleSelection}
                      selected={region.selected}
                      key={region.name}
                    />
                  ))}
                </ListPosed>
              );
            }}
          </State>
        );
      }}
    </Subscribe>
  );
};

export default Regions;
