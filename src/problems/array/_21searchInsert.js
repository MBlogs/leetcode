"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInsertCase = exports.searchInsert = void 0;
function searchInsert(nums, target) {
    /*
    Given a sorted array of distinct integers and a target value.
    Return the index if the target is found.
    If not, return the index where it would be if it were inserted in order.
    Run in O(log n)
    */
    /*
    My first guess was binary search. Going for midpoints each time
    */
    // Split left and right
    // Note that it needs to return the insertion point too
    let mid = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            // Equal.  Key thing is can return at this point.
            return mid;
        }
    }
    // This is key thing to get the insertion index.
    // Don't use mid. Can use the right + 1
    // (Loop will always end with left above and right one under)
    return right + 1;
}
exports.searchInsert = searchInsert;
;
function searchInsertCase() {
    let nums = [1, 3, 5, 6];
    let target = 5;
    let index = searchInsert(nums, target);
    console.log(index);
}
exports.searchInsertCase = searchInsertCase;
