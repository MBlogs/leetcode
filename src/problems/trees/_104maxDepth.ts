class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node.
*/

function maxDepth(root: TreeNode | null): number {
    // Initial ideas: Does binary help us prune?
    // Use recursion and in-order recursion to add
    if (root !== null){
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
    return 0;
};

export function maxDepthCase() {
    let root:TreeNode = new TreeNode(5, new TreeNode(1,null,null), null);
    console.log(maxDepth(root));
};