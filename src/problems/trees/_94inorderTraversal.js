"use strict";
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
Object.defineProperty(exports, "__esModule", { value: true });
exports.inorderTraversalCase = void 0;
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function inorderTraversal(root) {
    // Initial idea: Must go leftmost if possible
    // Probably recursion
    let out = [];
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
}
;
function inorderTraversalCase() {
    let x = 0;
}
exports.inorderTraversalCase = inorderTraversalCase;
;
