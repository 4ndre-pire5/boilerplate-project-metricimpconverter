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
