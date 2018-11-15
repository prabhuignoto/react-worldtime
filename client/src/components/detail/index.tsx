import { Subscribe } from "unstated";
import { Query } from "react-apollo";
import timezoneState from "../timezone/timezoneState";
import MainState from "../common/mainState";
import gql from "graphql-tag";
import * as React from "react";
import Details from "./details";
import { Loading } from "./details-style";
import { ReactComponent as LoadingAnime } from "../../assets/loading-2.svg";

const query = gql`
  query getData($timeZone: String!) {
    timezoneData: getTimeZoneData(timeZone: $timeZone) {
      week_number
      utc_offset
      unixtime
      timezone
      dst
      day_of_year
      day_of_week
      datetime
    }
  }
`;

export default () => (
  <Subscribe to={[timezoneState, MainState]}>
    {(timezoneState: timezoneState, mainState: MainState) => {
      console.log(timezoneState.state);
      return (
        <Query
          query={query}
          variables={{
            timeZone:
              timezoneState.state.activeTimezone ||
              mainState.state.defaultTimezone
          }}
          skip={
            timezoneState.state.activeTimezone === "" &&
            mainState.state.defaultTimezone === ""
              ? true
              : false
          }
        >
          {({ loading, data, error }) => {
            let view = null;
            if (loading) {
              view = (
                <Loading>
                  {/* <LoadingAnime /> */}
                </Loading>
              );
            } else if (!loading && data) {
              view = <Details {...data.timezoneData} />;
            } else if (error) {
              view = <span>error</span>;
            }
            return view;
          }}
        </Query>
      );
    }}
  </Subscribe>
);
