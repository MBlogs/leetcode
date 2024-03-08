"use strict";
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function isSameTree(p, q) {
    /*  Given the roots of two binary trees p and q:
        write a function to check if they are the same or not.
        Two binary trees are considered the same if they are:
        1. structurally identical
        2. and the nodes have the same value.
    */
    // Initial idea: Pick any binary tree traversal search
    // Traverse both at the same time looking for absolute equality
    // Go left then right making sure both are true
    // Can check this node first
    if (p === null || q === null) {
        return p === q;
    }
    else if (p.val === q.val) {
        if (isSameTree(p.right, q.right)) {
            if (isSameTree(p.left, q.left)) {
                return true;
            }
        }
    }
    return false;
}
;
