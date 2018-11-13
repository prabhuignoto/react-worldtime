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

  setActiveTimezone(timezone: string) {
    this.setState({
      activeTimezone: timezone
    });
  }

  updateLoadingStatus(status: boolean) {
    this.setState({
      isLoadingData: status
    });
  }
}
