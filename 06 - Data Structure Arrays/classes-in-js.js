// reference type
// [] === [] this gives false. Why?
// Let's say we have:
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
object1 === object2 // will give true because its the same thing. Object2 basically references object1. object1 stores the address/location of box1. And then object2 references the object1
//                         -----> Box 1
//                         |       ^
//object1 ------------------       |
//                                 |
//object2 --------------------------
object1.value = 15;
// If we run object2.value, we will also get 15 now becuase the content of Box 1 has changed
// But object1 an dobject3 are different object in memory so:
object1 === object3 // will return false
// context
// instantiations