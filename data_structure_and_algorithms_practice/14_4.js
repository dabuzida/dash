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
	reverseNode() {
		let currentNode = this.firstNode.nextNode;
		this.firstNode.nextNode = null;

		let tempAddress = this.firstNode;
		let nextNode;

		while (currentNode) {
			// console.log(currentNode);

			nextNode = currentNode.nextNode;
			currentNode.nextNode = tempAddress;
			tempAddress = currentNode;
			currentNode = nextNode;

			if (!currentNode) {
				this.firstNode = tempAddress;
			}
		}
	}

	printList() {
		let currentNode = this.firstNode;
		while (currentNode) {
			console.log(currentNode);
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

const list = new LinkedList(node1);

list.reverseNode();
list.printList();
