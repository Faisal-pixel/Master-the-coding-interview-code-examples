Quicksort is also a divide and conquer algorithm... So there is probably going to be O(log n). It uses a pivoting technique, to break the main list into smaller list, then the smaller lists use the pivotting technique until they are sorted.

So how do we do this,

lets say we have 3, 7, 8, 5, 2, 1, 9, 5, 4

We pick a pivot, so 4 is our pivot. Then we say, I want all numbers less than 4 to be on the left of 4, and all numbers greater than 4 to be on the right of 4.
So we start, take 4 and start comparing:
1. Compare with 3, is 3 less than 4, yes, so we can leave it there since its already on the left
2. Go to the next number, 7. Is 7 < 4, not it isnt, it is greater. So we move 4 a step to the left, to create the space for 7, then 7 moves to 4's previous position, then 5 goes to 7's position.
So in other to move 4 to 5's position, we probably dont want to loose reference to 5, so we should store it in a variable, then move 4 to the position, then move 7 to 4's previous position. Then 5, in the variable, to 7's previious position
Now we have:
3, 5, 8, 5, 2, 1, 9, 4, 7
3. Then we compare 4 and 5. 5 is greater than 4. So we have to move it to the right of 4. We do the same step in 2, so we have:
3, 9, 8, 5, 2, 1, 4, 5, 7
4. THen we do this until we dont have anything greater than 4 on the left of it. So we have:
3, 1, 2, 4, 5, 8, 9, 5, 7

Then everything to the left and right of 4 still needs to be sorted, but at least now we know where 4 is going to be in the array. Now using divide and conquer, we split the list by the pivot (4)

                3, 1, 2, 4, 5, 8, 9, 5, 7
                   |     |       |
                ___|     |       |__
                |        |          |  
(2 is the pivot)3, 1, 2  |     5, 8, 9, 5, 7
                         |
                         |
                         |
                         |

### How do you decide your pivot point and how do you think about the coding solution?


### The hungariand dance method for quicksort

They picked a pivot and at the beginning of the array, then they used it to start comparing numbers from the other end, if they are bigger than the pivot, they remain there, but if the number is smaller than the pivot, then it comes out, goes to the pivot's position and the pivot stays on standby at the number's position. Now what does this mean, it means, at the new point of the pivot, all the numbers to the right (the other end) is definitely bigger than it, so we dont need to worry about them. So now the pivot is being compared with numbers after the number in the pivot's former position. Let's see this.

3, 1, 2, 4, 5, 8, 9, 5, 7

We pick 3;
1. Compare with 7, 7 is greater. So we leave it there. Then we move on to 5
2. Compare with 5, 5 is greater than 3, we leave it. Then move on to 9
3. Then we compare with 9, 9 is greater. We leave it. Then we move on to 8
4. We compare 8, 8 is greater. We leave it, then we move on to 5.
5. We continue like this, now when we get to 2. We compare with 3, but 3 is less than 2 right? So we move 

### Why is it O(n^2) in the worst case scenario?
Well this happens when the pivot number picked is the largest or the smallest, that way you arent exactly doing any splitting and it basically 0(n^2)

Quick sort is usually the fastest on AVERAGE, but the one downside is that it has some pretty nasty worse case scenarios.