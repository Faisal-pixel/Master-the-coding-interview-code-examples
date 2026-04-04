# Naive String Search Algorithm Explanation

## Implementation 1: YouTube Tutorial Version (Computer Science Lessons)

### 📚 What is Naive Search?

Imagine you're playing "Find the Word" - someone gives you a **long sentence** and asks you to find where a **short word** appears in it.

The naive approach is **boring but works perfectly**:
- Start at the very beginning of the sentence
- Check if the word matches starting from this spot
- If it does, great! We found it!
- If it doesn't, move one position forward and try again
- Keep doing this until we find it (or reach the end)

That's exactly what this algorithm does!

---

### 🔍 Understanding the Code (Line by Line)

```typescript
const inputString2: string = "CAKCAKEDCAKEYCACAKES";
const pattern2: string = "CAKES";
```

**What is this?**
- `inputString2`: The long text where we're searching (20 characters)
- `pattern2`: The short text we're looking for (5 characters)

**Simple explanation:** We're like detectives searching for the word "CAKES" hidden in "CAKCAKEDCAKEYCACAKES"

---

```typescript
function naiveSearch2(input: string, pattern: string): string {
```

**What is this?**
- We're creating a function that takes two things:
  - `input`: The long text to search in
  - `pattern`: The short text to find
- The function returns a `string` (the message telling us where we found it, or no match)

---

```typescript
    let inputStringPointer = 0;
```

**What is this?** 
- This is like a **finger pointing at the input string**
- It starts at position `0` (the very first character)
- We use it to track "where we are" in the long text

**Visual:**
```
String: C A K C A K E D C A K E Y C A C A K E S
Index:  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
        ↑
        inputStringPointer = 0
```

---

```typescript
    let patternPointer = 0;
```

**What is this?** 
- This is like a **finger pointing at the pattern string**
- It starts at position `0` (the first character of the pattern)
- We use it to track "which character of the pattern are we trying to match"

**Visual:**
```
Pattern: C A K E S
Index:   0 1 2 3 4
         ↑
         patternPointer = 0
```

---

```typescript
    let tempInputPointer: number;
```

**What is this?** 
- This is a **bookmark/sticky note**
- When we start checking a new position in the input string, we save it here
- If matching fails, we use this to know "where we were" so we can try the next position

---

```typescript
    while (inputStringPointer < input.length) {
```

**What is this?** 
- Keep repeating this loop as long as we haven't reached the end of the input string
- `input.length = 20`, so we check while `inputStringPointer < 20`

**Simple explanation:** Keep searching until we've looked at every position in the string

---

```typescript
        tempInputPointer = inputStringPointer;
        patternPointer = 0;
```

**What is this?** 
- Save the current position in the input string (put down our bookmark)
- Reset the pattern pointer back to the start (because we're starting fresh to match the pattern)

**Simple explanation:** "I'm about to try matching from this position. Let me remember where I am, and let me start looking at the pattern from the beginning."

---

```typescript
        while (patternPointer < pattern.length){
```

**What is this?** 
- Inner loop: Keep trying to match characters as long as:
  - We haven't matched all characters in the pattern yet (`patternPointer` hasn't reached 5)

**Simple explanation:** Keep checking characters one by one until we've checked all of them or we find a mismatch

---

```typescript
          if(pattern[patternPointer] === input[inputStringPointer]) {
```

**What is this?** 
- Compare: Does the current pattern character match the current input character?
- `pattern[patternPointer]`: The character we're looking for in the pattern
- `input[inputStringPointer]`: The character we're looking at in the input string

**Simple explanation:** "Do these two letters match?"

---

```typescript
            inputStringPointer += 1
            patternPointer += 1
```

**What is this?** 
- If they match! Move both fingers forward by 1 position
- `inputStringPointer` moves to the next character in the input
- `patternPointer` moves to the next character in the pattern

**Simple explanation:** "Great! They match! Let me check the next character."

---

```typescript
          } else {
            inputStringPointer = tempInputPointer + 1;
            break;
          }
```

**What is this?** 
- If they DON'T match, we've found a mismatch
- `inputStringPointer = tempInputPointer + 1`: Move to the next position in the input string
- `break`: Exit the inner loop (stop trying to match from this position)

**Simple explanation:** "They don't match. Let me try starting from the next position instead."

---

```typescript
          if(patternPointer === pattern.length) {
            return `Pattern found at position ${inputStringPointer - pattern.length}`
          }
```

**What is this?** 
- After incrementing `patternPointer`, check: Have we successfully matched ALL characters?
- `pattern.length = 5`, so we check if `patternPointer === 5`
- If yes, we found the pattern! Calculate where it started and return

**The Math Explained:** `inputStringPointer - pattern.length`
```
When we finish matching 'S', inputStringPointer points PAST the pattern
Example:
- We matched 5 characters (CAKES)
- inputStringPointer = 20 (pointing past 'S')
- Where did we START? 20 - 5 = 15
- So the pattern starts at position 15 ✓
```

**Simple explanation:** "Count back 5 steps from where you are now, and that's where the word started!"

---

## Step-by-Step Trace (Complete Walkthrough)

### 📍 Setup
```
Input String: C A K C A K E D C A K E Y C A C A K E S
Index:        0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

Pattern: C A K E S
Index:   0 1 2 3 4
```

---

### 🔄 OUTER LOOP ITERATION 1: inputStringPointer = 0

