/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * Adds two numbers represented as linked lists.
 *
 * @param {ListNode} l1 - The first linked list.
 * @param {ListNode} l2 - The second linked list.
 * @return {ListNode} - The resulting linked list.
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0; // Initialize the carry to 0
  let dummy = new ListNode(0); // Create a dummy node to simplify the logic
  let current = dummy; // Initialize the current node to the dummy node

  // Iterate through the linked lists while any of them still have nodes or there is a carry
  while (l1 || l2 || carry) {
    let sum = carry; // Initialize the sum with the carry value

    if (l1) {
      // If l1 is not null
      sum += l1.val; // Add the value of l1 to the sum
      l1 = l1.next; // Move to the next node of l1
    }

    if (l2) {
      // If l2 is not null
      sum += l2.val; // Add the value of l2 to the sum
      l2 = l2.next; // Move to the next node of l2
    }

    carry = Math.floor(sum / 10); // Calculate the new carry by dividing the sum by 10 and taking the floor
    sum %= 10; // Calculate the new sum by taking the modulo of the sum by 10

    current.next = new ListNode(sum); // Create a new node with the sum as its value and set it as the next node of the current node
    current = current.next; // Move to the newly added node
  }

  return dummy.next; // Skip the dummy node and return the resulting linked list
};
