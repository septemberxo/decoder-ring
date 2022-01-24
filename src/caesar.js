// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const reg = /[A-Za-z]/;
    // variable for new string
    return input.split("")
      .reduce((acc, char, index) => {;
        if (!reg.test(char)) {
          acc.push(char);
          return acc;
        }
        // grabs corresponding number to the letter in the alphabet
        let charCode = input.toLowerCase().charCodeAt(index);
        // encoding = add shift
       // decoding = subtract shift
        encode ? (charCode += shift) : (charCode -= shift);
        // if number goes past or before alphabet it will wrap around
        charCode > 122 ? charCode-=26: charCode < 97 ? charCode +=26: 0
        acc.push(String.fromCharCode(charCode));
        return acc;
      }, [])
      .join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
