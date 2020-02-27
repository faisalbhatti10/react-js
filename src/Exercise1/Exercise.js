import React, {Component} from "react";
import $ from 'jquery';
import "./Exercise.css";

class Exercise extends Component {
	
	constructor(props) {
		
		super(props);
		
		this.state = {
			move_counter: 0
		};
	}

	updateClickAction(ev) {
		
		let current_counter = this.state.move_counter;
		current_counter++;
		
		this.setState({move_counter : current_counter});

		let $this = $(ev.target);	
		let x = parseInt($this.attr('data-id-x'));
		let y = parseInt($this.attr('data-id-y'));
		
		$this.toggleClass('active');
		
		// Select Top
		let xAxis = x - 1;
		let yAxis = y;		
		$('.Exercise td[data-id-x="'+(xAxis)+'"][data-id-y="'+(yAxis)+'"]').toggleClass('active');
		
		// Select Right
		xAxis = x;
		yAxis = y + 1;		
		$('.Exercise td[data-id-x="'+(xAxis)+'"][data-id-y="'+(yAxis)+'"]').toggleClass('active');
		
		// Select Bottom
		xAxis = x + 1;
		yAxis = y;		
		$('.Exercise td[data-id-x="'+(xAxis)+'"][data-id-y="'+(yAxis)+'"]').toggleClass('active');
		
		// Select Left
		xAxis = x;
		yAxis = y - 1;		
		$('.Exercise td[data-id-x="'+(xAxis)+'"][data-id-y="'+(yAxis)+'"]').toggleClass('active');
				
		if($('.Exercise td.active').length === 16){
			alert('Congratulations: You have completed this puzzle in '+ current_counter + ' steps.');
		}
	}	
	
	render() {
		return (
			<div className="Exercise">
				<h1>Exercise 1.0</h1>
				<table cellSpacing="0" cellPadding="0">
					<tbody>
						<tr>
							<td data-id-x="0" data-id-y="0" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="0" data-id-y="1" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="0" data-id-y="2" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="0" data-id-y="3" onClick={this.updateClickAction.bind(this)}></td>
						</tr>
						<tr>
							<td data-id-x="1" data-id-y="0" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="1" data-id-y="1" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="1" data-id-y="2" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="1" data-id-y="3" onClick={this.updateClickAction.bind(this)}></td>
						</tr>
						<tr>
							<td data-id-x="2" data-id-y="0" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="2" data-id-y="1" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="2" data-id-y="2" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="2" data-id-y="3" onClick={this.updateClickAction.bind(this)}></td>
						</tr>
						<tr>
							<td data-id-x="3" data-id-y="0" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="3" data-id-y="1" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="3" data-id-y="2" onClick={this.updateClickAction.bind(this)}></td>
							<td data-id-x="3" data-id-y="3" onClick={this.updateClickAction.bind(this)}></td>
						</tr>
					</tbody>
				</table>
			</div>			
		);
	}
}	

export default Exercise;