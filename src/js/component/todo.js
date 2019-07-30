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
			this.setState({ input: (e.target.value = "") });
		}
	};

	clearItem = i => {
		let X = this.state.myList;
		X.splice(i, 1);
		this.setState({ myList: X });
	};

	render() {
		return (
			<div className="container">
				<input
					type="text"
					className="inputs shadow"
					placeholder="  What needs to be done?"
					onKeyPress={e => this.pressEnter(e)}
				/>

				{this.state.myList &&
					this.state.myList.map((listItem, i) => {
						return (
							<div className="row" key={i}>
								<div className="col border-bottom pb-2 spans pt-3">
									<span className="float-left">
										{listItem}
									</span>
									<span className="float-right">
										<i
											className=" pl-1 fas fa-times icons"
											onClick={() => this.clearItem(i)}
										/>
									</span>
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}
