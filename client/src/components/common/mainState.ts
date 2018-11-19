import { Container } from "unstated";
import { DateTime } from "luxon";

export default class MainState extends Container<{
  defaultTimezone: string;
  defaultRegion: string;
}> {
  constructor() {
    super();
    this.state = {
      defaultTimezone: DateTime.local().zoneName,
      defaultRegion: <string>DateTime.local()
        .zoneName.split("/")
        .shift()
    };
  }

  clearZone(cb?: () => void) {
    this.setState({
      defaultTimezone: ""
    }, cb);
  }

  reset(cb?: () => void) {
    this.setState({
      defaultTimezone: DateTime.local().zoneName,
      defaultRegion: <string>DateTime.local()
        .zoneName.split("/")
        .shift()
    }, cb);
  }
}
