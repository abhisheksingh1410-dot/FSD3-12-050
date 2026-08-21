//waf to take (0-9) and return the corresponding word
function numberToWord(num) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[num];
}
console.log(numberToWord(7)); 