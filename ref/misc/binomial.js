"use strict";
function binomial(n, k) {
    var coeff = 1;
    for (var x = n - k + 1; x <= n; x++)
        coeff *= x;
    for (x = 1; x <= k; x++)
        coeff /= x;
    return coeff;
}
