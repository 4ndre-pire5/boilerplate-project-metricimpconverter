function ConvertHandler() {
  
  this.getNum = function(input) {

    const validUnits = ['gal','l','lbs','kg','mi','km'];
    
    // Extrai o que não é letra
    let match = input.match(/^[^a-zA-Z]+/);

    // Se inicia sem numero, numero = 1
    if (!match) {
      // Se inicia com letra, verifica se unidade é valida
      const unitMatch = input.match(/[a-zA-Z]+/);
      if (unitMatch && validUnits.includes(unitMatch[0].toLowerCase())) {
        return 1;
      }
      return 'invalid number';
    }
    
    let result = match[0];

    // Se tiver mais de uma barra (fraçao invalida)
    if ((result.match(/\//g) || []).length > 1) {
      return 'invalid number';
    }

    // Se contem fraçao
    if (result.includes('/')) {
      let parts = result.split('/');
      let numerator = parseFloat(parts[0]);
      let denominator = parseFloat(parts[1]);

      if (isNaN(numerator) || isNaN(denominator)) {
        return 'invalid number';
      }

      return numerator / denominator;
    }

    // Numero simples
    let num = parseFloat(result);
    if (isNaN(num)) return 'invalid number';

    return num;
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[a-zA-Z]+$/);
    
    if (!result) return 'invalid unit';

    result = result[0].toLowerCase();

    const validUnits = ['gal','l','lbs','kg','mi','km'];

    if (!validUnits.includes(result)) {
      return 'invalid unit';
    }

    return result === 'l' ? 'L' : result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if (!initUnit || typeof initUnit !== 'string') {
      return 'invalid unit';
    }

    const unitMap = {
      'gal':'L',
      'l':'gal',
      'lbs':'kg',
      'kg':'lbs',
      'mi':'km',
      'km':'mi'
    };

    const unit = initUnit.toLowerCase();

    if (!unitMap[unit]) {
      return 'invalid unit';
    }

    return unitMap[unit];
  };

  this.spellOutUnit = function(unit) {
    const spelling = {
      'gal':'gallons',
      'L':'liters',
      'mi':'miles',
      'km':'kilometers',
      'lbs':'pounds',
      'kg':'kilograms'
    };
    
    return spelling[unit] || 'invalid unit'
  };
  
  this.convert = function(initNum, initUnit) {
    if (!initUnit || typeof initUnit !== 'string') {
      return 'invalid unit';
    }

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const unit = initUnit.toLowerCase();

    switch (unit) {
      case 'gal':
        return initNum * galToL;
      case 'l':
        return initNum / galToL;
      case 'mi':
        return initNum * miToKm;
      case 'km':
        return initNum / miToKm;
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg':
        return initNum / lbsToKg;
      default:
        return null;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const spelledInitUnit = this.spellOutUnit(initUnit);
    const spelledReturnUnit = this.spellOutUnit(returnUnit);

    if (typeof returnNum !== 'number') {
      return 'invalid number';
    }

    const roundedReturnNum = parseFloat(returnNum.toFixed(5));

    return `${initNum} ${spelledInitUnit} converts to ${roundedReturnNum} ${spelledReturnUnit}`;
  };
  
}

module.exports = ConvertHandler;
