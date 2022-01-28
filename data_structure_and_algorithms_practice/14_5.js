class Node {
	constructor(data, nextNode = null) {
		this.data = data;
		this.nextNode = nextNode;
	}
}

class LinkedList {
	constructor(firstNode) {
		this.firstNode = firstNode;
	}
	printList() {
		let currentNode = this.firstNode;

		while (currentNode) {
			console.log(currentNode.data);
			currentNode = currentNode.nextNode;
		}
	}
}

const node1 = new Node('once');
const node2 = new Node('upon');
const node3 = new Node('a');
const node4 = new Node('time');
node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;

let whatNodeIKnow = node2;
const list = new LinkedList(whatNodeIKnow.nextNode);
whatNodeIKnow.nextNode = null;

list.printList();
