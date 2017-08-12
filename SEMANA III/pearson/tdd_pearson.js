const assert = require('assert');
const fs     = require('fs');

let fileName1 = './tdd_test_cases.json';
let fileName2 = './test_x_y_01.js';
let fileName3 = './test_x_y_02.js';

let encoding = 'utf8';

let {pearson} = require('./pearson.js');

function readJSONFile(filename, encoding, callback) {
    fs.readFile(filename, 'utf8', function(err, data) {
        let json = JSON.parse(data);
        callback(json);
    });
}

function empty_array(arr, name) {
    try {
        assert.notDeepEqual(0, arr.length);
    } catch (e) {
        console.log(`Error: the array ${name} is empty.`);
    }
}
function undefined_array(arr, name) {
    try {
        assert.notDeepEqual(undefined, arr);
    } catch (e) {
        console.log(`Error: the array ${name} is undefined.`);
    }
}

function testEmpyArray(data) {
    empty_array(data.X, 'X');
    empty_array(data.Y, 'Y');
}

function undefinedEmpyArray(data) {
    undefined_array(data.X, 'X');
    undefined_array(data.Y, 'Y');
}

function checkAnswer(data, value) {
    let r = pearson(data.X, data.Y);
    try {
        assert.deepEqual(value, r);
    } catch(e) {
        console.log(`Error: the results of Pearson is not correct.\nExpected: ${value}\nActual:   ${r}`);
    }
}

function tdd_test(obj) {
    testEmpyArray(obj);
    undefinedEmpyArray(obj);
} 

function tdd_pearson() {
    let filename = fileName1;
    readJSONFile(filename ,encoding, (data) => {
        let tests = data.tests;
        tdd_test(tests.emptyArrays);

        tdd_test(tests.undefinedArrays);

        tdd_test(tests.completeArrays);
        checkAnswer(tests.completeArrays, tests[fileName2]);
    })
}

tdd_pearson();
