  // GENERATES ALL COMBINATIONS OF A STRING (IF THE LETTERS ARE "ABC", RESULTS WOULD BE "A", "B", "C", "AB", "AC", "BC", "ABC") 
  function getAllCombinations(strComb)  // reproduced from: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-3.php
  {
      var array1 = [];
      for (var x = 0, y=1; x < strComb.length; x++,y++) 
      {
          array1[x]=strComb.substring(x, y);
      }
      var combi = [];
      var temp= "";
      var slent = Math.pow(2, array1.length);
  
      for (var i = 0; i < slent ; i++)
      {
          temp= "";
          for (var j=0;j<array1.length;j++) 
          {
              if ((i & Math.pow(2,j)))
              { 
                  temp += array1[j];
              }
          }
          if (temp !== "")
          {
              combi.push(temp);
          }
      }
      (combi.join("\n"));
  
      return combi;
  }
  
// -----------------------------------------------------------------------------------------------------

//  GETS ALL PERMUTATIONS FOR A STRING (IF THE STRING IS "ABC", THE RESULTS WOULD BE 
//    "ABC", "ACB", "BAC", "BCA", "CAB", "CBA")

function getAllPermutations(strPerm) // reproduced from: https://initjs.org/all-permutations-of-a-set-f1be174c79f8
{
    var perms = [];
  
    if (strPerm.length === 1) 
    {
        perms.push(strPerm);
        return perms;
    }
  
    for (var i = 0; i < strPerm.length; i++) 
    {
        var firstChar = strPerm[i];
        var charsLeft = strPerm.substring(0, i) + strPerm.substring(i + 1);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
        perms.push(firstChar + innerPermutations[j]);
    }
    }
    return perms;
  }

// --------------------------------------------------------------------------------------------

//  GIVEN A STRING, THIS FUNCTION DETERMINES ALL PERMUTATIONS FROM THE AVAILABLE COMBINATIONS (IE, RUNS COMBINATIONS, THEN PERMUTATIONS)
//  IF YOU HAVE 
function comb2Perm(strCP,limit)
{
    let combArray = getAllCombinations(strCP);
    // let combArray = [ 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc' ];
    let q = 0;
    let r = combArray[q];
    let comb2PermArray = [];
    while (q < combArray.length)
    {
        r = combArray[q];
        comb2PermArray.push(getAllPermutations(r));
        q++
    }

    if (limit == 0)
    {
        // console.log(comb2PermArray);
        return comb2PermArray;
    }
    else
    {
        let fact = factorial(limit);
        permOfLimit(comb2PermArray,fact);
        return comb2PermArray;
    }
}

// ------------------------------------------------------------------------------------------------

// THIS FUNCTION PRESENTS ALL PERMUTATIONS WITH X LETTER-LENGTH (IE, 6 LETTERS TO CHOOSE FROM, BUT ONLY 3 ARE USED)
function permOfLimit(comb2PermArray, fact)
{
    let permSetLength = [];
    for (i = 0; i < comb2PermArray.length; i++)
    {
        if (comb2PermArray[i].length == fact && numArray == "")
        {
            // console.log(comb2PermArray[i]);
        }
        else if (comb2PermArray[i].length == fact && numArray != "")
        {
            permSetLength = comb2PermArray[i];
            knownLetters(permSetLength);
        }
    }
}

// ------------------------------------------------------------------------------------------------

function factorial(limit)
{
    if (limit === 0)
    {
        return 1;
    }
    return limit * factorial(limit - 1);
}

// ------------------------------------------------------------------------------------------------

function knownLetters(permSetLength)
{
    numArray = [2,4,5];
    letArray = ["b","d","e"];

    let i = 0;
    let j = 1;
    let finalArray = [];
    while (i < permSetLength.length)
    {
        if (permSetLength[i].substring(numArray[j-1],numArray[j-1]-1) != letArray[j-1])
        {
            i++;
            j=1
        }
        else if (permSetLength[i].substring(numArray[j-1],numArray[j-1]-1) == letArray[j-1] && j < numArray.length)
        {
            j++;
        }
        else if (permSetLength[i].substring(numArray[j-1],numArray[j-1]-1) == letArray[j-1] && j == numArray.length)
        {
            finalArray.push(permSetLength[i]);
            i++;
            j=1;
            console.log(finalArray);
        }
    }
}

// ------------------------------------------------------------------------------------------------

function letters2Array(string)
{
    // let string = document.getElementById('letters').value;
    string = string.replace(/[^\w]|_/g, "")
              .replace(/\s+/g, " ")
              .replace(/[0-9]/g,'');
    string = string.toLowerCase();

    return string;
}

// ------------------------------------------------------------------------------------------------

let numArray = [2,4,5];
// let numArray = "";
let letArray = ["b","d","e"];

(comb2Perm("abcdef",5)); 
