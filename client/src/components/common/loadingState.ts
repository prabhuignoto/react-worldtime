import { Container } from "unstated";

export default class LoadingState extends Container<{
  isTimezonesLoading: boolean;
  isDataLoading: boolean;
}> {
  constructor() {
    super();
    this.state = {
      isTimezonesLoading: false,
      isDataLoading: false
    };
  }

  setTimezonesLoading(status: boolean, cb?: () => void) {
    this.setState({
      isTimezonesLoading: status
    }, cb);
  }
}
