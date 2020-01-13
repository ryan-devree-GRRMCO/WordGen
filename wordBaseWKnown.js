// THIS FILE FOR Y LETTER WORDS, USING ALL LETTERS, WITH KNOWN LETTERS (XYZ, USING ANY COMBO OF XYZ, BUT POS OF Y IS KNOWN)

//GET THE INFORMATION ABOUT LETTERS AND LETTER POSITIONS THAT ARE KNOWN
let lockArray = [];
let lockLetArray = [];
let knownNum = 0;
let posVal = 0;
let posLet;

let letters = prompt("List the letters that will be used to produce words");
    let letLength = letters.length;

let known = prompt ("Are there any spots that you know which letter belongs there?");

if (known.toLowerCase() == "yes")
{
    knownNum = prompt ("Please enter the number of known letters");

    for (let i = 1; i <= knownNum; i++)
    {
        posVal = prompt ("which position is known letter " + i + " ?");
        lockArray.push(posVal);
    }

    for (let k = 1; k <= lockArray.length; k++)
    {
        posLet = prompt ("Please enter the letter in position " + lockArray[k-1] + " .")
        lockLetArray.push(posLet);
    }
}
getAllPermutations(letters);

//---------------------------------------------------------------------------------------------------

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
    print(resultsAll, letLength);
    return resultsAll;
}

//---------------------------------------------------------------------------------------------------

function print(resultsAll, letLength)
{   let nameListLog = [];
    let combNo = 0;
    for (let j = 0; j < resultsAll.length; j++)
    {
        // if (resultsAll.length != factorial(document.getElementById('numChar').value))
        if (resultsAll.length != factorial(letLength))
        {
            j++;
        }
        else if (resultsAll.length == factorial(letLength))
        // else if (resultsAll.length == factorial(document.getElementById('numChar').value))
        {
            // nameList = "<li>" + resultsAll[j] + "</li>";
            nameListLog = resultsAll[j];
            combNo += 1;
            // document.getElementById("demo2").innerHTML += nameList;
            console.log(nameListLog);
        }
    }

    if (knownNum > 0)
    {
        console.log("nameListLog: " + nameListLog);
        compare(nameListLog);
    }

    if (combNo != 0)
    {
        console.log("Number of combinations: " + combNo);
    }
}

//---------------------------------------------------------------------------------------------------

function factorial(letLength)
{
    let factNum = letLength * (letLength - 1);

    for (let i = (letLength-2); i > 0; i --)
    {
        factNum = factNum * i;
    }
    return factNum;
}

//----------------------------------------------------------------------------------------------------

function compare(nameListLog)
{
    let j = 0;
    let compareArray = [];
    for (let i = 0; i < letters.length; i++)
    {
        if (i == lockArray[j]-1)
        {
            compareArray.push(lockLetArray[j]);
            j++;
        }
        else
        {
            compareArray.push("");
        }
    }

    for (let j = 0; j < nameListLog.length; j++)
    {
        console.log(nameListLog);
    }
    return compareArray;
}

//----------------------------------------------------------------------------------------------------