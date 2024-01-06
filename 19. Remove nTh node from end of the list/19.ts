class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy: ListNode = new ListNode(0);
  dummy.next = head;
  let first: ListNode | null = dummy;
  let second: ListNode | null = dummy;
  for (let i = 1; i <= n + 1; i++) {
    if (first !== null) {
      first = first.next;
    }
  }
  while (first !== null) {
    first = first.next;
    if (second !== null) {
      second = second.next;
    }
  }
  if (second !== null && second.next !== null) {
    second.next = second.next.next;
  }
  return dummy.next;
}
