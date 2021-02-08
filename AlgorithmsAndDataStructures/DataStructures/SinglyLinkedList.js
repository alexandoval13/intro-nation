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
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    }
    let poppedNode = this.tail;
    let newTailPosition = this.length - 1;

    if (newTailPosition) {
      const findNewTail = (currentNode, pos) => {
        if (pos === newTailPosition) {
          this.tail = currentNode;
          this.tail.next = null;
        } else {
          findNewTail(currentNode.next, pos + 1);
        }
      };

      findNewTail(this.head, 1);
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const shiftedNode = this.head;
    this.head = shiftedNode.next;
    // shiftedNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(position) {
    if (this.length <= position || position < 0) {
      return null;
    }
    let currentNode = this.head;
    let currentPosition = 0;
    while (currentPosition !== position) {
      currentNode = currentNode.next;
      currentPosition++;
    }
    console.log(position, currentNode);
    return currentNode;
  }

  set(position, val) {
    let foundNode = this.get(position);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(position, val) {
    if (position < 0 || position > this.length) {
      return false;
    } else if (position === 0) {
      return !!this.unshift(val);
    } else if (position === this.length) {
      return !!this.push(val);
    } else {
      let previous = this.get(position - 1);
      let next = previous.next;

      let newNode = new Node(val);
      previous.next = newNode;
      newNode.next = next;
      this.length++;
      return true;
    }
  }
}

var list = new SinglyLinkedList();
// console.log(list);
list.push(1);
// console.log(list);
list.push(2);
// console.log(list);
list.push(3);
console.log(list);

// const pop = list.pop();
// console.log(list);
// console.log(pop);

// list.push(4);
// list.push(8);
// list.push(7);
// list.push(6);
// console.log(list);

// const shifted = list.shift();
// console.log(shifted);
// console.log(list);
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// console.log(list);

// list.unshift('woooo');
// console.log(list);

list.get(3);
list.get(0);
list.get(1);

list.insert(1, 'insertion');
console.log(list.get(1).next);
console.log(list);

console.log(list.insert(0, 'test'));
