import React, {Component} from "react";
import "./Exercise.css";

class Exercise extends Component {
	
	constructor(props) {
		
		super(props);
		
		this.state = {
			move_counter: 0,
			boxes: [
				[0,0,0,0],
				[0,0,0,0],
				[0,0,0,0],
				[0,0,0,0]
			]
		};
	}

	updateClickAction(row, col) {
		
		let current_counter = this.state.move_counter;
		current_counter++;
		
		this.setState({move_counter : current_counter});
		
		let temp_boxes 	= this.state.boxes;			
		
		if(col > 0)
			temp_boxes[row][col-1] = temp_boxes[row][col-1] === 1 ? 0 : 1;	
		if(col < 3)
			temp_boxes[row][col+1] = temp_boxes[row][col+1] === 1 ? 0 : 1;
		if(row > 0)
			temp_boxes[row-1][col] = temp_boxes[row-1][col] === 1 ? 0 : 1;
		if (row < 3)
			temp_boxes[row+1][col] = temp_boxes[row+1][col] === 1 ? 0 : 1;
		
		temp_boxes[row][col] = temp_boxes[row][col] === 1 ? 0 : 1;
		
		this.setState({boxes: temp_boxes});

		let checkWinner = true;
		temp_boxes.map((index, value) => {
			index.map((index_child, value_child) => {
				if(index_child === 0)
					checkWinner = false;
				
			})
		});
		
		if(checkWinner){
			alert('Congratulations: You have completed this puzzle in '+ current_counter + ' steps.');
		}
	}	
	
	render() {
		return (
			<React.Fragment>
				<div className="Exercise">
					<h1>Exercise 1.1</h1>
					<table cellSpacing="0" cellPadding="0">
						<tbody>
							{this.state.boxes.map((value, index) => {
								return( <tr key={index}>
									{this.state.boxes[index].map((value1, index1) => {
										const additional_class = this.state.boxes[index][index1] === 0 ? "" :  "active";
										return (
											<td key={index + "" + index1} className={"box " + additional_class} onClick={() => this.updateClickAction(index, index1)}></td>
										)
									})}
									</tr>
								);								
							})}
						</tbody>
					</table>
				</div>			
			</React.Fragment>
		);
	}
}	

export default Exercise;