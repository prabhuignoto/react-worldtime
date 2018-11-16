import * as React from "react";
import { Icon, ListItemPosed } from "./regions-styles";
import {
  Africa,
  AfricaBlue,
  America,
  AmericaBlue,
  Asia,
  AsiaBlue,
  Australia,
  AustraliaBlue,
  Europe,
  EuropeBlue
} from "../assets";
import { IRegionUI } from "./IRegions";

const Region: React.SFC<IRegionUI> = ({ name, handleSelection, selected }) => (
  <ListItemPosed
    key={name}
    onClick={() => {
      if (handleSelection) {
        handleSelection(name);
      }
    }}
    selected={selected}
    pose={"open"}
  >
    <Icon>
      {name === "asia" ? (
        <img src={selected ? AsiaBlue : Asia} alt="Asia" />
      ) : null}
      {name === "africa" ? (
        <img src={selected ? AfricaBlue : Africa} alt="Africa" />
      ) : null}
      {name === "america" ? (
        <img src={selected ? AmericaBlue : America} alt="America" />
      ) : null}
      {name === "europe" ? (
        <img src={selected ? EuropeBlue : Europe} alt="Europe" />
      ) : null}
      {name === "australia" ? (
        <img src={selected ? AustraliaBlue : Australia} alt="Australia" />
      ) : null}
    </Icon>
    <span>{name}</span>
  </ListItemPosed>
);

export default Region;
