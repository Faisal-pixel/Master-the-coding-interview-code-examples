const inputString = 'ababcababcabc';
const pattern = 'abc';

function naiveSearch(input: string, pattern: string): number[] {
  const result: number[] = [];
  const inputLength = input.length;
  const patternLength = pattern.length;

  for (let i = 0; i <= inputLength - patternLength; i++) {
    let j = 0;
    while (j < patternLength && input[i + j] === pattern[j]) {
      j++;
    }
    if (j === patternLength) {
      result.push(i);
    }
  }

  return result;
}

const occurrences = naiveSearch(inputString, pattern);
console.log(`Pattern found at indices: ${occurrences.join(', ')}`);


// METHOD FROM YOUTUBER - Computer Science Lessons
// Implementation 1
const inputString2: string = "CAKCAKEDCAKEYCACAKES";
const pattern2: string = "CAKES";

function naiveSearch2(input: string, pattern: string): string {
    let inputStringPointer = 0;
    let patternPointer = 0;
    let tempInputPointer:number ;
    while (inputStringPointer < input.length) {
        tempInputPointer = inputStringPointer;
        patternPointer = 0; // Reset the pattern pointer to the start of the pattern for each new position in the input string.
        while (patternPointer < pattern.length){
          if(pattern[patternPointer] === input[inputStringPointer]) {
            inputStringPointer += 1
            patternPointer += 1
          } else {
            inputStringPointer = tempInputPointer + 1; // This is to move the input string pointer forward to the next point after the temp pointer.
            break;
          }

          // Now here we check if we have gotten to the end of the pattern
          if(patternPointer === pattern.length - 1) {
            return `Pattern found at position ${inputStringPointer - pattern.length}`
          }
        }
    }
}
/**
 * The problem with the above implementation is that for every mismatch (or partial match), we are moving the input string pointer
 * back to the next position after the temp pointer, which can lead to a lot of redundant comparisons. For instance, if we are
 * working with an input string being streamed from a file. We would need to write extra code to load chunks of it into memory, perhaps
 * into an array variable so we could traverse it in both direction. Ideally, the input string pointer should only move forward.
 * Also this method is not ideal for a large pattern that might produce a lot of partial matches.
 * Another issue here is the issue of scalability. We have a loop with an inner loop, which means for every pass of the outer loop,
 * we are potentially doing a full pass of the inner loop. If we double the length of the input string and the lenght of the pattern,
 * the time taken will quadruple. This is called quadratic time complexity. It is fine for small amount of data but it could be
 * problematic for larger ones. 
 */

// Implementation 2
function naiveSearch3(input: string, pattern: string): string {
  for (let inputStringPointer = 0; inputStringPointer < input.length; inputStringPointer++) {
    for (let patternPointer = 0; patternPointer < pattern.length; patternPointer++) {
      if(pattern[patternPointer] !== input[inputStringPointer + patternPointer]) {
        break;
      }

      if(patternPointer === pattern.length - 1) {
        return `Pattern found at position: ${inputStringPointer}` // Now since we are not more sliding inputStringPointer and instead 
        // patterPointer is assiting us with that, it means the inputStringPointer will end up at the position where the string matches start!
      }
    }
  }
}