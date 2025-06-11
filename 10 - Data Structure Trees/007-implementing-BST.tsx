class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        console.log("Running the insert")
        const newNode = new TreeNode(value)
       if(this.root === null) return this.root = newNode;

       let currentNode: TreeNode = this.root;
    
       while(currentNode !== null) {
        console.log("While loop is starting...")
        console.log("This is the current node: ", currentNode)
        /** While loop starts  */
        if(value < currentNode.value) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                break;
            }
            currentNode = currentNode.left;
        } else if (value > currentNode.value) {
            if(!currentNode.right) {
                currentNode.right = newNode;
                break;
            }
            currentNode = currentNode.right;
        } else {
            // Value already exists in the tree, do not insert duplicates
            break;
        }
        /** While loop ends */
       }
    }
}

const myBST = new BinarySearchTree();

myBST.insert(9)
myBST.insert(4);
myBST.insert(20);
myBST.insert(1);
myBST.insert(6);
console.log(myBST);