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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
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
    if (p === null || q === null){
        return p === q;
    } else if (p.val === q.val) {
        if(isSameTree(p.right, q.right)){
            if (isSameTree(p.left, q.left)) {
                return true;
            }
        }
    }
    return false;
};

export function isSameTreeCase() {
    let m = new TreeNode(3, null, null);
    let p = new TreeNode(5, m, null);
    let q = new TreeNode(5, null, null);
    console.log(isSameTree(p, q));
};