/*let test1;

let {pearson} = require('./pearson.js')

var assert = require('assert');

function test_pearson(){
	testEmptyArrays();
	testUndefined();
}

function testEmptyArrays(){
	let test1 = require('./tdd_testCases.js');
	try{
  		console.assert(test1.emptyX.length > 0 ||  test1.emptyY.length > 0);
	}catch(e){
		console.log("Both arrays are empty, operation can not be done... Will return 'NAN'");
	}
}

function testUndefined(){
	let test1 = require('./tdd_testCases.js');
	try{
  		console.assert(test1.undefinedX.length === undefined ||  test1.undefinedY.length === undefined);
	}catch(e){
		console.log("Both arrays are undefined, can not be done...");
	}
}


test_pearson()*/


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

function undefinedEmptyArray(data) {
    undefined_array(data.X, 'X');
    undefined_array(data.Y, 'Y');
}

function tdd_pearson() {
	let filename = fileName1;
    readJSONFile(filename ,encoding, (data) => {
        let tests = data.tests;
        testEmpyArray(tests.completeArrays);
        undefinedEmptyArray(tests.completeArrays);
    })
}

tdd_pearson();

/*
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
*/