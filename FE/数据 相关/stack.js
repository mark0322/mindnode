class Stack {
	constructor(items = []) {//Stack 只接受一个 数组 类型的参数， 以进行 栈 的初始化
		this.items = items;
	}

	push(el) {//添加el 到栈顶
		this.items.push(el);	
	}
	pop() {//移除并返回 栈顶 元素
		return this.items.pop();
	}
	peek() {//显示栈顶 元素
		return this.items[this.items.length - 1]
	}
	isEmpty() {//若stack 为空，返回true
		return this.items.length === 0;
	}
	clear() { //清空stack
		this.items = [];
	}
	size() {//返回stack中el 个数
		return this.items.length;
	}
	print() {//控制台 输出 stack 内容
		console.log(this.items);
	}
}


// export { Stack }	


//----------demo： 将十进制转为二进制---------------
function fnDecimalToBinary(decNum) {
	let stack_binary = new Stack(),
		tempBinaryEl, //临时存储一个二进制位
		binaryString = '';	//存储 最终二进制 数据

	while(decNum > 0) {
		tempBinaryEl = decNum % 2; // 求模2
		decNum = Math.floor(decNum / 2);  // 跟进上步的 求模2
		stack_binary.push(tempBinaryEl.toString());
	}

	while(!stack_binary.isEmpty()) {
		binaryString += stack_binary.pop();
	}

	return binaryString;
}

// console.log( fnDecimalToBinary(1024) );

//----------demo： 将十进制转为二进制---------------






