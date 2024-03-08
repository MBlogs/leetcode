function addBinary(a: string, b: string): string {
    // Make strings same length by zero padding start of smaller
    let max_length = Math.max(a.length, b.length)
    a = '0'.repeat(Math.max(0, max_length - a.length)) + a;
    b = '0'.repeat(Math.max(0, max_length - b.length)) + b;

    // Have to always carry
    let carry: number = 0;
    let result: string = '';
    // r is result of binary add, including carry
    let r: number = 0;

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
        } else {
            result = '0' + result;
        }
    }
    // If a carry at end, need to add it at start
    if (carry > 0) {
        result = '1' + result;
    }
    return result;
};

export function addBinaryCase() {
    let a:string = "1111";
    let b:string = "1111";
    console.log(addBinary(a, b))
};