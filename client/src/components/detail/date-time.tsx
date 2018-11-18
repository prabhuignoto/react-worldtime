import * as React from "react";
import { Icon, Time, DateTime as DTime } from "./details-style";
import { Toggle } from "react-powerplug";
import { DateTime as LuxonDateTime } from "luxon";
import { ReactComponent as Clock } from "../../assets/clock.svg";

export const getFormattedDatetimeSimple = (date: string, timezone: string) =>
  LuxonDateTime.fromISO(date, {
    zone: timezone
  }).toLocaleString(LuxonDateTime.TIME_SIMPLE);

export const getFormattedDatetimeFull = (date: string, timezone: string) =>
  LuxonDateTime.fromISO(date, {
    zone: timezone
  }).toLocaleString(LuxonDateTime.DATETIME_HUGE);

interface IDateTime {
  datetime: string;
  timezone: string;
}

const DateTime: React.SFC<IDateTime> = ({ datetime, timezone }) => (
  <DTime data-testid="details-datetime">
    <Icon>
      <Clock />
    </Icon>
    <Toggle>
      {({ on, toggle }) => {
        return on ? (
          <React.Fragment>
            <span className="datetime-full">{getFormattedDatetimeFull(datetime, timezone)}</span>
            <a href="javascript:void(0);" onClick={toggle}>
              show less
            </a>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="datetime-simple">
              It's <Time>{getFormattedDatetimeSimple(datetime, timezone)}</Time>{" "}
              in {timezone}
            </span>
            <a href="javascript:void(0);" onClick={toggle} className="show-more-datetime">
              show more
            </a>
          </React.Fragment>
        );
      }}
    </Toggle>
  </DTime>
);

export default DateTime;