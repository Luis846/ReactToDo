import React from "react";

export class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			myList: [],
			input: ""
		};
	}

	pressEnter = e => {
		if (e.key === "Enter") {
			this.setState({
				input: e.target.value,
				myList: this.state.myList.concat(e.target.value)
			});
			this.setState({
				input: ""
			});
		}
	};

	render() {
		return (
			<div>
				<input
					type="text"
					className="inputs"
					placeholder="What needs to be done?"
					onKeyPress={e => this.pressEnter(e)}
				/>

				{this.state.myList &&
					this.state.myList.map((listItem, i) => {
						return <div key={i}>{listItem}</div>;
					})}
			</div>
		);
	}
}
