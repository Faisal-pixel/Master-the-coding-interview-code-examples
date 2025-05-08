// Building your own array
class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    go(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        return ++this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        // even if we are deleting the last item, it works because for the last item, the loop wont run because of the condition "i < this.length".
        // but it will be deleted, no need for shifting. So its kind of the best scenario because it is basically like the pop. All we do is remove the last element. O(1), regardless of the size.
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--
    }

    removeFirstElement() {
        // Basically what we will be doing here is removing the first item.
        // In other to do that, we can just always select the element in the data object that has 0 as
        // its index. After that, we want to shift. Will our shift items method work?. Let's see
        // So we pass in the value 0 as our index. Wait a minute, this might not work since we already
        // deleted the first element, that means the index of 0 doesnt exist anymore. Hmmm, it will be a
        // long way to start changing index values.
        // Why dont we shift first, then delete the last item since it is always redundant
        // So basically, we always pass in 0 into the shiftItems, when we do, the loop starts from 0,
        // It will stop on the last item as usual. Then along the way it changes the value of each element, then
        // We can delete. So all we need to do is really call our shiftItems method and then pass in 0
        if(this.length == 0) return undefined;
        const firstItem = this.data[0];
        this.shiftItems(0);
        return firstItem;
    }
}

const newArray = new myArray();

newArray.push("hello");
newArray.push("you");
newArray.push("weirdo")
newArray.push("life")
newArray.push("gives")
newArray.push("you")
newArray.push("lemonade")
newArray.removeFirstElement();

console.log(newArray);