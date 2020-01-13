let string = ['abcdefg', 'dbcfegb', 'cfbdgea', 'fbadegc', 'abczefd'];
let numArray = [2,4];
let letArray = ["b","d"];

for (let i = 0; i < string.length; i++)
{
    let j = 0;
    while (j < numArray.length)
    {
        if (string[i].substring(numArray[j],numArray[j]-1) != letArray[j])
        {
            console.log("no");
            j=numArray.length;
            // j==numArray.length;
        }
    }
}
