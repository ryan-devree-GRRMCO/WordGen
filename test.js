permOfLimit(['abcde', 'ebcab', 'cbdea', 'adbce', 'dbace'],5);

function permOfLimit(comb2PermArray, fact)
{
    let knownLetArray = [];
    for (i = 0; i < comb2PermArray.length; i++)
    {
        if (comb2PermArray[i].length == fact)
        {
            knownLetArray.push(comb2PermArray[i]);
            // console.log(comb2PermArray[i]);
        }
    }
    // console.log(knownLetArray);

    let pos1 = 2;
    let pos2 = 4;
    let let1 = "b";
    let let2 = "d";
    let key, value;
    let posArray = [2,4];
    let letArray = ["b","d"];


    // let knownCount = 0;
    // while (knownCount < posArray.length)
    // {
        // for (let i = 0; i < knownLetArray.length; i++)
        // {
            let j = 0;
            let finalArray = [];

            for (key in knownLetArray)
            {
                value = knownLetArray[key];
                for (let l = 0; l < posArray.length; l++)
                {
                    if (value.substring(posArray[l], 1) == letArray[l])
                    {
                        finalArray.push(knownLetArray[j]);
                        console.log(knownLetArray[j]);
                        // j++;
                    }
                }
                j++;
            }
        // }
    //     knownCount++;
    // }



    // if (known != 0)
    // {

    // }
    // console.log(knownLetArray);
    // console.log(knownLetArray.length);
}









// function permOfLimit(comb2PermArray, fact)
// {
//     for (i = 0; i < comb2PermArray.length; i++)
//     {
//         if (comb2PermArray[i].length == fact)
//         {
//             console.log(comb2PermArray[i]);
//         }
//     }
// }

// permOfLimit([[ 'a' ],[ 'b' ],[ 'ab', 'ba' ],[ 'c' ],[ 'ac', 'ca' ],[ 'bc', 'cb' ],[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]], 1);


// // function permOfLimit(comb2PermArray,fact)
// // {
// //     let test = [];
// //     let test1;
// //     for (let j = 0; j < comb2PermArray.length; j++)
// //     {
// //         test = comb2PermArray[j];
// //         for (let k = 0; k < test.length; k++)
// //         {
// //             test1 = test[k]
// //         if (comb2PermArray[j] == );
// //     }

//     // (comb2PermArray);



//     // let test = comb2PermArray[5];
//     // let test1 = test[1];
//     // console.log(test.length);


//     // for (let z = 0; z < comb2PermArray.length; z++)
//     // {
//     //     // if (comb2PermArray[z].length == limit)
//     //     // {
//     //         console.log(comb2PermArray[z]);
//     //     // }
//     // }
// // }

// // -----------------------------------------------------------------------------------------

// function factorial(limit)
// {
//     if (limit === 0)
//     {
//         return 1;
//     }
//     return limit * factorial(limit - 1);
// }
