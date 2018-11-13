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

  toggleSidebar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  setFavorite(timezone: string) {
    this.setState({
      selectedFavorite: timezone
    });
  }
}
