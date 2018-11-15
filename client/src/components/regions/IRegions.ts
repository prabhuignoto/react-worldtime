export interface IRegion {
  name: string;
  selected: boolean;
}

export interface IRegionUI extends IRegion {
  handleSelection?: (name: string) => void;
  selected: boolean;
}
export interface IRegionState {
  regions: IRegion[];
}

export interface IRegionsUI {
  regions: IRegion[];
  onSelection: (name: string) => void;
  defaultRegion: string;
}
