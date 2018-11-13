export interface IRegion {
  name: string;
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
}
