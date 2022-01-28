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

	printLastData() {
		let currentNode = this.firstNode;
		while (currentNode) {
			if (!currentNode.nextNode) {
				console.log(currentNode.data);
				break;
			}
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
list.printLastData();
console.log(list.printLastData()); // 리턴값이 없으면 함수는 undefined 리턴
