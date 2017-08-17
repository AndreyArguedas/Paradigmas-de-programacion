const assert    = require('assert');
const fs        = require('fs');
let {Decomp}   = require('decompose.js')

var defaultExp = { s : 10 , d : 89389 };

describe('Decompose', function () {

    describe('Decompose', function () {
        it('#Positive Integers', function () {
            assert.deepEqual( decompose( 91534337 ), 
                         defaultExp )
        })
})
