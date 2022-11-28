import React from "react";

const ScheduleHeading = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-neutral-900">
      <h4 className="mt-6 text-[22px] text-gray-200 font-medium">
        Estimated Schedule
      </h4>
      <h6 className="mb-3 text-gray-600 text-base">
        Now: 11/16/2022 10:50:03 AM
      </h6>
      <div className="grid grid-cols-3 gap-16">
        <h1 className="text-5xl pb-5 text-gray-600 hover:text-gray-500 hover:border-b-2 hover:border-gray-500">
          TUE
        </h1>
        <h1 className="text-5xl pb-5 text-gray-600 hover:text-gray-500 hover:border-b-2 hover:border-gray-500">
          WED
        </h1>
        <h1 className="text-5xl pb-5 text-gray-600 hover:text-gray-500 hover:border-b-2 hover:border-gray-500">
          THU
        </h1>
      </div>
    </div>
  );
};

export default ScheduleHeading;
