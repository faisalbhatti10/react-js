import React, {Component} from "react";
import "./Calculator.css";

/*
const updateScreen = (param1, param2) => {
	//function body
}

const obj = {
	abc: "ABC_VALUE",
	xyz: "XUZ_VALUE"
}
*/	

class Calculator extends Component {
	
	constructor(props) {
		
		super(props);
		
		this.state = {
			screen_value: "",
			operator: "",
			saved_value: ""
		};
	}
	
	updateScreen(ev) {
		this.setState({screen_value: this.state.screen_value + ev.target.value});
	}
	
	updateOperator(ev) {
		this.setState({
			screen_value: "",
			operator: ev.target.value,
			saved_value: this.state.screen_value
		});
	}
	
	calculate() {
		
		let new_value = "";
		const value1 = parseFloat(this.state.saved_value);
		const value2 = parseFloat(this.state.screen_value);
		
		switch(this.state.operator) {
			case "+":
				new_value = value1 + value2;
				break;
			case "-":
				new_value = value1 - value2;
				break;
			case "x":
				new_value = value1 * value2;
				break;
			case "/":
				new_value = value1 / value2;
				break;
			default:			
				new_value = value1 - value2;
				break;
		}
		
		this.setState({screen_value: new_value});
	}
	
	render() {
		return (
			<table className="Calculator">
				<tbody>
					<tr>
						<td colSpan={4}><input value={this.state.screen_value} style={{color:"red", backgroundColor: "silver"}} /></td>
					</tr>
					
					<tr>
						<td><input type='button' value='7' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='8' onClick={this.updateScreen.bind(this)} /></td>
						<td><input type='button' value='9' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='/' onClick={(ev) => this.updateOperator(ev)} /></td>
					</tr>
					
					<tr>
						<td><input type='button' value='4' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='5' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='6' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='x' onClick={(ev) => this.updateOperator(ev)} /></td>
					</tr>
					
					<tr>
						<td><input type='button' value='1' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='2' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='3' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='+' onClick={(ev) => this.updateOperator(ev)} /></td>
					</tr>
					
					<tr>
						<td><input type='button' value='0' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='.' onClick={(ev) => this.updateScreen(ev)} /></td>
						<td><input type='button' value='=' onClick={(ev) => this.calculate()} /></td>
						<td><input type='button' value='-' onClick={(ev) => this.updateOperator(ev)} /></td>
					</tr>
				</tbody>
			</table>
		);
	}
}	

export default Calculator;

//JSX