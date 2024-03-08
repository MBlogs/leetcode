function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
};

function strStrManual(haystack: string, needle: string): number {
    // Brute force approach. But note.. this is O(N^2)
    // k used to track each index of the needle
    let k = 0;
    for(let i = 0; i < haystack.length; i++) {
        if (haystack.charAt(i) === needle.charAt(k)) {
            k += 1;
            console.log(k);
            // Check if thats the whole
            if (needle.length === k) {
                return i - k + 1;
            }
        } else {
            // 
            i = i - k;
            // Reset k to next character
            k = 0;
        }
    }
    // Needle not in haystack
    return -1;
};


function compare(a:string, b:string): number{
    // Inversion compare. Essentially equality with more information
    if (a > b) {return 1;}
    if (a === b) {return 0;}
    if (a < b) {return -1;}
    return -1;
}

function maxsuf(needle:string, rev:boolean): [number, number]{
    let l = needle.length;
    let p = 1; // Currently known period
    let k = 1; // Index for period testing, 0 < k <= p
    let j = 0; // Index for maxsuf testing. Greater than maxs
    let i = -1; // proposed starting index of maxsuf

    while (j+k < l) {
        let cmpv = compare(needle.charAt(j+k), needle.charAt(i+k))
        if (rev) {
            cmpv = -cmpv;
        }
        if (cmpv < 0) {
            // Suffix (j+k) is smaller.  Period is the entire prefix so far
            j = j + k;
            k = 1;
            p = j - 1;
        } else if (cmpv === 0) {
            // They are the same - we should go
            if (k == p) {
                // Done checking this stretch of p. Reset k.
                j = j + p;
                k = 1;
            } else {
                k = k + 1;
            }
        } else {
            // Suffix is larger. Start over from here
            i = j;
            j = j + 1;
            p = 1;
            k = 1;
        }
    }
    return [i, p];
}


function critical_factorisation (needle:string) {
    // N = Needle
    // Critical factorization of the needle as preprocessing step
    // Produces: Starting point of periodic right half and the period.
    let [idx1, per1] = maxsuf(needle, false);
    let [idx2, per2] = maxsuf(needle, true);
    if (idx1 > idx2) {
        return [idx1, per1];
    } else {
        return [idx2, per2];
    }

}

function strStrCrochemoreDominique(n: string, h: string): number {
    // Comparison proceeds by matching for RHS, then LHS. 
    // Linear time skip using the period
    let hl = h.length;
    let nl = n.length;
    let [l, p] = critical_factorisation(n)
    let P = {};
    if (l < nl/2){
        // and needle 1..l is a suffix of needle l+1 ... lp
        if (n.substring(l+1, l+p).endsWith(n.substring(1,l))) {
            P = {};
            let pos = 0;
            let s = 0;
            while (pos + nl <= hl) {
                let i = Math.max(l, s) + 1;
                while(i <= nl && n.charAt(i) === h.charAt(pos + i)) {
                    i += 1;
                    if (i <= nl) {
                        pos = pos +1;
                    }
                }
            }
        }
    }


    return -1;
};

export function  strStrCase() {
    let haystack:string = "sadbutsad";
    let needle:string = "sad";

    console.log(strStrManual(haystack, needle));
} 