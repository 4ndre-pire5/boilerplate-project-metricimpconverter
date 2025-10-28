const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    suite('Function getNum', function() {
        test('Whole number input', function() {
            assert.strictEqual(convertHandler.getNum("10kg"), 10);
        });
        test('Decimal number input', function() {
            assert.strictEqual(convertHandler.getNum("10.25kg"), 10.25);
        });
        test('Fractional number input', function() {
            assert.strictEqual(convertHandler.getNum("3/4kg"), 0.75);
        });
        test('Fractional with decimal number input', function() {
            assert.strictEqual(convertHandler.getNum("3.8/4kg"), 0.95);
        });
        test('Error on double-fraction input', function() {
            assert.strictEqual(convertHandler.getNum("3/8/4kg"), 'invalid number');
        });
        test('Return defaul 1, when no numerical input provided', function() {
            assert.strictEqual(convertHandler.getNum("kg"), 1);
        });
    });

    suite('Function getUnit', function() {
        test('Read each valid inputUnit', function() {
            assert.strictEqual(convertHandler.getUnit("10kg"), "kg");
            assert.strictEqual(convertHandler.getUnit("10lbs"), "lbs");
            assert.strictEqual(convertHandler.getUnit("10gal"), "gal");
            assert.strictEqual(convertHandler.getUnit("10l"), "L");
            assert.strictEqual(convertHandler.getUnit("10mi"), "mi");
            assert.strictEqual(convertHandler.getUnit("10km"), "km");
        });
        test('Return an error for an invalid input', function(){
            assert.strictEqual(convertHandler.getUnit("10xyz"), "invalid unit");
        });
    });

    suite('Function getReturnUnit', function() {
        test('Return correct returnUnit for each valid inputUnit', function() {
            assert.strictEqual(convertHandler.getReturnUnit("kg"), "lbs");
            assert.strictEqual(convertHandler.getReturnUnit("lbs"), "kg");
            assert.strictEqual(convertHandler.getReturnUnit("gal"), "L");
            assert.strictEqual(convertHandler.getReturnUnit("l"), "gal");
            assert.strictEqual(convertHandler.getReturnUnit("mi"), "km");
            assert.strictEqual(convertHandler.getReturnUnit("km"), "mi");
        });
    });

    suite('Function spellOutUnit', function() {
        test('Return correct spelled-out string for each valid inputUnit', function(){
            assert.strictEqual(convertHandler.spellOutUnit("kg"), "kilograms");
            assert.strictEqual(convertHandler.spellOutUnit("lbs"), "pounds");
            assert.strictEqual(convertHandler.spellOutUnit("gal"), "gallons");
            assert.strictEqual(convertHandler.spellOutUnit("L"), "liters");
            assert.strictEqual(convertHandler.spellOutUnit("mi"), "miles");
            assert.strictEqual(convertHandler.spellOutUnit("km"), "kilometers");
        });
    });

    suite('Function convert', function(){
        test('Convert correctly gal to L', function(){
            assert.approximately(convertHandler.convert(1, "gal"), 3.78541, 0.1);
        });
        test('Convert correctly L to gal', function(){
            assert.approximately(convertHandler.convert(1, "L"), 0.26417, 0.1);
        });
        test('Convert correctly mi to km', function(){
            assert.approximately(convertHandler.convert(1, "mi"), 1.60934, 0.1);
        });
        test('Convert correctly km to mi', function(){
            assert.approximately(convertHandler.convert(1, "km"), 0.62137, 0.1);
        });
        test('Convert correctly lbs to kg', function(){
            assert.approximately(convertHandler.convert(1, "lbs"), 0.45359, 0.1);
        });
        test('Convert correctly kg to lbs', function(){
            assert.approximately(convertHandler.convert(1, "kg"), 2.20462, 0.1);
        });
    });
});