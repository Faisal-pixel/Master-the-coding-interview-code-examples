// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//-------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'n'];
// should return true.

// We have 2 parameters. - no size limit.
// The function should return true or false. 

// We also need to worry about the number of items that will be passed. Time, space or memory.

// function containsCommonItem(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


// Use hashmaps

function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    let map = {};
    for (let i=0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {// we want to check if each member of the array already exists in the map as a property.
             const item = arr1[i];
             map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object.

    for(j=0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true;
        }
    }
    
    return false;
}

console.log(containsCommonItem2(array1, array2))

// If the input can become very very large, then the second solution might be the perfect one to increase speed complexity.

// We could use the some method to make the code more concise.



function containsCommonItem3(arr1, arr2) {
    // Loop through arr1 and if some of them in arr1 are included in arr2, return true.
    return arr1.some(item => arr2.includes(item))
}

/**
 * [1,2,3,4,5] [2,4,6,5,7]
 * 
 * we could first loop through the first one
 * then for every element in the first array, we compare to the second one
 * So when it is 1 in the first array, we have another nested loop that loops through the second array and check if 1 is equal
 * to any of the memeber;
 * 
 * But this is bad because we get O(n^2);
 * 
 * We could use HASHMAPS instead:
 * 
 * We could convert the first array into an object; with the elements being the key and the values set to true
 * 
 * Then we can loop through the second loops and just check the object if it exist there, if it does, it will return the value whic
 * is true!
 */
const checkForCommonItemsRevision1 = (array1, array2) => {
    const mappedObject = Object.fromEntries(
        array1.map(el => [el, true])
    )

    console.log(mappedObject);
    let i = 0;
    while(i < array2.length) {
        return mappedObject[array2[i]] ? mappedObject[array2[i]] : false
    }
}
