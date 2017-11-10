var React = require('react');
var ReactDOM= require('react-dom');
var Application = require('./components/Application.react');

/*
var ReactClass= React.createClass({
	
	getInitialState: function(){
		return {
			isHeaderHidden:false
		};
	},
	isHeaderHidden: false,
	handleClick: function(){
	//	this.isHeaderHidden= !this.isHeaderHidden;
		
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},
	render: function(){
		var title="Stateful React Component";
		var headerElement=React.createElement('h1',{className:'header',key:'header'},title);
		var buttonElement=React.createElement('button',{className:'btn btn-default',onClick: this.handleClick, key: 'button'},'Toggle header');
		
		if (this.state.isHeaderHidden){
			return React.createElement('div',null, [buttonElement]);
		}
		return React.createElement('div',null,[buttonElement,headerElement]);
	}
});
var reactComponentElement= React.createElement(ReactClass);
*/
ReactDOM.render(<Application />, document.getElementById('react-application'));

