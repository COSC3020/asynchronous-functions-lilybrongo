const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

let testCase_1 = [1,2,3,4,5,6,7,8,9,10];
testCase(testCase_1, 1, function(key) {
    assert(key === 1)
});

let testCase_2 = [0];
testCase(testCase_2, 7, function(key) {
    assert(key === 0)
});

let testCase_3 = [8,2,0,7,0];
testCase(testCase_3, 0, function(key) {
    assert(key === 2);
});

let testCase_4 = [7,2,2,0];
testCase(testCase_4, 7, function(key) {
    assert(key === 1)
});

let testCase_5 = [12,10,2024];
testCase(testCase_5, 1, function(key) {
    assert(key === 0)
});