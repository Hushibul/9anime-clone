import React, { Fragment } from "react";
import ScheduleHeading from "../headings/ScheduleHeading";
import ScheduleCard from "../cards/ScheduleCard";
const Schedule = () => {
  return (
    <Fragment>
      <section className="mt-8 mx-2">
        <ScheduleHeading />
      </section>

      <section>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </section>
    </Fragment>
  );
};

export default Schedule;
