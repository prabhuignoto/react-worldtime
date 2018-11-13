export interface ITimezone {
  displayName: string;
  value: string;
}

export interface ITimezoneUI extends ITimezone {
  handleSelection?: (value: string) => void;
}

export interface ITimezonesUI {
  zones: ITimezoneUI[];
  handleSelection?: (value: string) => void;
}