//LinkedList的一个元素节点
class Node { 
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {//_length & _head 为私有变量，理应外部访问不到
		this._length = 0;	//存储 链表的总元素数量
		this._head = null;	//存储第一个节点的引用
	}

	append(element) {	//向linkedList尾部添加 元素
			let node = new Node(element),
				currNode;
			if (this._head === null) {//添加第一个node
				this._head = node;
			} else {//非添加第一node，需遍历链表，将元素添加至尾部
				currNode = this._head;
				while (currNode.next !== null) {
					currNode = currNode.next;
				}
				currNode.next = node;
			}
			this._length++;//更新列表长度
	}

	insert(position, element) {	//向指定位置插入元素
		if (position > -1 && position < this._length) {
			let node = new Node(element),
				currNode = this._head,
				prevNode = null,
				index = 0;
			if (position === 0) {
				node.next = currNode;
				this._head = node;
			} else {
				while (index++ < position) {
					prevNode = currNode;
					currNode = currNode.next;
				}
				prevNode.next = node;
				node.next = currNode;
			}
			this._length++;
		} else {
			throw Error('Not exist insert position!')
		}

	}

	removeAt(position) {//移除指定位置的元素
		//检查越界值
		if (position > -1 && position < this._length) {
			let currNode = this._head,
				prevNode = null,
				index = 0;
			if (position === 0) {
				this._head = currNode.next;
			} else {
				while (index++ < position) {
					prevNode = currNode;
					currNode = currNode.next;
				}
				prevNode.next = currNode.next;
			}
			this._length--;
			return currNode.element;
		} else {
			return null;
		}
	}

	indexOf(element) {//返回该元素在链表的位置；若无元素，返回-1
		let currNode = this._head,
			index = -1;
		while (currNode) {
			index++;
			if (currNode.element === element) {
				return index;
			}
			currNode = currNode.next;
		}
	}
	remove(element) {
		let index = this.indexOf(element);
		return this.removeAt(index);
	}
	isEmpty() {//
		return this._length === 0;
	}

	size() {
		return this._length;
	}

	toString() {//将linkedList中的element拼接成字符串
		let currNode = this._head,
			string = '';
		while (currNode) {
			string += currNode.element + ',';
			currNode = currNode.next;
		}
		return string;
	}

	getHead() {
		return this._head;
	}
}