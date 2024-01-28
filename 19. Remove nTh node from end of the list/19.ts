// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to remove the nth node from the end of the list
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy: ListNode = new ListNode(0); // A dummy node to simplify edge cases
  dummy.next = head;
  let first: ListNode | null = dummy;
  let second: ListNode | null = dummy;
  // Advances first pointer so that the gap between first and second is n nodes apart
  for (let i = 1; i <= n + 1; i++) {
    if (first !== null) {
      first = first.next;
    }
  }
  // Move first to the end, maintaining the gap
  while (first !== null) {
    first = first.next;
    if (second !== null) {
      second = second.next;
    }
  }
  // Second is now at the node before the one to be deleted
  if (second !== null && second.next !== null) {
    second.next = second.next.next;
  }
  return dummy.next; // The head of the new list
}
