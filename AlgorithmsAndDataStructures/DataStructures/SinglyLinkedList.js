// Singly Linked List
/**
 * Data structure that contains a head, tail, and length property
 *
 * Consists of nodes that each have a value and a pointer to the next node, or null if it's the last node
 *
 * Unlike arrays...
 * - there are no indeces
 * - nodes are connected via the next pointer
 * - random access (think index lookup on arrays) is not allowed
 * - good for insertion/deletion (whereas in arrays they can be expensive)
 *
 *
 *
 *
 *
 * QUESTIONS FOR EACH DATA STRUCTURE:
 *
 *  What is the big(O) for its methods?
 *
 *  What are the advantages/disadvantages?
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('goes');
// first.next.next.next.next = new Node('it');

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.head++;
  }
}

var list = new SinglyLinkedList();
