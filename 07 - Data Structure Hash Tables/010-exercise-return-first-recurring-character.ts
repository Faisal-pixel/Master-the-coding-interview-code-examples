const returnFirstRecurringCharacter = (incomingArray: number[]) => {
    // Lets create an empty object where will be storing the members we have looped through
    const tempObj = {};

    // then we can loop through the array passing in the values into the object, and then before we pass in a member, we check if they exist
    // If they dont exist, we pass in
    // If they do, we basically just return the number and break out
    for(let i = 0; i < incomingArray.length; i++) {
        if(!tempObj[incomingArray[i]]) {
            tempObj[incomingArray[i]] = incomingArray[i];
        } else {
            return tempObj[incomingArray[i]];
        }
    }
    return undefined;
}

console.log(returnFirstRecurringCharacter([2,1,5,1,2,3,5,1,2,4]));