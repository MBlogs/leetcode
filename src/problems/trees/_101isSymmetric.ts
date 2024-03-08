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
Given the root of a binary tree:
Check whether it is a mirror of itself 
(i.e., symmetric around its center).
*/ 

function isSymmetric(root: TreeNode | null): boolean {
    // Initial idea: Have to to run two simultaneous searches?
    // or actually, its just checking for equality on depth first seach
    // Don't think want recursion, as need to visit whole L and R

    if (root === null) {
        return true;
    } else {
        return isSymmetricParallel(root.left, root.right);
    }
};

function isSymmetricParallel(p: TreeNode | null, q: TreeNode | null): boolean {
    // Parallel node checking
    // One performs depth first left wise other right wise, then reverses
    if (p === null || q === null ) {
        return p === q;
    } if (p.val === q.val) {
        if (isSymmetricParallel(p.left, q.right)) {
            if (isSymmetricParallel(p.right, q.left)) {
                return true;
            }
        }
    }
    return false;
}

export function isSymmetricCase() {
    let root = new TreeNode(5, new TreeNode(1, null, null), null);
    console.log(isSymmetric(root));
};