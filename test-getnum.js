const ConvertHandler = require('./controllers/convertHandler.js');
let c = new ConvertHandler();

console.log(c.getNum("10kg"));   // 10
console.log(c.getNum("2.5MI"));  // 2,5
console.log(c.getNum("3/4LBS")); // 0.75
console.log(c.getNum("L"));      // 1
console.log(c.getNum("5l"));     // 5
console.log(c.getNum("3/2/3L")); // invalid number
console.log(c.getNum("abcmi"));  // invalid number

console.log("");

console.log(c.getUnit("10kg"));   // kg
console.log(c.getUnit("2.5mi"));  // mi
console.log(c.getUnit("3/4lbs")); // lbs
console.log(c.getUnit("l"));      // L
console.log(c.getUnit("5gal"));   // gal
console.log(c.getUnit("10xyz"));  // invalid unit
console.log(c.getUnit("4.5"));    // invalid unit

console.log("");

console.log(c.getReturnUnit("gal"));  // L
console.log(c.getReturnUnit("l"));    // gal
console.log(c.getReturnUnit("mi"));   // km
console.log(c.getReturnUnit("km"));   // mi
console.log(c.getReturnUnit("lbs"));  // kg
console.log(c.getReturnUnit("kg"));   // lbs
console.log(c.getReturnUnit("4.5"));  // invalid unit

console.log("");

console.log(c.spellOutUnit("gal"));  // gallons
console.log(c.spellOutUnit("L"));    // liters
console.log(c.spellOutUnit("mi"));   // miles
console.log(c.spellOutUnit("km"));   // kilometers
console.log(c.spellOutUnit("lbs"));  // pounds
console.log(c.spellOutUnit("kg"));   // kilograms

console.log("");

console.log(c.convert(1, "gal")); // ~3.78541
console.log(c.convert(1, "L"));   // ~0.26417
console.log(c.convert(1, "mi"));  // ~1.60934
console.log(c.convert(1, "km"));  // ~0.62137
console.log(c.convert(1, "lbs")); // ~0.453592
console.log(c.convert(1, "kg"));  // ~2.20462

console.log("");

console.log(c.getString(3.1, "mi", 4.98895, "km"));
// 3.1 miles converts to 4.98895 kilometers

console.log(c.getString(5, "kg", 11.0231, "lbs"));
// 5 kilograms converts to 11.0231 pounds




