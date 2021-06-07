
export default function convertToRoman(num) {
    // Change me!
    let roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let resultStr = "";
    for (let i of Object.keys(roman)) {
      let m = Math.floor(num / roman[i]);
      num -= m * roman[i];
      resultStr += i.repeat(m);
    };
    return resultStr;
};
