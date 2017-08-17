const assert    = require('assert');
const fs        = require('fs');
let {decompose}   = require('../decompose.js');
let {}

let defaultExp = { s : 10 , d : 89389 };
let secondValue = { s : 1 , d : 16383 };

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
            assert.deepEqual( decompose( 32767 ), 
                         secondValue )
        })
	})

})
