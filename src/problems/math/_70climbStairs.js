"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.climbStairsCase = void 0;
/*
    You are climbing a staircase.
    It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps.
    In how many distinct ways can you climb to the top?
*/
function climbStairs(n) {
    // Initial idea: Iterate from all 1s to all 2s
    // Each set of 2s can be arranged with m choose k
    // Where (because you are taking 2 steps), m reduces
    let m = n;
    let k = 0;
    let combos = 0;
    while (m >= k) {
        combos += binomial(m, k);
        m--;
        k++;
    }
    return combos;
}
;
function binomial(n, k) {
    var coeff = 1;
    for (var x = n - k + 1; x <= n; x++)
        coeff *= x;
    for (x = 1; x <= k; x++)
        coeff /= x;
    return coeff;
}
function climbStairsBetter(n) {
    // https://leetcode.com/problems/climbing-stairs/solutions/25296/3-4-short-lines-in-every-language/
    /*
    Variable a tells you the number of ways to reach the current step
    and b tells you the number of ways to reach the next step.

    So for the situation one step further up,
    the old b becomes the new a
    and the new b is the old a+b,
    since that new step can be reached by climbing 1 step from what b represented
    or 2 steps from what a represented i.e b = b + a
    */
    let a = 1, b = 1;
    while (n--) {
        a = (b += a) - a; // b and a assigned same time. the -a is because want a = b
    }
    return a;
}
;
function climbStairsCase() {
    let x = 4;
    console.log(climbStairs(x));
}
exports.climbStairsCase = climbStairsCase;
;
