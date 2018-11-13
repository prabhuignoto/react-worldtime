import * as React from "react";
import { IDetail } from "./IDetail";
import {
  PosedDetailsWrapper,
  DST,
  DateTime,
  Fact,
  Icon,
  Mark
} from "./details-style";
import { Toggle } from "react-powerplug";
import { DateTime as LuxonDateTime } from "luxon";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Nerd } from "../../assets/glasses.svg";
import { ReactComponent as Globe } from "../../assets/globe-africa.svg";
import { ReactComponent as Calendar } from "../../assets/calendar-alt.svg";
var ordinal = require("ordinal");

const getFormattedDatetimeSimple = (date: string, timezone: string) =>
  LuxonDateTime.fromISO(date, {
    zone: timezone
  }).toLocaleString(LuxonDateTime.TIME_SIMPLE);

const getFormattedDatetimeFull = (date: string, timezone: string) =>
  LuxonDateTime.fromISO(date, {
    zone: timezone
  }).toLocaleString(LuxonDateTime.TIME_WITH_LONG_OFFSET);

const Details: React.SFC<IDetail> = ({
  datetime,
  unixtime,
  dst,
  day_of_week,
  day_of_year,
  utc_offset,
  timezone,
  week_number
}) => (
  <PosedDetailsWrapper pose={"open"} initialPose={"close"}>
    <DateTime>
      <Icon>
        <Clock />
      </Icon>
      <Toggle>
        {({ on, toggle }) => {
          return on ? (
            <React.Fragment>
              <span>
                It's {getFormattedDatetimeFull(datetime, timezone)}
                {/* {timezone} */}
              </span>
              <a href="javascript:void(0);" onClick={toggle}>
                show less
              </a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span>
                It's {getFormattedDatetimeSimple(datetime, timezone)} in{" "}
                {timezone}
              </span>
              <a href="javascript:void(0);" onClick={toggle}>
                show more
              </a>
            </React.Fragment>
          );
        }}
      </Toggle>
    </DateTime>
    <Fact>
      <Icon>
        <Calendar />
      </Icon>
      <span>
        We are in <Mark>{ordinal(week_number)}</Mark> week of this year.
      </span>
    </Fact>
    <Fact>
      <Icon>
        <Calendar />
      </Icon>
      <span>
        Today is the <Mark>{ordinal(day_of_year)}</Mark> day of this year
      </span>
    </Fact>
    <Fact>
      <Icon>
        <Calendar />
      </Icon>
      <span>
        Today is the <Mark>{ordinal(day_of_week)}</Mark> day of this week
      </span>
    </Fact>
    <Fact>
      <Icon>
        <Nerd />
      </Icon>
      <span>
        UNIX time for Nerds <Mark>{unixtime}</Mark>
      </span>
    </Fact>
    <Fact>
      <Icon>
        <Globe />
      </Icon>
      <span>
        UTC Offset <Mark>{utc_offset}</Mark>
      </span>
    </Fact>
    <DST>{dst}</DST>
  </PosedDetailsWrapper>
);

export default Details;
