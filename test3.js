test(['abcdefg', 'dbcfegb', 'cfbdgea', 'fbadegc', 'abczefd']);


function test(string)
{
    let numArray = [2,4];
    let letArray = ["b","d"];

    let i = 0;
    let j = 1;
    let finalArray = [];
    while (i < string.length)
    {
        if (string[i].substring(numArray[j-1],numArray[j-1]-1) != letArray[j-1])
        {
            console.log(string[i] + " none");
            i++;
            j=1;
        }
        else if (string[i].substring(numArray[j-1],numArray[j-1]-1) == letArray[j-1] && j < numArray.length)
        {
            console.log(string[i] + " good");
            j++;
        }
        else if (string[i].substring(numArray[j-1],numArray[j-1]-1) == letArray[j-1] && j == numArray.length)
        {
            console.log(string[i] + " max");
            finalArray.push(string[i]);
            // console.log(finalArray);
            i++;
            j=1;
        }
    }
    console.log(finalArray);
}