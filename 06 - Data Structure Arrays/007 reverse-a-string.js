// Create a function that reverses a striing:
// Hi, My name is Andrei, should be:
// 'ierdnA si eman yM iH'

function reverse(str) {
    //first of all, we should convert the string into an array
    // Then reverse it, then convert back into a string then return.

    const stringArray = str.split("") // This converts the string into an array
    const reversedString = stringArray.reverse();
    return reversedString.join('');
}

console.log(reverse("My name is Faisal"))