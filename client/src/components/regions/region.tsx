import * as React from "react";
import { Icon, ListItemPosed } from "./regions-styles";
import Asia from "../../assets/asia.png";
import AsiaBlue from "../../assets/asia-blue.png";
import Africa from "../../assets/africas.png";
import America from "../../assets/americas.png";
import AmericaBlue from "../../assets/americas-blue.png";
import AfricaBlue from "../../assets/africas-blue.png";
import AustraliaBlue from "../../assets/australia-blue.png";
import Europe from "../../assets/europe.png";
import EuropeBlue from "../../assets/europe-blue.png";
import Australia from "../../assets/australia.png";
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
