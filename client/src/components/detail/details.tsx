import * as React from "react";
import { IDetail } from "./IDetail";
import { PosedDetailsWrapper, DST, Fact, Icon, Mark } from "./details-style";
import { ReactComponent as Nerd } from "../../assets/glasses.svg";
import { ReactComponent as Globe } from "../../assets/globe-africa.svg";
import { ReactComponent as Calendar } from "../../assets/calendar-alt.svg";
import DateTime from "./date-time";
var ordinal = require("ordinal");

interface IFactUI {
  children: () => void;
  icon: () => React.ReactNode;
  className: string;
}

const FactUI: React.SFC<IFactUI> = ({ children, icon, className }) => {
  let _class = `datetime-details-fact ${className}`;
  return (
    <Fact className={_class}>
      <Icon>{icon && icon()}</Icon>
      {children && children()}
    </Fact>
  );
};

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
  <PosedDetailsWrapper
    pose={"open"}
    initialPose={"close"}
    data-testid="timezone-details"
  >
    <DateTime datetime={datetime} timezone={timezone} />
    <FactUI icon={() => <Calendar />} className="week-number">
      {() => (
        <span>
          We are in the <Mark>{ordinal(week_number)}</Mark> week of this year
        </span>
      )}
    </FactUI>
    <FactUI icon={() => <Calendar />} className="day-of-year">
      {() => (
        <span>
          Today is the <Mark>{ordinal(day_of_year)}</Mark> day of this year
        </span>
      )}
    </FactUI>
    <FactUI icon={() => <Calendar />} className="day-of-week">
      {() => (
        <span>
          Today is the <Mark>{ordinal(day_of_week)}</Mark> day of this week
        </span>
      )}
    </FactUI>
    <FactUI icon={() => <Nerd />} className="unixtime">
      {() => (
        <span>
          UNIX time for Nerds <Mark>{unixtime}</Mark>
        </span>
      )}
    </FactUI>
    <FactUI icon={() => <Globe />} className="utc-offset">
      {() => (
        <span>
          UTC Offset <Mark>{utc_offset}</Mark>
        </span>
      )}
    </FactUI>
    <DST>{dst}</DST>
  </PosedDetailsWrapper>
);

export default Details;
