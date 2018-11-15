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

  clearZone() {
    this.setState({
      defaultTimezone: ""
    })
  }
}
