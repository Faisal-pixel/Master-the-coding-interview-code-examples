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

const returnFirstRecurringCharacter2 = (incomingArray: number[]) => {
    // Lets create an empty object where will be storing the members we have looped through
    const tempObj = {};

    // then we can loop through the array passing in the values into the object, and then before we pass in a member, we check if they exist
    // If they dont exist, we pass in
    // If they do, we basically just return the number and break out
    for(let i = 0; i < incomingArray.length; i++) {
        if(tempObj[incomingArray[i]] === undefined) {
            tempObj[incomingArray[i]] = "no recurring";
        } else {
            tempObj[incomingArray[i]] = incomingArray.indexOf(incomingArray[i]);
        }
    }

    let lowestKey = Infinity;

    for (let x in tempObj) {
        // We can create a variable that holds the smallest. We dont assign anything
        // if tempObj[x] < variable, assign it into the value or if it is equal to 0
        if(typeof tempObj[x] !== "string" && tempObj[x] < lowestKey) {
            lowestKey = tempObj[x];
        }
    }

    return lowestKey === Infinity ? undefined : incomingArray[lowestKey];
    
}

console.log(returnFirstRecurringCharacter2([5, 3, 9, 7, 4, 9, 1, 1, 1, 4]));