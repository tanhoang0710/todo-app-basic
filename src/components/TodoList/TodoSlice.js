// localStorage.setItem("todos", JSON.stringify(initState));
const initState = JSON.parse(localStorage.getItem("todos"));

const todoListReducer = (state = initState, action) => {
	switch (action.type) {
		case "todoList/addTodo":
			return [...state, action.payload];
		case "todoList/toggleTodoStatus":
			return state.map((todo) =>
				todo.id === action.payload
					? {
							...todo,
							completed: !todo.completed,
					  }
					: todo
			);
		case "todoList/deleteTodo":
			return state.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
};

export default todoListReducer;
