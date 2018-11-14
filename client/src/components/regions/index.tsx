import { State } from "react-powerplug";
import * as React from "react";
import { ListPosed } from "./regions-styles";
import { IRegionsUI, IRegionUI, IRegion } from "./IRegions";
import Region from "./region";
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
    <Subscribe to={[TimezoneState]}>
      {(timezoneState: TimezoneState) => {
        // return (
        //   <State initial={{ items: regions }}>
        //     {({ state, setState }) => {
        //       const toggleSelection = (name: string) => {
        //         setState({
        //           items: updateSelection(state.items, name)
        //         });
        //         onSelection(name);
        //         timezoneState.setActiveTimezone('');
        //       };
        return (
          <ListPosed pose={"open"} initialPose={"close"} className="regions">
            {regions.map(region => (
              <Region
                name={region.name}
                handleSelection={() => {
                  onSelection(region.name)
                }}
                selected={region.selected}
                key={region.name}
              />
            ))}
          </ListPosed>
        );
        // }}
        {
          /* </State> */
        }
      }
      // );
      }
    </Subscribe>
  );
};

export default Regions;
