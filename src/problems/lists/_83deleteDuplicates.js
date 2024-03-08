"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDuplicatesCase = void 0;
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function deleteDuplicates(head) {
    /* Given the head of a sorted linked list:
       delete all duplicates such that each element appears only once.
       Return the linked list sorted as well.
    */
    // Have curr and next node iterators
    let currNode = head;
    while (currNode != null) {
        let nextNode = currNode.next;
        if (currNode.val === (nextNode === null || nextNode === void 0 ? void 0 : nextNode.val)) {
            currNode.next = nextNode.next;
        }
        else {
            currNode = nextNode;
        }
    }
    return head;
}
;
function deleteDuplicatesCase() {
    let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, null)))));
    console.log(deleteDuplicates(head));
}
exports.deleteDuplicatesCase = deleteDuplicatesCase;
;
