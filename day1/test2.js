
const numberWords = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

const inputValues = [
    "eightqrssm9httwogqshfxninepnfrppfzhsc",
    "one111jxlmc7tvklrmhdpsix",
    "bptwone4sixzzppg",
    "ninezfzseveneight5kjrjvtfjqt5nineone",
    "58kk",
    "5b32",
    "1dtwo",
];
const calibrationValues = [];

inputValues.forEach((element) => {
    const matches = element.match(/\b(?:\d|one|two|three|four|five|six|seven|eight|nine)\b/g);

    if (matches) {
        const firstNumericValue = numberWords[matches[0]] || parseInt(matches[0], 10);
        const lastNumericValue = numberWords[matches[matches.length - 1]] || parseInt(matches[matches.length - 1], 10);

        if (!isNaN(firstNumericValue) && !isNaN(lastNumericValue)) {
            calibrationValues.push(`${firstNumericValue}${lastNumericValue}`);
        }
    }
});

console.log(calibrationValues);


let sumOfValues = 0;
calibrationValues.forEach(value => {
    sumOfValues += Number(value);

});
console.log(sumOfValues);