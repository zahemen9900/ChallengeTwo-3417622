/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        let sum = carry;
        
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    
    return dummy.next;
};

// Helper function to create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    
    return dummy.next;
}

// Helper function to convert linked list to array for testing
function linkedListToArray(head) {
    let result = [];
    let current = head;
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

// Test cases
console.log("Test 1:");
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result1 = addTwoNumbers(l1, l2);
console.log("Input: [2,4,3] + [5,6,4]");
console.log("Output:", linkedListToArray(result1)); // Expected: [7,0,8]

console.log("\nTest 2:");
let l3 = createLinkedList([0]);
let l4 = createLinkedList([0]);
let result2 = addTwoNumbers(l3, l4);
console.log("Input: [0] + [0]");
console.log("Output:", linkedListToArray(result2)); // Expected: [0]

console.log("\nTest 3:");
let l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
let l6 = createLinkedList([9, 9, 9, 9]);
let result3 = addTwoNumbers(l5, l6);
console.log("Input: [9,9,9,9,9,9,9] + [9,9,9,9]");
console.log("Output:", linkedListToArray(result3)); // Expected: [8,9,9,9,0,0,0,1]
