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
// context vs scope
const object4 = {
    a: function() {
        console.log(this); // this will refer to the object4
    },
    b: () => {
        console.log(this); // this will refer to the global object (window in browser)
    }
}
// instantiations

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
       return `Hi I am ${this.name}, I'm a ${this.type}`
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }

    play() {
        `WEEEEE! I am a ${type}!`
    }
}

const wizard1 = new Wizard("Dumbledoor", "Sorcerer");
console.log("Hey", wizard1.introduce())