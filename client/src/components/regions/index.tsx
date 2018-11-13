import { State } from "react-powerplug";
import * as React from "react";
import { ListPosed, ListItem, Icon } from "./regions-styles";
import { IRegionsUI, IRegionUI, IRegion } from "./IRegions";
import Region from "./region";

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
  const regionsStart = regions.map(reg =>
    Object.assign({}, reg, { selected: false })
  );
  return (
    <State initial={{ items: regionsStart }}>
      {({ state, setState }) => {
        const toggleSelection = (name: string) => {
          setState({
            items: updateSelection(state.items, name)
          });
          onSelection(name);
        };
        return (
          <ListPosed pose={'open'} initialPose={'close'}className="regions">
            {state.items.map(region => (
              <Region
                name={region.name}
                handleSelection={toggleSelection}
                selected={region.selected}
              />
            ))}
          </ListPosed>
        );
      }}
    </State>
  );
};

export default Regions;
