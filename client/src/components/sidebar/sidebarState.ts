import { Container } from "unstated";

export default class SidebarState extends Container<{
  isOpen: boolean;
  selectedFavorite: string;
}> {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      selectedFavorite: ""
    };
  }

  toggleSidebar(cb?: () => void) {
    this.setState({
      isOpen: !this.state.isOpen
    }, cb);
  }

  setFavorite(timezone: string, cb?: () => void) {
    this.setState({
      selectedFavorite: timezone
    }, cb);
  }
}
