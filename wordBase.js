// wordBase.html AND wordBase.js ARE USED FOR Y LETTER WORDS, USING ALL LETTERS, WITH NO KNOWN LETTERS (XYZ, USING ANY COMBO OF XYZ)


// let letters = prompt("List the letters that will be used to produce words");
// let letterNum = letters.length;

// getAllPermutations(letters);


function letters2Array()
{
    let letters = document.getElementById('letters').value;
    letters = letters.replace(/[^\w]|_/g, "")
              .replace(/\s+/g, " ")
              .replace(/[0-9]/g,'');
    letters = letters.toLowerCase();

    console.log(letters);

    // getAllPermutations(letters);
    // return letters;
}




//---------------------------------------------------------------------------------------------------

//RUNS ALL PERMUTATIONS FOR LETTERS
function getAllPermutations(letters) 
{
    let resultsAll = [];
  
    if (letters.length === 1) 
    {
      resultsAll.push(letters);
      return resultsAll;
    }
  
    for (var i = 0; i < letters.length; i++) 
    {
      var firstChar = letters[i];
      var charsLeft = letters.substring(0, i) + letters.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) 
      {
        resultsAll.push(firstChar + innerPermutations[j]);
      }
    }
    print(resultsAll, letterNum);
    return resultsAll;
}
//---------------------------------------------------------------------------------------------------

//ELIMINATES PERMUTATIONS THAT DO NOT USE ALL THE AVAILABLE LETTERS
function print(resultsAll, letterNum)
{
    let combNo = 0;
    for (let j = 0; j < resultsAll.length; j++)
    {
        // if (resultsAll.length != factorial(document.getElementById('numChar').value))
        if (resultsAll.length != factorial(letterNum))
        {
            j++;
        }
        else if (resultsAll.length == factorial(letterNum))
        // else if (resultsAll.length == factorial(document.getElementById('numChar').value))
        {
            // nameList = "<li>" + resultsAll[j] + "</li>";
            nameListLog = resultsAll[j];
            combNo += 1;
            // document.getElementById("demo2").innerHTML += nameList;
            console.log(nameListLog);
        }
    }
    if (combNo != 0)
    {
        console.log("Number of combinations: " + combNo);
    }
}

//---------------------------------------------------------------------------------------------------

//NEEDED TO RULE OUT PERMUTATIONS THAT DO NOT USE ALL AVAILABLE LETTERS
function factorial(letterNum)
{
    let factNum = letterNum * (letterNum - 1);

    for (let i = (letterNum-2); i > 0; i --)
    {
        factNum = factNum * i;
    }
    return factNum;
}
