import { Container } from "unstated";

interface ITimezoneState {
  activeTimezone: string;
  isLoadingData?: boolean;
}

export default class TimezoneState extends Container<ITimezoneState> {
  constructor() {
    super();
    this.state = {
      activeTimezone: "",
      isLoadingData: false
    };
  }

  setActiveTimezone(timezone: string, cb?: () => void) {
    this.setState({
      activeTimezone: timezone
    }, cb);
  }

  updateLoadingStatus(status: boolean, cb?: () => void) {
    this.setState({
      isLoadingData: status
    }, cb);
  }
}
  