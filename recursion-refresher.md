1. Remember that `FUNCTIONS` are basically something that does just a thing. It has one purpose to do just one thing. Like openACar(). Any logic inside this function should be something that leads to opening the car only. So now let's say you want it to happen recursively, So lets say, there is a big car, and in the big car there is another car. So basically, cars inside, cars inside cars, inside cars... on and on and on... So we can call the function recursively, that is:...

openACar(
    // This first call opens the car
    openACar(
        // Here you are opening the car within the first car

        openACar(
            // Opening the next car... on and on and on..
        )
    )
)

So let's say we have a ball in the smallest car, inside these stacks of cars... We are trying to retrieve this ball... then we can return it through every function till we get to the top. So the base case will be when we find the ball in the smallest car, we want to go back up and up and up... like that on and on and on...

<b>SIDE NOTE: </b> So the way I am thinking about how we can convert recurssions to loops is... since we know recurssion is basically repeating a function that just does one thing. Then we can pick the function right, just that one thing it does, and use a loop to repeat it. That should be the equivalent of recurrsion.