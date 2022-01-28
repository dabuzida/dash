class Node {
	constructor(data, nextNode = null, previousNode = null) {
		this.data = data;
		this.nextNode = nextNode;
		this.previousNode = previousNode;
	}
}

class DoubleyLinkedList {
	constructor(firstNode, lastNode) {
		this.firstNode = firstNode;
		this.lastNode = lastNode;
	}

	printReverse() {
		let currentNode = this.lastNode;

		while (currentNode) {
			console.log(currentNode.data);
			currentNode = currentNode.previousNode;
		}
	}
}

const node1 = new Node('Bob');
const node2 = new Node('Jill');
const node3 = new Node('Emily');
const node4 = new Node('Greg');
const node5 = new Node('Lee');

node1.nextNode = node2;
node2.previousNode = node1;
node2.nextNode = node3;
node3.previousNode = node2;
node3.nextNode = node4;
node4.previousNode = node3;
node4.nextNode = node5;
node5.previousNode = node4;

const list = new DoubleyLinkedList(node1, node5);
list.printReverse();
