const dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

module.exports = {
  format_time: (date) => {
    // returns 9:48 PM
    return dayjs(date).local().format("LT");
  },
  format_date: (date) => {
    // returns 30 May 2022
    return dayjs(date).local().format("D MMM YYYY");
  },
};