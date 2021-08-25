let names = require("../country/state/city/index");
let getFirstName = require("../utilities/utils/index");
const getPeopleInCity = (names) => {
  return getFirstName(names);
};
module.exports = getPeopleInCity;
