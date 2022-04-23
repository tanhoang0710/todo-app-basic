import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodoStatus } from "../../redux/actions";
import { todoListSelector } from "../../redux/selectors";

const priorityColorMapping = {
	High: "red",
	Medium: "blue",
	Low: "gray",
};

export default function Todo({ id, name, prioriry, completed }) {
	const [checked, setChecked] = useState(completed);
	const todoList = useSelector(todoListSelector);

	const dispatch = useDispatch();

	const toggleCheckbox = () => {
		setChecked(!checked);
		dispatch(toggleTodoStatus(id));
	};

	const handleDeleteTodo = () => {
		const todo = todoList.find((todo) => todo.id === id);
		if (todo.completed) {
			dispatch(deleteTodo(id));
		} else {
			alert("Chưa làm mà đòi xoá à =))))))))");
		}
	};

	return (
		<Row
			justify="space-between"
			style={{
				marginBottom: 3,
			}}
		>
			<Checkbox
				checked={checked}
				onChange={toggleCheckbox}
				style={{
					...(checked
						? { opacity: 0.5, textDecoration: "line-through" }
						: {}),
				}}
			>
				{name}
			</Checkbox>
			<Tag
				color={priorityColorMapping[prioriry]}
				style={{
					marginLeft: "auto",
					...(checked
						? { opacity: 0.5, textDecoration: "line-through" }
						: {}),
				}}
			>
				{prioriry}
			</Tag>
			<button onClick={handleDeleteTodo}>Delete</button>
		</Row>
	);
}
