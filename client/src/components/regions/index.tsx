import * as React from "react";
import { ListPosed } from "./regions-styles";
import { IRegionsUI } from "./IRegions";
import Region from "./region";
import TimezoneState from "../timezone/timezoneState";
import { Subscribe } from "unstated";

const Regions: React.SFC<IRegionsUI> = ({ regions, onSelection }) => {
  return (
    <Subscribe to={[TimezoneState]}>
      {(timezoneState: TimezoneState) => {
        return (
          <ListPosed pose={"open"} initialPose={"close"} className="regions">
            {regions.map(region => (
              <Region
                name={region.name}
                handleSelection={() => {
                  onSelection(region.name);
                }}
                selected={region.selected}
                key={region.name}
              />
            ))}
          </ListPosed>
        );
      }}
    </Subscribe>
  );
};

export default Regions;
