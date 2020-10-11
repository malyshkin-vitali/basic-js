
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  return Array.isArray(array)?array.filter(x=>typeof x === 'string'&&x.length>0).map(x=>x.trim()[0].toUpperCase()).sort().join(""):false;
};
