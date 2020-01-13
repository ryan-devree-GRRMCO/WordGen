//  word1.html AND word1.js ARE USED FOR Y LETTER WORDS, USING ALL LETTERS, WITH NO KNOWN LETTERS


function letters2Array(string)
{
    // let string = document.getElementById('letters').value;
    string = string.replace(/[^\w]|_/g, "")
              .replace(/\s+/g, " ")
              .replace(/[0-9]/g,'');
    string = string.toLowerCase();

    getAllPermutations(string);
}

//---------------------------------------------------------------------------------------------------

//RUNS ALL PERMUTATIONS FOR LETTERS, USING ANY COMBINATION OF LETTERS
function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < (string.length); i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}


console.log(getAllPermutations("abcd"));