**Before Inner Loop:**
- `inputStringPointer = 0`
- `tempInputPointer = 0` (saved position)
- `patternPointer = 0` (reset for new attempt)

**Trying to match "CAKES" starting at position 0:**

**Inner Loop Step 1:**
```
Checking: pattern[0]='C' vs input[0]='C'
Result: ✅ MATCH!
Action: inputStringPointer = 1, patternPointer = 1
```

**Inner Loop Step 2:**
```
Checking: pattern[1]='A' vs input[1]='A'
Result: ✅ MATCH!
Action: inputStringPointer = 2, patternPointer = 2
```

**Inner Loop Step 3:**
```
Checking: pattern[2]='K' vs input[2]='K'
Result: ✅ MATCH!
Action: inputStringPointer = 3, patternPointer = 3
```

**Inner Loop Step 4:**
```
Checking: pattern[3]='E' vs input[3]='C'
Result: ❌ NO MATCH! (Pattern wants 'E' but found 'C')
Action: inputStringPointer = tempInputPointer + 1 = 0 + 1 = 1
Break out of inner loop
```

**End of Iteration 1:** `inputStringPointer = 1`

---

### 🔄 OUTER LOOP ITERATION 2: inputStringPointer = 1

**Before Inner Loop:**
- `inputStringPointer = 1`
- `tempInputPointer = 1` (saved position)
- `patternPointer = 0` (reset for new attempt)

**Trying to match "CAKES" starting at position 1:**

**Inner Loop Step 1:**
```
Checking: pattern[0]='C' vs input[1]='A'
Result: ❌ NO MATCH!
Action: inputStringPointer = tempInputPointer + 1 = 1 + 1 = 2
Break out of inner loop
```

**End of Iteration 2:** `inputStringPointer = 2`

---

### 🔄 OUTER LOOP ITERATION 3: inputStringPointer = 2

**Inner Loop Step 1:**
```
Checking: pattern[0]='C' vs input[2]='K'
Result: ❌ NO MATCH!
Action: inputStringPointer = 2 + 1 = 3
```

**End of Iteration 3:** `inputStringPointer = 3`

---

### 🔄 OUTER LOOP ITERATIONS 4-14: (Brief Summary)

Positions 3-14 all fail to match because they don't start with the pattern "CAKES". Each iteration:
- Saves current position to `tempInputPointer`
- Tries to match `pattern[0]='C'`
- Finds mismatch
- Increments `inputStringPointer` by 1
- Moves to next iteration

---

### 🎉 OUTER LOOP ITERATION 15: inputStringPointer = 15 (THE MATCH!)

**Before Inner Loop:**
- `inputStringPointer = 15`
- `tempInputPointer = 15` (saved position)
- `patternPointer = 0` (reset for new attempt)

**Trying to match "CAKES" starting at position 15:**

```
Input at position 15-19: C A K E S
Pattern:                 C A K E S
                         ↑
```

**Inner Loop Step 1:**
```
Checking: pattern[0]='C' vs input[15]='C'
Result: ✅ MATCH!
Action: inputStringPointer = 16, patternPointer = 1
```

**Inner Loop Step 2:**
```
Checking: pattern[1]='A' vs input[16]='A'
Result: ✅ MATCH!
Action: inputStringPointer = 17, patternPointer = 2
```

**Inner Loop Step 3:**
```
Checking: pattern[2]='K' vs input[17]='K'
Result: ✅ MATCH!
Action: inputStringPointer = 18, patternPointer = 3
```

**Inner Loop Step 4:**
```
Checking: pattern[3]='E' vs input[18]='E'
Result: ✅ MATCH!
Action: inputStringPointer = 19, patternPointer = 4
```

**Inner Loop Step 5:**
```
Checking: patternPointer < pattern.length?
4 < 5? ✅ YES, continue loop

Checking: pattern[4]='S' vs input[19]='S'
Result: ✅ MATCH!
Action: inputStringPointer = 20, patternPointer = 5
```

**Check: Have we matched all characters?**
```
if(patternPointer === pattern.length)
if(5 === 5) ✅ YES!

Calculate starting position:
inputStringPointer - pattern.length = 20 - 5 = 15
```

**🎊 RETURN:**
```
"Pattern found at position 15"
```

---

## ✅ Index Position Verification

**Let me verify the answer is correct:**

```
String: C  A  K  C  A  K  E  D  C  A  K  E  Y  C  A  C  A  K  E  S
Index:  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
                                                   ↑  ↑  ↑  ↑  ↑
                                            Pattern found here! (indices 15-19)
```

**Pattern "CAKES" matched at indices 15, 16, 17, 18, 19 ✓**

**Starting position: 15 ✓**

---

## 📊 Time Complexity

**In the worst case:** O(n × m)
- `n` = length of input string (20)
- `m` = length of pattern (5)
- We might check every position (n positions) and for each, try matching the entire pattern (m characters)

**In the best case:** O(n)
- If the pattern is found immediately at the beginning

**In practice:** Usually much faster than worst case if pattern is found early!

---

## 🎓 Key Takeaways

1. **inputStringPointer** = "Where am I in the big text?"
2. **patternPointer** = "Which letter of the pattern am I looking for?"
3. **tempInputPointer** = "Bookmark - remember where this attempt started"
4. **Mismatch handling** = Move one position forward and try again
5. **Success condition** = All pattern characters matched (patternPointer === pattern.length)
6. **Position calculation** = Subtract pattern length from final position to find start

---
