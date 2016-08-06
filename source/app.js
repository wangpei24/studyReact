var React = require('react');
var ReactDOM = require('react-dom');

var h1 = React.createElement('h1', {className: 'header', key:'header'}, 'This is a header build by React');
var p = React.createElement('p', {className: 'content', key: 'content'}, 'This is how it works');
var reactFragment = [h1, p];
var section = React.createElement('section', {className: 'container'}, reactFragment);
ReactDOM.render(section, document.getElementById('react-application'));


// 使用React来创建一个DOM元素并在浏览器端生成
var list1 = React.createElement('li', {className:'item-1', key:'item-1'}, 'Item1');
var list2 = React.createElement('li', {className:'item-2', key:'item-2'}, 'Item2');
var list3 = React.createElement('li', {className:'item-3', key:'item-3'}, 'Item3');
var listsFragment = [list1, list2, list3];
var ul = React.createElement('ul', {className:'list-of-items'}, listsFragment);
ReactDOM.render(ul, document.getElementById('react-application1'));

// 使用JSX创建React元素
var listOfItems = <ul className="list-of-items">
					<li className="item-1">JSX Item1</li>
					<li className="item-2">JSX Item1</li>
					<li className="item-3">JSX Item1</li>
				</ul>;
ReactDOM.render(listOfItems, document.getElementById('react-application2'))
