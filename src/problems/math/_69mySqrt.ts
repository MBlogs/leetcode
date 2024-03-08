function mySqrt(x: number): number {
    if (x == 0) {
        return 0;
    }
    let next:number = Math.floor(x/2); // Positive starting estimate
    let compare: number = next - 1; // just make sure not the same
    let prev:number = x; // to store each
    while (Math.floor(compare) !== Math.floor(next)) {
        compare = prev;
        next = (prev + x/prev) / 2;
        prev = next;
    }
    return Math.floor(compare);
};

function mySqrtBetter(x: number): number {
    let r = x;
    // Key: while can check against x directly
    while (r*r > x){
        r = ((r + x/r) / 2) | 0;
    }
    return r;
};

export function mySqrtCase() {
    let x:number = 0;
    console.log(mySqrt(x));
};