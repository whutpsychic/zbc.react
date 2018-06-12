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










# Redux #

## MVC框架缺陷 ##

“让 View 和 Model 直接对话简直就是灾难”

“MVC 很快就会变得非常复杂，每当工程师想要增加一个新的功能时，对代码的修改很容易就会引发新的 bug，因为不同模块之间的依赖关系让系统变得脆弱且不可预测。对于刚刚加入团队的新手，更是举步维艰，因为不知道修改代码会造成什么样的后果。如果要保险，就会发现寸步难移；如果放手去干，就极可能引进更多 bug”。

一句话：“对于庞大的项目代码而言，MVC难以维护”。


## Redux 基本原则 ##

大原则：“单项数据流”
1.唯一数据源
2.保持状态只读
3.数据改变只能通过纯函数完成













