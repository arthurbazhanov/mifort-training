'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let Node = new Node(element);
    let Current;

    if (this.head == null){
      this.head = Node;
    } else {
      Current = this.head;
      while(Current.next) {
        Current = Current.next
      }
      Current.next = Node;
    }
    this.size++;
  }


}