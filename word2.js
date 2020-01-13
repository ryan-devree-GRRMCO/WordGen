// THIS FILE FOR X LETTER WORDS, GIVEN Y LETTERS, WITH NO KNOWN LETTERS (3 LETTER WORDS, OUT OF 5 LETTERS)

let numChar = 2;
// // CHECKS IF 'CHARACTERS PER WORD' AND 'NUMBER OF LETTERS' ARE NUMBERS
// function numCheck()
// {
//     // let numChar = document.getElementById('numChar').value;
//     // let numChar = 4;
//     let numCharRet = '';
//     if (isNaN(numChar) || numChar == '')
//     {
//         numCharRet = "The value is not a number. Please enter a number.";
//         // document.getElementById("demo").innerHTML = numCharRet;
//         console.log("numCharRet: " + numCharRet);
//     }
//     else
//     {
//         numCharRet = "The value IS a number";
//         // document.getElementById("demo").innerHTML = numCharRet;
//         console.log("numCharRet: " + numCharRet);
//     }
//     factorial (numChar);
// }

//--------------------------------------------------------------------

function factorial(numChar)
{
    if (numChar === 0)
    {
        return 1;
    }
    return numChar * factorial(numChar - 1);
}

// //--------------------------------------------------------------------

function letters2Array(string)
{
    // let string = document.getElementById('letters').value;
    string = string.replace(/[^\w]|_/g, "")
              .replace(/\s+/g, " ")
              .replace(/[0-9]/g,'');
    string = string.toLowerCase();

    getAllPermutations(string);
}

//--------------------------------------------------------------

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
    print(results);
    return results;
  }
 
//---------------------------------------------------------------------------------------

function print(results)
{
    let nameList = [];
    for (let j = 0; j < results.length; j++)
    {
        // if (resultsAll.length != factorial(document.getElementById('numChar').value))
        if (results.length != factorial(numChar))
        {
            j++;
        }
        else if (results.length == factorial(numChar))
        // else if (resultsAll.length == factorial(document.getElementById('numChar').value))
        {
            // nameList = "<li>" + results[j] + "</li>";
            nameList.push(results[j]);
            // document.getElementById("demo2").innerHTML += nameList;
            // console.log(nameList);
            console.log(nameList.filter(( t={}, a=> !(t[a]=a in t) )));
        }
    }
}

//----------------------------------------------------------------------------------------


(getAllPermutations("abcd"));
