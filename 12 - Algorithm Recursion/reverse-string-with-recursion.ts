function reverseString(str: string) {
    // Step 1. We know we can treat a string like an array
    let reversedString = "";
    
    for(let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
  return reversedString;
}

console.log("Reversed String using loops: ", reverseString("yoyo master"));

function reverseStringRecursive(str: string) {
    // We have a variable we keep adding too
    // so we start adding from the last part let i = str.length - 1;
    // reversedString += str[i]
    //if
}

reverseStringRecursive("yoyo master");