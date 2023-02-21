import * as Types from "../types";

export const calcDuration = (timeEntry: Types.TimeEntry) => {
  const durationString =
    new Date(timeEntry.stopTimestamp).getTime() - new Date(timeEntry.startTimestamp).getTime();

  const duration = new Date(durationString - 3600000).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return duration;
};
