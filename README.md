# zbc.react

-- for Interview --

# React #

## React 生命周期 ##

内外包含关系

	//初始化一次 1
	componentWillMount() {
		console.log('componentWillMount');
	}

	//1
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		console.log('componentWillReceiveProps');
	}

	//2
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState);
		console.log('shouldComponentUpdate');

		return true;
	}

	//3
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}

	//4
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	//初始化一次 2
	componentDidMount() {
		console.log('componentDidMount');
	}

	//卸载前一次
	componentWillUnmount(){
		console.log('componentWillUnmount');
	}


生命周期内需要注意的事儿：

1.componentWillUpdate 和 componentDidUpdate 里面不要进行 setState 操作，不然会导致死循环（内存溢出）

2.如果要从 props 中获取数据，请不要尝试将之 setstate，然后在通过 this.state 将之读取，因为可能会无法及时更新。





## React 设计易于维护的组件的要素  ##

1.高内聚

2.低耦合

## React 数据传输 ##

1.父组件给子组件传数据通过什么？props 即可

2.子组件给父组件传数据通过什么？子组件的事件回调函数传参

## React state 跟 props 配合的局限性 ##

由于父组件和子组件都各自拥有自己的状态存储，如果发生bug，就可能会发生数据不统一现象，从而导致不可预知的后果。

所以应该有一个统一的 “数据领头羊” 让所有组件与之看齐。

## React 傻瓜组件和容器组件  ##

1.傻瓜组件：可以说是一个纯函数组件，直接根据 props 产生结果，应该是一个无状态组件。

2.容器组件：状态交给容器组件来打理，处理好之后作为 props 传递给傻瓜组件，从而配合为一个高质量组件。


## context 用意 ##

当组件嵌套多层时，如果还是只用 prop 层层传递的话代码和逻辑就会显得臃肿而复杂，甚至难以维护。

此时如果在“最顶层”声明并提供一个可供子孙组件可共享的store就会变得很轻松简洁。

官方声明切记不要滥用。


## React 组件优化 ##

1.shouldComponentUpdate(nextProps, nextState){ return `boolean` } 以告知组件何时更新。

2.React Reconcliation（调和过程）（更新算法）

	（1）尽量避免在子组件完全一样的情况下只修改容器元素的类型，会造成重新渲染的浪费过程。

	（2）使用 key 可以大大提高更新效率，注意不要将数组下标作为 key 传入，key 要求唯一不变的值才有意义。



 


# Redux #

## MVC框架缺陷 ##

“让 View 和 Model 直接对话简直就是灾难”

“MVC 很快就会变得非常复杂，每当工程师想要增加一个新的功能时，对代码的修改很容易就会引发新的 bug，因为不同模块之间的依赖关系让系统变得脆弱且不可预测。对于刚刚加入团队的新手，更是举步维艰，因为不知道修改代码会造成什么样的后果。如果要保险，就会发现寸步难移；如果放手去干，就极可能引进更多 bug”。

一句话：“对于庞大的项目代码而言，MVC难以维护”。


## Redux 基本原则 ##

大原则：“单项数据流”

React是单向数据流，数据主要从父节点传递到子节点（通过props）。

如果顶层（父级）的某个props改变了，React会重渲染所有的子节点。

1.唯一数据源

2.保持状态只读（不直接修改状态，修改状态应该派发action对象完成）

3.数据改变只能通过纯函数（无副作用函数）完成








# 毒瘤语句 #

“差劲的程序员操心代码，优秀的程序员操心数据结构和他们之间的关系。”		

					----Linus Torvalds （Linux 创始人）

“在最理想的情况下，我们应该通过增加代码来增加系统的功能，而不是通过对现有代码的修改来实现之。”		

					----Robert C.Martin

“我们应该忽略很小的性能优化，可以说97%的情况下，过早的优化是万恶之源，而我们应该关心对性能影响最关键的那另外3%的代码。”		

					----高纳德

“重复是优秀系统设计的大敌”

					----Robert C.Martin










