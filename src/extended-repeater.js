const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string, options) {
    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (options.separator === undefined) options.separator = "+";
    if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if (options.addition===undefined) options.additionRepeatTimes = 0;
    if (options.additionSeparator === undefined) options.additionSeparator = "|";
    let stringRes = "";
    let addition = "";
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        addition = addition.concat(options.addition, options.additionSeparator);
    }
    addition = addition.substr(0, addition.length - options.additionSeparator.length);
    for (let i = 0; i < options.repeatTimes; i++) {
        stringRes = stringRes.concat(string, addition, options.separator);
    }
    return stringRes.substr(0, stringRes.length - options.separator.length);
};
