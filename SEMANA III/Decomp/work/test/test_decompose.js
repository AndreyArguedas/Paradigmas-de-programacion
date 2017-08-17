const assert    = require('assert');
const fs        = require('fs');
let {decompose}   = require('../decompose.js');

let {counterDecompose} = require('../testingBigOnotation.js');
let {oddNumbers} = require('../testingBigOnotation.js');
let {numbersToArray} = require('../testingBigOnotation.js');

let defaultExp = { s : 10 , d : 89389 };
let secondValue = { s : 1 , d : 16383 };

/* Creating first 1000 odd numbers to test Big O notation */

let odds = oddNumbers();

let firstThousand = numbersToArray(1000, odds);

describe('Decompose', function () {

    describe('Decompose', function () {
        it('#Default value', function () {
            assert.deepEqual( decompose( 91534337 ), 
                         defaultExp )
        })
	})

	describe('Decompose', function () {
        it('#Second value in pdf', function () {
            assert.deepEqual( decompose( 32767 ), 
                         secondValue )
        })
	})

	describe('Testing algorthms Big O notation is log(N)', function () {
        it('#Big O notation is log(N)', function () {
            assert.deepEqual( firstThousand.filter( number => Math.log2(number) <= counterDecompose(number)), 
                         [] )
        })
	})

    describe('Testing algorthms Big O notation is N', function () {
        it('#Big O notation is (N)', function () {
            assert.deepEqual( firstThousand.filter( number => number <= counterDecompose(number)), 
                         [] )
        })
    })

})
