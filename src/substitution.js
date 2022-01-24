// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // alphabet variable 
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
// takes in value from alphabet to be encoded
  function substitution(input, inputA, encode = true) {
    if (!inputA || inputA.length != 26 || inputA.split("").some((v,i,a) => a.lastIndexOf(v) !== i)) {
      return false;
    }
    //decides what alphabet to use based on input
    const encoderArray = encode? [alpha,inputA.split("")] : [inputA.split(""),alpha]
    return input.toLowerCase().split("").reduce((acc,letter)=>{
      // if input doesn't contain the encoded/decoded letter just pushes the letter for what it is
      if(!inputA.split("").includes(letter)){
        acc.push(letter)
      }else{
      // if it does contain, it will match the letter to the other array for its corresponding counterpart letter
        acc.push(encoderArray[1][encoderArray[0].indexOf(letter)])
      }
      return acc
    },[]).join("")
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
