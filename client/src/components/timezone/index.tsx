import { Query } from "react-apollo";
import { Subscribe } from "unstated";
import RegionState from "../regions/regionsState";
import TimezoneState from "./timezoneState";
import gql from "graphql-tag";
import * as React from "react";
import Timezones from "../timezone/timezones";
import styled from "styled-components";
import {ReactComponent as LoadingSVG} from "../../assets/loading-2.svg"

const Loading = styled.div`
  padding: 1rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 100px;
  font-size: 1.25rem;
  color: #0080ff;
  position: relative;
`;

const query = gql`
  query getTimeZones($name: String!) {
    timezones: getTimeZonesByName(name: $name)
  }
`;

export default () => (
  // subscribe to region state change
  <Subscribe to={[RegionState, TimezoneState]}>
    {({ state }: RegionState, timeZoneState: TimezoneState) => (
      // fetch the timezones via the query component
      <Query
        query={query}
        variables={{ name: state.selectedRegion }}
        skip={state.selectedRegion === ""}
        fetchPolicy={"cache-and-network"}
      >
        {({ loading, data, error }) => {
          let view = null;
          if (loading) {
            view = <Loading><LoadingSVG /></Loading>;
          }
          if (!loading && data) {
            view = (
              <Timezones
                zones={data.timezones.map((x: string) =>
                  Object.assign({}, x, { displayName: x, value: x })
                )}
                handleSelection={(name: string) => {
                  timeZoneState.setActiveTimezone(name);
                }}
              />
            );
          }
          return view;
        }}
      </Query>
    )}
  </Subscribe>
);
