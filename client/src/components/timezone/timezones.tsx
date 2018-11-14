import * as React from "react";
import {
  List,
  PosedListLabel,
  PosedListContainer,
  ListWrapper,
  ListContainer,
  Searchbox,
  Icon
} from "./timezones-styles";
import Timezone from "./timezone";
import { ITimezonesUI, ITimezone, ITimezoneUI } from "./ITimezone";
import { Toggle, State } from "react-powerplug";
import { ListItem } from "./timezone-styles";
import { FormEvent } from "react";
import { stat } from "fs";
import { ReactComponent as AngleUp } from "../../assets/angle-up.svg";
import { ReactComponent as AngleDown } from "../../assets/angle-down.svg";
import SidebarState from "../sidebar/sidebarState";
import { Subscribe } from "unstated";

const Timezones: React.SFC<ITimezonesUI> = ({ zones, handleSelection }) => (
  // toggle power-plug
  <Toggle>
    {({ on, toggle }) => (
      // state power-plug
      <State
        initial={{ label: "Select a Timezone", localZones: zones.slice(0) }}
      >
        {({ state, setState }) => {
          // updates the selection made passes the value up the tree
          const _handleSelection = (name: string) => {
            if (handleSelection) {
              setState({
                label: name
              });
              handleSelection(name);
              toggle();
            }
          };
          const filterSearch = (ev: FormEvent<HTMLInputElement>) => {
            const value = ev.currentTarget.value;
            console.log(value);
            setState({
              localZones: zones.slice(0).filter((x: ITimezoneUI) => {
                let tester = new RegExp(value, "ig").test(x.value);
                return tester;
              })
            });
          };
          return (
            <Subscribe to={[SidebarState]}>
              {(sidebarState: SidebarState) => (
                <ListWrapper>
                  {/* label */}
                  <PosedListLabel
                    onClick={() => {
                      if (on) {
                        setState({
                          localZones: zones.slice(0)
                        });
                      }
                      toggle();
                    }}
                  >
                    <span>{state.label}</span>
                    <Icon>{on ? <AngleUp /> : <AngleDown />}</Icon>
                  </PosedListLabel>
                  {/* toggle the list control */}
                  {on ? (
                    // list content starts
                    <PosedListContainer pose={"open"} initialPose={"close"}>
                      <List>
                        <ListItem
                          nohover
                          style={{
                            padding: "0.1rem 0rem",
                            display: "flex",
                            justifyContent: "center"
                          }}
                        >
                          <Searchbox type="text" onInput={filterSearch} />
                        </ListItem>
                        {/* render the Timezone items */}
                        {state.localZones.map((zone: ITimezone) => (
                          <Timezone
                            {...zone}
                            handleSelection={_handleSelection}
                          />
                        ))}
                      </List>
                    </PosedListContainer>
                  ) : null}
                </ListWrapper>
              )}
            </Subscribe>
            // list control starts
          );
        }}
      </State>
    )}
  </Toggle>
);

export default Timezones;
