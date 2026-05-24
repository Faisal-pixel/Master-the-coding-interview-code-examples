/** WHAT IS A PROPER PREFIX
 * 🔹 Proper Prefix (ELI5 Explanation)

When building the LPS array in KMP, we look at a part of the pattern step by step.

At each step, we ask:
“Does the beginning of this part match the end of this part?”

To do this, we use something called a prefix and a suffix.

- Prefix = beginning part of the string  
- Suffix = ending part of the string  

But we don’t use just any prefix — we use a proper prefix.

👉 A proper prefix means:
“A prefix that is NOT the entire string itself”

---

🔹 Example 1:

String = "A"

Possible prefix:
- "A"

But this is the whole string ❌

So there is NO proper prefix.

👉 That is why:
LPS[0] = 0

---

🔹 Example 2:

String = "AB"

Prefixes:
- "A" ✅ (allowed)
- "AB" ❌ (not allowed — whole string)

So proper prefix = "A"

---

🔹 Key Idea:

At any position in the pattern, we are working with a current substring (not the full pattern every time).

When we say “whole string”, we mean:
👉 the current substring we are analyzing at that step

---

🔹 Simple Rule to Remember:

A proper prefix must be:
1. From the start of the string  
2. Smaller than the whole string  

If no such prefix exists → LPS value = 0

---

🔹 One-line memory trick:

“If I can’t cut a smaller piece from the front, then LPS = 0”
 */

