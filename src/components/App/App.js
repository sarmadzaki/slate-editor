import React, { Component } from "react";
import initialValue from  '../../utils/InitialValue';
import  TextEditor  from "../Editor/TextEditor";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			value: initialValue
		}
	}
	
	render() {
		return (
			<div className="App">
			<h1>A Rich Text Editor Using Slate.js</h1>
				<TextEditor initialValue={this.state.value}/>
			</div>
		);
	}
}

export default App;
