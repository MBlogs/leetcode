// Given the root of a binary tree, return the inorder traversal of its nodes' values.


// Definition for a binary tree node.
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

function inorderTraversal(root: TreeNode | null): number[] {
    // Initial idea: Must go leftmost if possible
    // Probably recursion
    let out:number[] = [];
    if (root !== null) {
        // Recurse left
        // Note: function handles nulls
        out = out.concat(inorderTraversal(root.left));
        // This node now next
        out = out.concat([root.val]); // this node is next in sequence
        // Recurse right
        out = out.concat(inorderTraversal(root.right));
    }
    return out;
};

export function inorderTraversalCase() {
    let x: number = 0;
};