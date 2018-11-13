import { Container } from "unstated";
import { findFieldsThatChangedTypeOnInputObjectTypes } from "graphql/utilities/findBreakingChanges";

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

  setTimezonesLoading(status: boolean) {
    this.setState({
      isTimezonesLoading: status
    });
  }
}
