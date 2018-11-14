import { Subscribe } from "unstated";
import { Query } from "react-apollo";
import timezoneState from "../timezone/timezoneState";
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
  <Subscribe to={[timezoneState]}>
    {({ state }: timezoneState) => {
      return (
        <Query
          query={query}
          variables={{ timeZone: state.activeTimezone }}
          skip={state.activeTimezone === ""}
        >
          {({ loading, data, error }) => {
            let view = null;
            if (loading) {
              view = (
                <Loading>
                  <LoadingAnime />
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
