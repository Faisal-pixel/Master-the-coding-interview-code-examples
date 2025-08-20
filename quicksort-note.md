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
5. We continue like this, now when we get to 2. We compare with 3, but 3 is less than 2 right? So we move it to 2's position and move 2 to 3's position
6. Now the beautiful thing is that we do not need to worry about the numbers to the right of 3 now, this is what we have:
2, 1, 3, 4, 5, 8, 9, 5, 7
7. Everything to the right of 3 is bigger, we are sure, so we can just compare with the number after 2 now, which is 1, 1is smaller than 3. So we do not do anything.
8. Then we go ahead and spill from there

### Why is it O(n^2) in the worst case scenario?
Well this happens when the pivot number picked is the largest or the smallest, that way you arent exactly doing any splitting and it basically 0(n^2)

Quick sort is usually the fastest on AVERAGE, but the one downside is that it has some pretty nasty worse case scenarios.

# Quick Sort from Bro Code
1. Pick a pivot
2. Then we need two variables, one starting from -1 and the other starting from 0; So i is one less of the of j. We also need a temp variable

      8, 2, 4, 7, 1, 3, 9, 6, 5
   |  |
   |  |
  [i] [j]

3. If the value of array[j] is greater than or equal to our pivot, we ignore it. If it is less than.
4. So we check array[0] when j=0. Is 8 > 5, yes. We leave it there and then we increment j by 1. So... j++; j=1; Now during this first iteration, i does not come into play yet. We do not do anything to i, but we will in the next one
5. Now since j = 1; array[j] = 2.. is 2 less than 5, yes it is. Then we go ahead to increment i. So... i++ which means i=0;
6. Then you take array[i]; array[0] = 8; We take it and save it into a temp variable. So temp = array[0] = 8; Take the value of array[j] = array[1] = 2. We assign it to array[i] = array[j]; Then we take the value of temp and assing to array[j]. So we switch. We now have:
      2, 8, 4, 7, 1, 3, 9, 6, 5
      |  |
      |  |
    [i] [j]
7. Then now we increment j. In the new iteration. j = 2. Then we check if array[j] = 4 is lesser than 5. If it is then we increment i; i becomes 1. Now we set the temp variable to array[i]. So temp = array[i] = 8. Then we assing array[i] = array[j]. array[1] = array[2]. So array[1] = 4. Then we now set array[j] to temp. So array[j] = 8. So now we have:
      2, 4, 8, 7, 1, 3, 9, 6, 5
         |  |
         |  |
        [i] [j]
8. We move on to the next iteration, j is incremented. j = 3. Then we check if array[j] = 7 is greater than 5. So we leave it and dont do anything.
9. Then we move on to the next iteration, we increment j. j = 4. Remember we dont do anything to i, since 7 is greater than 5. so i = 1; Now array[j] = array[4] = 1.
Now we know 1 is less than 5, so we increment i. Now i = 2. array[i] = 8. Then we can swap. We set temp to array[i]. So... temp = array[i] = 8. Then we set array[i] = array[j]. array[2] = array[4]. Which is: array[2] = 1. Then we can now set array[j] to temp. So array[4] = temp = 8. So we have:
      2, 4, 1, 7, 8, 3, 9, 6, 5
            |     |
            |     |
           [i]   [j]
10. We continue like this until we have j get to 5. that is j (which is an index) is equal to the index of 5. Or array[j]===pivot. Our pivot is always the last member. Then this emans that the new position of our pivot is the index i + 1.
So array[i+1] = pivot number.

12. Now the next thing is, partitioning. We need to partition at the pivot. The first partition will be all the element from the beginning of our array, up to our pivot but not including our pivot. The second partition will be all the element after our pivot to the end of the array.
13. Then you pass it into the quicksort function again. So one left, and another right
