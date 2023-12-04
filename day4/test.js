let testString = `
Card   1: 42 68 56  3 28 97  1 78 55 48 | 78 54  3 38 94 73 72 57 51 31 86 43  7 81  4 27 26 58 75 69 74 55  5 28 40
Card   2: 39 15 68 83 69  4 71 80 59 25 | 53 54 46 49  6 86 22 58 12 84 72 44 15 13 41  5 78 31 93 75 92 16 83 37 23`
//CREATE REGEXP TO REPLACE ALL MULTIPLE SPACES WITH SINGLE SPACE add new line after each card
const regex = /(\s{2,})/g;

testString = testString.replace(regex, '\n');
console.log(testString);