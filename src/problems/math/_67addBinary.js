"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBinaryCase = void 0;
function addBinary(a, b) {
    // Make strings same length by zero padding start of smaller
    let max_length = Math.max(a.length, b.length);
    a = '0'.repeat(Math.max(0, max_length - a.length)) + a;
    b = '0'.repeat(Math.max(0, max_length - b.length)) + b;
    // Have to always carry
    let carry = 0;
    let result = '';
    // r is result of binary add, including carry
    let r = 0;
    for (let i = max_length - 1; i >= 0; i--) {
        // Binary add of a, b, carry
        r = carry;
        if (a.charAt(i) === "1") {
            r += 1;
        }
        if (b.charAt(i) === "1") {
            r += 1;
        }
        // Work out new carry 
        carry = 0;
        if (r >= 2) {
            carry = 1;
        }
        // Add at start corresponding resulting string
        if (r % 2 === 1) {
            result = '1' + result;
        }
        else {
            result = '0' + result;
        }
    }
    // If a carry at end, need to add it at start
    if (carry > 0) {
        result = '1' + result;
    }
    return result;
}
;
function addBinaryCase() {
    let a = "1111";
    let b = "1111";
    console.log(addBinary(a, b));
}
exports.addBinaryCase = addBinaryCase;
;
