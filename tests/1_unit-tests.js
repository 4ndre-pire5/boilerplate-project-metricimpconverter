const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    suite('Function getNum', function() {

        test('Whole number input', function() {
            assert.strictEqual(convertHandler.getNum("10kg", 10));
        });
        
    });

});