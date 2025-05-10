function mergeSortedArray(array1, array2) {
    //The goal is to find a way to combine the above
    // So let's thin... we could create an array variable that stores the final array
    // Then after that, we loop through the first array and push into the final array
    // Then after that, we loop through the second array and push into the final array
    // Then we return
    if(array2.length === 0) return array1;
    if(array1.length === 0) return array2;
    const final = [];

    for (let index = 0; index < array1.length; index++) {
        final.push(array1[index])
    }
    
    for (let index = 0; index < array2.length; index++) {
        final.push(array2[index])
    }

    return final;
}
//But I think i misunderstood the question, lets go again

function mergeSortedArray2 (array1, array2) {
    // So we want to make sure we are keeping the order of the sorting.
    //Luckily for us, all members are sorted already, we just have to think about sorting members from both arrays
    // We can compare each member, by looping through the array, checking if the one member is bigger than the other
    // So we can have two variables, that stores the first members.
    //We can check which array length is longer, if one is then we can use that to loop. This ensures we are covering all
    // What it is the same length, ehn, at least one works.
    const final = []
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    const totalLength = array1.length + array2.length;

    //Now we can loop using the longerLength then compare
    // first we check the firstItems of both arrays, the bigger one is pushed into the final array
    // Then we can create an index, that we can incremement as we are done with one loop so that we can access the next element
    // We will create a different one the second array because, sometimes one array can be larger than the other
    // and by the time we are done with the shorter array, it will give us undefined while the longer array
    // is still looping
    for(let index = 0; index < totalLength; index++) {
        if(!array2Item || array1Item < array2Item) {
            final.push(array1Item);
            array1Item = array1[i];
            i++
        } else {
            final.push(array2Item);
            array2Item = array2[j];
            j++
        }
    }

    return final;
}

const printOut = mergeSortedArray2([0,3,4,31], [4, 6, 30]);
console.log(printOut)
