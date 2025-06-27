class TreeNodeRevision1 {
    value: number;
    left: TreeNodeRevision1 | null;
    right: TreeNodeRevision1 | null;
    
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTreeRevision1 {
    root: TreeNodeRevision1 | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new TreeNodeRevision1(value);
        if(this.root === null) return this.root = newNode;

        let currentNode = this.root;

        while(true) {
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
                // Value already exist in the BST
                break;
            }
        }
    }

    lookup(value: number) {
        if(!this.root) return "The BST is empty";
        let currentNode: TreeNodeRevision1 | null = this.root;

        while(currentNode) {
            if(value === currentNode.value) {
                return currentNode;
            } else if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    return currentNode === null && "The node does not exist in the BST";
    }

    remove(value: number) {
        if(!this.root)  return "The BST is empty!";

        let currentNode: TreeNode | null = this.root;
        let parentNode: TreeNode | null = null;

        while(currentNode) {
            if(value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                // Now this is when the currentNode value is actually equalt to the value we want to remove
                
                if(!currentNode.left && !currentNode.right) {
                    currentNode = null;
                } else if(!currentNode.right) {
                    // CONDITION 1: If the currentNode has no right child
                    if(parentNode) {
                        if(parentNode.value < currentNode.value) {
                            parentNode.left = currentNode.left;
                            break;
                        } else {
                            parentNode.right = currentNode.left;
                        }
                    } else {
                        this.root = currentNode.left;
                    }
                } else if(currentNode.right.left) {
                    // CONDITION 2: IF the right child has a left child
                    let leftMostChild = currentNode.right.left;
                    let leftMostChildParent = currentNode.right;

                    while(leftMostChild.left !== null) {
                        leftMostChildParent = leftMostChild;
                        leftMostChild = leftMostChild.left;
                    }

                    leftMostChildParent.left = leftMostChild.right;
                    leftMostChild.left = currentNode.left;
                    leftMostChild.right = currentNode.right;

                    if(parentNode) {
                        if(parentNode.left === currentNode) {
                            parentNode.left = leftMostChild;
                        } else if (parentNode.right === currentNode) {
                            parentNode.right = leftMostChild;
                        }
                    } else {
                        this.root = leftMostChild
                    }

                } else if(currentNode.right && currentNode.right.left === null) {
                    if(parentNode) {
                        if(parentNode.left === currentNode) {
                            parentNode.left = currentNode.right;
                        } else if(parentNode.right === currentNode) {
                            parentNode.right = currentNode.right;
                        }
                    } else {
                        this.root = currentNode.right;
                    }
                }
            }
        }
    }
}