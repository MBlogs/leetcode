export function lengthOfLastWord(s: string): number {
    // Given string s consisting of words and spaces
    // Return length of last word in the string
    // Word is a maximal substring consisting of non-space characters
    // (so need to ignore final spaces)
    let n = 0;
    for (let i = s.length - 1; i >= 0; i--){
        // Only start counting when got a character
        if (s.charAt(i) !== ' ') {
            n += 1;
        } else if (n > 0) {
            // Have been counting a word, now space so return
            return n;
        }
    }
    return n;
};

export function lengthOfLastWordBetter(s: string): number {
    let words = s.trim().split(' ');
    return words[words.length - 1].length;
};

export function lengthOfLastWordCase(){
    let s: string = "   fly me   to   the moon  ";
    console.log(lengthOfLastWord(s));

}