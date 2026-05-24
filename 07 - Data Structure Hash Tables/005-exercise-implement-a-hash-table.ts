interface IHashTable {
  data: Array<any>;
  _hash: (key: string) => number;
}

class HashTable implements IHashTable {
  // CLASS FIELD DECLARATION
  // In TypeScript, you must declare a property at the class level before you can use this.data anywhere.
  // The interface above is just a contract (a promise), but this line is what tells TypeScript the field physically exists.
  // We are NOT assigning a value here because the size comes from whoever creates the HashTable (via the constructor).
  // If you already knew the value upfront, you could write: data: Array<any> = []
  // You can also assign it inside a regular method (not just the constructor) and this declaration still works fine.
  data: Array<any>;

  constructor(size: number) {
    // we receive a size value, which is a number.
    this.data = new Array(size); // Then we are instantiating the Array class and setting the size,a nd then storing in this.data
  }
  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key: string, value: string | number | boolean | (() => {})) {
    // So we know we are receiving a key and then a value
    // Then basically we want to take the key, push in an array, then the value pushed in that array. Then push both as an array
    // into our data. Shouldnt be that hard shey?
    // So I just found out that initializing an array with new Array(size) creates a sparse array, with size holes and length.
    // and the indices ranges from 0 to size-1. so the elements are there, they are just undefined.
    // So if i run.push, it appends a new element to the end making it the 51st element, with index of 50. So we will change the
    // Way we add a memeber to the array.
    // I just realised we need to create a bucket (like this: []), before storing our values in it.
    const index = this._hash(key);
    const keyValueArray: (string | number | boolean | (() => {}))[] = [];
    keyValueArray.push(key);
    keyValueArray.push(value);

    if (!this.data[index]) {
      // We only want to create a bucket if it doesnt exist
      this.data[index] = [];
    }
    // Then either there is a bucket or not, just push in the member even the storage is full. So this helps when it comes to collision.
    // If the array is full, if there is a new member, we can just push into the bucket, so the bucket will have more than one.
    this.data[index].push(keyValueArray);
  }

  get(key: string) {
    let address = this._hash(key);
    let i = 0;
    if (this.data[address]) {
      while (i < this.data[address].length) {
        const value =
          this.data[address][i][0] === key && this.data[address][i][1];
        i++;
        return value;
      }
      return undefined;
    }
  }

  keys() {
    //So basically we want to get all the keys, but firstly, lets see our data
    // First of we need to loop through the data, and if the slot isnt empty, we want to pick it
    if(!this.data.length) {
        return undefined
    }
    const keyArray: string[] = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keyArray.push(this.data[i][j][0]);
          }
        } else {
          keyArray.push(this.data[i][0][0]);
        }
      }
    }
    return keyArray;
  }
}

class HashTableRevision implements IHashTable {
  data: Array<any>;

  constructor(size: number) {
    this.data = new Array(size)
  }


  _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  set(key: string, value: string | number | boolean | (() => {})) {
    const keyValueStore = []
    const index = this._hash(key)
    keyValueStore.push(key)
    keyValueStore.push(value)

    if(!this.data[index]) {
      this.data[index] = []
    }

    this.data[index].push(keyValueStore)
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapess", 10000);
myHashTable.set("grapes", 400);
myHashTable.set("lemons", 30);
myHashTable.set("strawberry", 60);
myHashTable.set("pinapple", 700);
myHashTable.set("milk", 2000);
myHashTable.set("nuts", 10);
myHashTable.set("grapes", 9500);

console.log(myHashTable.keys())
