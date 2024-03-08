"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqrtCase = void 0;
function mySqrt(x) {
    if (x == 0) {
        return 0;
    }
    let next = Math.floor(x / 2); // Positive starting estimate
    let compare = next - 1; // just make sure not the same
    let prev = x; // to store each
    while (Math.floor(compare) !== Math.floor(next)) {
        compare = prev;
        next = (prev + x / prev) / 2;
        prev = next;
    }
    return Math.floor(compare);
}
;
function mySqrtBetter(x) {
    let r = x;
    // Key: while can check against x directly
    while (r * r > x) {
        r = ((r + x / r) / 2) | 0;
    }
    return r;
}
;
function mySqrtCase() {
    let x = 0;
    console.log(mySqrt(x));
}
exports.mySqrtCase = mySqrtCase;
;
