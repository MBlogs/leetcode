"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._21mergeTwoLists = exports._21mergeTwoListsBetter = exports.challengeTest = void 0;
function challengeTest(a) {
    return a;
}
exports.challengeTest = challengeTest;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function _21mergeTwoListsBetter(list1, list2) {
    /* Research: Singly Linked List */
    // Improvement: don't do bespoke Head logic at start. 
    // Can perform naturally inside
    // Improvement: To store the start, use a dummy node. Will use to return .next only as the Head
    // Improvement: Call the pointer tail instead (more expressive)
    let dummyNode = new ListNode(0, null);
    let tail = dummyNode;
    // Improvement: Can just use while True and break when needed
    while (true) {
        // Improvement: Null linking and checking, don't need to check if non-null now
        // Improvement: Can break when first is null
        if (list1 === null) {
            // Improvement: Tail is the pointer to simply assign .next to each time
            // I was instead assigning the .next against list1/list2 direct
            // But thats not needed given the tail gets assigned live node each time
            tail.next = list2;
            break;
        }
        if (list2 === null) {
            tail.next = list1;
            break;
        }
        // Now both are non-null, can proceed normally
        if (list1.val <= list2.val) {
            tail.next = list1;
            tail = list1;
        }
        else {
            tail.next = list2;
            tail = list2;
        }
    }
    return dummyNode.next;
}
exports._21mergeTwoListsBetter = _21mergeTwoListsBetter;
function _21mergeTwoLists(list1, list2) {
    /*
    My idea here was:
    1. Assign the head.
        This had problem that the function needs to return the head
        But the pointer tracking stuff was being reassigned
        So leads to duplicated code...
    2. Assign pointer as the head. That is temp node that follows along
    3. While either list are nonnull:
        If list1 < list2, set pointer to list1
        There is then a messy check (replicated for head)
        That takes into account if the next in list1 is null, should instead link list2

    To improve:
    - The if else logic is crazy and complicated
    - Better handling of assigning and returning the head
    - Is the while loop best? Or can is it better done recursively?
    */
    // The merged list isn't a direct object. 
    // Its the linked nature of the node object references
    // If list1 empty, list2 populated, remainder is simply the other list
    let head = null;
    if (list1 !== null && list2 === null) {
        head = list1;
        if (list1.next === null) {
            list1.next = list2;
            list1 = null;
        }
        else {
            list1 = list1.next;
        }
    }
    else if (list1 === null && list2 !== null) {
        head = list2;
        if (list2.next === null) {
            list2.next = list1;
            list2 = null;
        }
        else {
            list2 = list2.next;
        }
    }
    else if (list1 !== null && list2 !== null) {
        if (list2.val < list1.val) {
            head = list2;
            if (list2.next === null) {
                list2.next = list1;
                list2 = null;
            }
            else {
                list2 = list2.next;
            }
        }
        else {
            head = list1;
            if (list1.next === null) {
                list1.next = list2;
                list1 = null;
            }
            else {
                list1 = list1.next;
            }
        }
    }
    let pointer = head;
    // Keep going until one is null. Can then stop
    while (list1 !== null && list2 !== null && pointer !== null) {
        console.log(list1);
        console.log(list2);
        if (list1.val <= list2.val) {
            pointer.next = list1;
            pointer = list1;
            // Got to make link list2 if last is null
            if (list1.next === null) {
                list1.next = list2;
                list1 = null;
            }
            else {
                list1 = list1.next;
            }
        }
        else {
            pointer.next = list2;
            pointer = list2;
            // Got to make link list1 if last is null
            if (list2.next === null) {
                list2.next = list1;
                list2 = null;
            }
            else {
                list2 = list2.next;
            }
        }
    }
    return head;
}
exports._21mergeTwoLists = _21mergeTwoLists;
