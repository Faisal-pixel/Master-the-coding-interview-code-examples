const string = ['a', 'b', 'c', 'd'];

//push
string.push('e'); //O(1)

//pop
string.pop();
string.pop(); // O(1)

//unshift
string.unshift('x') //O(n)

//splice: to add items in the middle, can also be used to delete
//-----------(startNumber, count, item to insert)
string.splice(2, 0, 'alien'); // It means, go to the index 2, then 0 represent the counts of items to delete - we set it to 0
                            // Then we insert 'alien' into 2 position
                            // O(n/2) => O(n)

console.log(string);