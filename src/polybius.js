// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
const matrix = [["a", "11"],["b", "21"],["c", "31"],["d", "41"],["e", "51"],
    ["f", "12"],["g", "22"],["h", "32"],["i", "42"],["j", "42"],["k", "52"],
    ["l", "13"],["m", "23"],["n", "33"],["o", "43"],["p", "53"],["q", "14"],
    ["r", "24"],["s", "34"],["t", "44"],["u", "54"],["v", "15"],["w", "25"],
    ["x", "35"],["y", "45"],["z", "55"]
  ]
  function polybius(input, encode = true) {

    // takes in data from const matrix
    const flip = encode ? [0, 1] : [1, 0];
    // when decoding, i added a space so the numbers are separate and can be identified easily instead of clumped together
    if (!encode) {
      input = input.split("").reduce((acc, char) => {
          char === " " ? acc.push("  ") : acc.push(char);
          return acc;
        }, []).join("");
    }
    // this is an error for if the number of digits input is ever odd, since it never can be as each letter has a double digit number assigned
    if(!encode && input.length%2 != 0 ){
      return false
    }
    // array will be split by every character for encoding (letter = 1) and split by every other character for decoding (number = 2)
    const decArray = encode ? input.toLowerCase().split("") : input.match(/.{1,2}/g);
    // returns the array as a joined string with changed values
    return decArray.reduce((acc, char) => {
        if(char === "  " || char == " "){
          acc.push(" ")
          return acc
        // this is added since i and j have the same number 
        }else if(!encode && char === "42"){
          acc.push("(i/j)")
          return acc
        }
        // finds the array pair in matrix and will choose whether to encode or decode depending on what was input
        const key = matrix.find((pair) => char === pair[flip[0]]);
        acc.push(key[flip[1]])
        return acc
      }, []).join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
