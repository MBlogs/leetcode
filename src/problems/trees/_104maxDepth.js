"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxDepthCase = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node.
*/
function maxDepth(root) {
    // Initial ideas: Does binary help us prune?
    // Use recursion and in-order recursion to add
    if (root !== null) {
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
    return 0;
}
;
function maxDepthCase() {
    let root = new TreeNode(5, new TreeNode(1, null, null), null);
    console.log(maxDepth(root));
}
exports.maxDepthCase = maxDepthCase;
;
