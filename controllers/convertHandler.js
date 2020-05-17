/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function(input) {
    let alphabet = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      number = "";

    input.split("").forEach((el) => {
      if (alphabet.includes(el)) {
        return
      }
      number = number + el
    })

    if (number.includes("/")) {
      let num_arr = number.split("/")

      if (num_arr.length > 2) {
        return "invalid number"
      }

      number = parseFloat(num_arr[0]) / parseFloat(num_arr[1])
    } else {
      number = parseFloat(number)
    }

    if (!number) {
      return 1
    }
    return number;
  };
  
  this.getUnit = function(input) {
    let alphabet = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    unit = "";

    input.split("").forEach((el) => {
      if (alphabet.includes(el)) {
        unit = unit + el
      }
    })

    if (['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'].includes(unit)) {
      return unit
    }

    return "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    let converstionObj = {
      gal: 'l',
      l: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs',
      GAL: 'L',
      L: 'GAL',
      MI: 'KM',
      KM: 'MI',
      LBS: 'KG',
      KG: 'LBS',
    }

    return converstionObj[initUnit];
  };

  this.spellOutUnit = function(unit) {
    let word;

      if ( unit == 'gal' || unit == 'GAL' ) {
        word = 'gallons';
      }
      else if ( unit == 'l' || unit == 'L' ) {
        word = 'liters';
      }
      else if ( unit == 'mi' || unit == 'MI' ) {
        word = 'miles';
      }
      else if ( unit == 'km' || unit == 'KM' ) {
        word = 'kilometers';
      }
      else if ( unit == 'lbs' || unit == 'LBS' ) {
        word = 'pounds';
      }
      else {
        word = 'kilograms';
      }

    return word
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if ( initUnit == 'gal' || initUnit == 'GAL' ) {
      return initNum * galToL
    }
    else if ( initUnit == 'l' || initUnit == 'L' ) {
      return initNum / galToL
    }
    else if ( initUnit == 'mi' || initUnit == 'MI' ) {
      return initNum * miToKm
    }
    else if ( initUnit == 'km' || initUnit == 'KM' ) {
      return initNum / miToKm
    }
    else if ( initUnit == 'lbs' || initUnit == 'LBS' ) {
      return initNum * lbsToKg
    }
    else {
      return initNum / lbsToKg
    }

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
