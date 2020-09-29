const CustomError = require("../extensions/custom-error");

module.exports =
    function countCats(backyard) {
        if (backyard.length === 0) return 0;
        let array = backyard[0];
        for (let i = 1; i < backyard.length; i++) {
            array = array.concat(backyard[i]);
        }
        let count = 0;
        for (let a = 0; a < array.length; a++) {
            if (array[a] === '^^') count++;
        }
        return count;
    }

// console.log(countCats([
//     [undefined, 2],
//     [3,3,6]
// ]));
