// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    /* Given the head of a sorted linked list:
       delete all duplicates such that each element appears only once. 
       Return the linked list sorted as well.
    */
    // Have curr and next node iterators
    let currNode:ListNode|null = head;
    while (currNode != null) {
        let nextNode:ListNode|null = currNode.next;
        if (currNode.val === nextNode?.val ) {
            currNode.next = nextNode.next;
        } else {
            currNode = nextNode;
        }
    }
    return head;
};

export function deleteDuplicatesCase() {
    let head:ListNode = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, null)))));
    console.log(deleteDuplicates(head));
};