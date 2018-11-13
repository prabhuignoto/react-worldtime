import { Container } from "unstated";

interface IRegion {
  name: string;
  selected: boolean;
}

interface IRegionState {
  selectedRegion: string;
}

export default class RegionState extends Container<IRegionState> {
  constructor() {
    super();
    this.state = {
      selectedRegion: "",
    };
  }

  selectRegion(name: string) {
    this.setState({
      selectedRegion: name
    });
  }
}
