"use strict";
exports.__esModule = true;
function add(a, b) {
    var isAAString = Object.prototype.toString.call(a) === "[object String]";
    var isBAString = Object.prototype.toString.call(b) === "[object String]";
    if (isAAString && isBAString) {
        return "" + a + b;
    }
    else {
        return Number(a) + Number(b);
    }
}
exports.add = add;
