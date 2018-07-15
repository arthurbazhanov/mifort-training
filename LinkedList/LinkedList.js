const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.LinkedListSize = 0;
  }

  size() {
    return this.LinkedListSize;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
    this.LinkedListSize++;
  }

  insert(position, value) {

    if (position > 0 && position < this.size) {
      return false
    } else {
      let node = new Node(value);
      let curr, prev;

      curr = this.head;

      if (position === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < position) {
          it++;
          prev = curr;
          curr = curr.next
        }
        node.next = curr;
        prev.next = node;
      }
      this.LinkedListSize++;
    }
  }

  remove(position) {
    if (position > 0 && position > this.size) {
      return -1
    } else {
      let curr = this.head;
      let it = 0;
      let prev = curr;

      if (position === 0) {
        this.head = curr.next;
      } else {
        while (it < position) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.LinkedListSize--;
    }
  }

  get(position) {

    let LinkedListSize = 0;
    let curr = this.head;

    if (position > 0 && position <= this.size) {
      return false
    }

    while (LinkedListSize < position) {
      curr = curr.next;
      LinkedListSize++;
    }
    return curr;
  }


  _insertToHead(value) {
    let node = new Node(value);
    node.next = this.head;

    this.head = node;

    return node;
  }

  _removeFromHead(value) {
    let deletedNode;
    let currentNode = this.head;

    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;

    return deletedNode;
  };

}

module.exports = LinkedList;