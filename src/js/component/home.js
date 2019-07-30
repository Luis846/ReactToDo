import React from "react";
import { Todo } from "./todo.js";
import { TodoHead } from "./todohead.js";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<TodoHead />
				<Todo />
			</div>
		);
	}
}
