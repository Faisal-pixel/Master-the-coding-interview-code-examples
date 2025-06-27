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
    const newNode = new TreeNode(value);
    if (this.root === null) return (this.root = newNode);

    let currentNode: TreeNode = this.root;

    while (true) {
      /** While loop starts  */
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
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

  lookup(value: number) {
    if (this.root === null) return "The BST is empty. Nothing to lookup!";
    let currentNode: TreeNode | null = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (value < currentNode.value) {
        //Go left;
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return currentNode === null && "The node does not exist in the BST";
  }

  //   remove(value: number) {
  //     if (this.root === null) return "The BST is empty. Nothing to remove!";
  //     if (!this.root.left && !this.root.right) {
  //       this.root = null;
  //     }
  //     let newNode = new TreeNode(value);
  //     let currentNode: TreeNode | null = this.root;
  //     let parentNode: TreeNode | null = null;
  //     while (currentNode) {
  //       if (value < currentNode.value) {
  //         parentNode = currentNode;
  //         currentNode = currentNode.left;
  //       } else if (value > currentNode.value) {
  //         parentNode = currentNode;
  //         currentNode = currentNode.right;
  //       } else {
  //         //OPTION 1: If there are no left and right, just remove the node
  //         if (!currentNode.left && !currentNode.right) {
  //           currentNode = null;
  //         } else if (currentNode.left && !currentNode.right) {
  //           //OPTION 2: If there is a left child node and no right child node
  //           if (parentNode) {
  //             if (parentNode.left === currentNode) {
  //               parentNode.left = currentNode.left;
  //             } else if (parentNode.right === currentNode) {
  //               parentNode.right = currentNode.left;
  //             }
  //           } else {
  //             // Removing root node with only left child
  //             this.root = currentNode.left;
  //           }
  //         } else if (currentNode.left && currentNode.right) {
  //           //OPTION 3: If there is a left and right child node
  //           if (parentNode) {
  //             if (parentNode.left === currentNode) {
  //               parentNode.left = currentNode.right;
  //             } else if (parentNode.right === currentNode) {
  //               parentNode.right = currentNode.right;
  //             }
  //           } else {
  //             this.root = currentNode.right;
  //           }
  //         } else if (!currentNode.left && currentNode.right) {
  //           //OPTION 4: If there is only a right child
  //           if (parentNode) {
  //             if (parentNode.left === currentNode) {
  //               parentNode.left = currentNode.right;
  //             } else if ((parentNode.right = currentNode)) {
  //               parentNode.right = currentNode.right;
  //             }
  //           } else {
  //             this.root = currentNode.right;
  //           }
  //         }
  //       }
  //     }
  //   }

  remove(value: number) {
    if (this.root === null) return "The BST is empty. Nothing to remove!";
    if (!this.root.left && !this.root.right) {
      this.root = null;
    }
    let currentNode: TreeNode | null = this.root;
    let parentNode: TreeNode | null = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        //OPTION 1: If there are no left and right, just remove the node
        if (!currentNode.left && !currentNode.right) {
          currentNode = null;
        } else if (currentNode.left && !currentNode.right) {
          //OPTION 2: If there is a left child node and no right child node
          if (parentNode) {
            if (parentNode.left === currentNode) {
              parentNode.left = currentNode.left;
            } else if (parentNode.right === currentNode) {
              parentNode.right = currentNode.left;
            }
          } else {
            // Removing root node with only left child
            this.root = currentNode.left;
          }
        } else if (currentNode.right?.left === null) {
          //OPTION 3: If there is a right child but the right child doesnt have a left child
          if (parentNode) {
            if (parentNode.left === currentNode) {
              parentNode.left = currentNode.right;
            } else if (parentNode.right === currentNode) {
              parentNode.right = currentNode.right;
            }
          } else {
            this.root = currentNode.right;
          }
        } else if (currentNode.right?.left) {
          //OPTION 4: If there is a right child and the right child has a left child
          let leftmost: TreeNode | null = currentNode.right.left;
          let leftMostParent: TreeNode | null = currentNode.right;
          while (leftmost.left !== null) {
            leftMostParent = leftmost;
            leftmost = leftmost?.left;
          }

          leftMostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode) {
            if (parentNode.left === currentNode) {
              parentNode.left = leftmost;
            } else if ((parentNode.right = currentNode)) {
              parentNode.right = leftmost;
            }
          } else {
            this.root = leftmost;
          }
        }
      }
    }
  }
}

const myBST = new BinarySearchTree();

myBST.insert(9);
myBST.insert(4);
myBST.insert(20);
myBST.insert(1);
myBST.insert(6);

console.log(myBST);
console.log(myBST.lookup(9));
