import * as React from "react";
import { PosedSidebar, CloseIcon } from "./sidebar-styles";
import { ReactComponent as CloseSVG } from "../../assets/times-circle.svg";
import Favorites from "./favorites";

interface ISidebar {
  handleClose: () => void;
  handleFavSelection: (timezone: string) => void;
  favorites: string[];
}

const Sidebar: React.SFC<ISidebar> = ({
  handleClose,
  handleFavSelection,
  favorites
}) => (
  <PosedSidebar pose={"open"} initialPose={"closed"} data-testid="sidebar-wrapper-test">
    <CloseIcon onClick={handleClose} className="close-sidebar">
      <CloseSVG />
    </CloseIcon>
    <h1>Favorites</h1>
    <Favorites favorites={favorites} handleSelection={handleFavSelection} />
  </PosedSidebar>
);

export default Sidebar;
